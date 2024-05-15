/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Handlebars from 'handlebars/dist/handlebars.min.js';
import { JSONPath } from 'jsonpath/jsonpath.min.js';
import { PinsSettings } from './pins-settings.interface';

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

    if (result.startsWith('GET_VALUE:')) {
      const path = result.replace('GET_VALUE:', '');
      const jsonpath = new JSONPath();
      result = jsonpath.value(context, path);
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
  const settings = await preparePinsSettings(settingsOrigin, context, options);
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
  context: any,
  options: { libraries: { [key: string]: string } } = { libraries: {} },
): Promise<Element> => {
  const element = document.createElement(pinsSettings.element);
  element.setAttribute('data-digipair-pins', '');

  const library = pinsSettings.library;
  if (library !== 'web' && !_config.LIBRARIES[library]) {
    const version = options.libraries[library] || 'latest';
    import(`${_config.BASE_URL}/${library}@${version}/index.esm.js`);
  }

  const settings = await preparePinsSettings(pinsSettings, context, options);
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
    const child = await generateElementFromPins(item, settings.context, options);
    element.appendChild(child);
  }

  return element;
};

export const preparePinsSettings = async (
  settings: PinsSettings,
  context: any,
  options: { libraries: { [key: string]: string } } = { libraries: {} },
): Promise<PinsSettings> => {
  const localContext = {
    ...context,
    variables: context.variables || {},
    requests: context.requests || {},
  };

  for (const [key, value] of Object.entries(settings.variables || {})) {
    localContext.variables[key] = applyTemplate(value, localContext);
  }

  for (const [key, value] of Object.entries(settings.requests || {})) {
    localContext.requests[key] = await executePins(value, localContext, options);
  }

  const properties = {} as any;
  for (const [key, value] of Object.entries(settings.properties || {})) {
    properties[key] = applyTemplate(value, localContext);
  }

  return { ...settings, properties };
};
