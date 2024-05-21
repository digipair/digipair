/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Handlebars from 'handlebars/dist/handlebars.min.js';
import { PinsSettings } from './pins-settings.interface';
import { evaluate } from 'feelin';

Handlebars.registerHelper('JSONstringify', function (value: any) {
  return JSON.stringify(value);
});

type CONFIG_KEY = 'BASE_URL' | 'LIBRARIES';
const _config = {
  LIBRARIES: {} as { [key: string]: string },
  BASE_URL: 'https://cdn.jsdelivr.net/npm' as string,
};

export const config = {
  set: (key: CONFIG_KEY, value: any) => {
    _config[key] = value;
  },
};

export const applyTemplate = (value: any, context: any) => {
  let result = value;

  if (typeof value === 'string') {
    const template = Handlebars.compile(value, { noEscape: true });
    result = template(context);

    if (result.startsWith('EVALUATE:')) {
      const path = result.replace(/^EVALUATE:/, '');
      result = evaluate(path, context);
    }
  } else if (typeof value === 'object' && Array.isArray(value)) {
    result = value;
  } else if (typeof value === 'object') {
    result = {} as any;

    Object.entries(value || {}).forEach(([key, attributeValue]) => {
      result[key] = applyTemplate(attributeValue, context);
    });
  }

  return result;
};

export const executePins = async (
  settingsOrigin: PinsSettings,
  context: any = {},
  options: { libraries: { [key: string]: string } } = { libraries: {} },
): Promise<any> => {
  const settings = await preparePinsSettings(settingsOrigin, context);

  if (settings.conditions?.each) {
    return Promise.all(
      settings.conditions.each
        .filter(item => typeof item.conditions.if === 'undefined' || item.conditions.if)
        .map(item =>
          executePins(
            { ...settingsOrigin, conditions: { ...settingsOrigin.conditions, each: undefined } },
            { ...context, item, parent: { item: context.item, parent: context.parent } },
            options,
          ),
        ),
    );
  }

  const version = options.libraries[settings.library] || 'latest';
  const library =
    _config.LIBRARIES[settings.library] ||
    (typeof window === 'undefined'
      ? require(settings.library)
      : await import(`${_config.BASE_URL}/${settings.library}@${version}/index.esm.js`));
  const pins = library?.[settings.element];

  if (!pins) {
    throw new Error(`Element ${settings.element} not found in library ${settings.library}`);
  }

  return await pins(settings.properties, settings.pins, context);
};

export const executePinsList = async (
  pinsSettingsList: PinsSettings[],
  context: any,
  options: { libraries: { [key: string]: string } } = { libraries: {} },
): Promise<any> => {
  let previous = {};
  const steps = [];

  // parcourir tous les pins
  for (let i = 0; i < pinsSettingsList.length; i++) {
    const settings = pinsSettingsList[i];

    if (typeof settings.conditions?.if !== 'undefined' && !settings.conditions.if) {
      continue;
    }

    previous = await executePins(
      settings,
      {
        ...context,
        previous,
        steps,
        parent: { previous: context.previous, steps: context.steps, parent: context.parent },
      },
      options,
    );
    steps[i] = { name: settings.name, result: previous };
  }

  return previous;
};

export const generateElementFromPins = async (
  pinsSettings: PinsSettings,
  parent: Element,
  context: any,
  options: { libraries: { [key: string]: string } } = { libraries: {} },
): Promise<Element | void> => {
  const settings = await preparePinsSettings(pinsSettings, context);

  if (settings.conditions?.each) {
    for (let i = 0; i < settings.conditions.each.length; i++) {
      const item = settings.conditions.each[i];
      await generateElementFromPins(
        { ...pinsSettings, conditions: { ...pinsSettings.conditions, each: undefined } },
        parent,
        { ...context, item, parent: { item: context.item, parent: context.parent } },
        options,
      );
    }
    return;
  }

  if (typeof settings.conditions?.if !== 'undefined' && !settings.conditions.if) {
    return;
  }

  const element = document.createElement(pinsSettings.element);
  element.setAttribute('data-digipair-pins', '');

  const library = pinsSettings.library;
  if (library !== 'web' && !_config.LIBRARIES[library]) {
    const version = options.libraries[library] || 'latest';
    import(`${_config.BASE_URL}/${library}@${version}/index.esm.js`);
  }

  Object.entries(settings.properties || {}).forEach(([key, value]) => {
    if (key === 'textContent') {
      element.textContent = value;
    }
    if (typeof value === 'string') {
      element.setAttribute(key, value);
    } else {
      (element as any)['__' + key] = value;
    }
  });

  Object.entries(settings.events || ({} as { [key: string]: PinsSettings[] })).forEach(
    ([key, pinsList]) => {
      element.addEventListener(key as keyof HTMLElementEventMap, (_event: Event) => {
        const event = _event as CustomEvent;
        executePinsList(pinsList, { ...context, event: event.detail }, options);
      });
    },
  );

  const pinsList = settings.pins || [];
  for (let i = 0; i < pinsList.length; i++) {
    const item = pinsList[i];
    await generateElementFromPins(item, element, settings.context, options);
  }

  parent?.appendChild(element);

  return element;
};

export const preparePinsSettings = async (
  settings: PinsSettings,
  context: any,
): Promise<PinsSettings> => {
  const localContext = {
    ...context,
    variables: context.variables || {},
    conditions: context.conditions || {},
  };

  for (const [key, value] of Object.entries(settings.variables || {})) {
    localContext.variables[key] = applyTemplate(value, localContext);
  }

  const conditions = {} as any;
  for (const [key, value] of Object.entries(settings.conditions || {})) {
    conditions[key] = await applyTemplate(value, localContext);
  }

  const properties = {} as any;
  for (const [key, value] of Object.entries(settings.properties || {})) {
    properties[key] = applyTemplate(value, localContext);
  }

  return { ...settings, properties, conditions };
};
