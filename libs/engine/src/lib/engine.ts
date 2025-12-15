/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as HandlebarsNamespace from 'handlebars/dist/handlebars.min.js';
const Handlebars = (HandlebarsNamespace as any).default || HandlebarsNamespace;
import { evaluate as evaluateFeel } from 'feelin';
import { evaluate as evaluateCel } from 'cel-js';
import { camelCase, kebabCase, snakeCase } from 'case-anything';
import { PinsSettings } from './pins-settings.interface';
import { Alias } from './alias.interface';

Handlebars.registerHelper('JSONstringify', function (value: any) {
  return JSON.stringify(value);
});

const DIGIPAIR_FUNCTIONS = {
  getTime: (time: string) => new Date(time).getTime(),
  fromTime: (time: number) => new Date(time).toISOString(),
  atob: (value: string) => atob(value),
  btoa: (value: string) => btoa(value),
  encodeURIComponent: (value: string | number | boolean) => encodeURIComponent(value),
  decodeURIComponent: (value: string) => decodeURIComponent(value),
  encodeUTF8: (value: string) =>
    Array.from(new TextEncoder().encode(value))
      .map(b => String.fromCharCode(b))
      .join(''),
  decodeUTF8: (value: string) =>
    new TextDecoder().decode(new Uint8Array(Array.from(value).map(c => c.charCodeAt(0)))),
  JSONparse: (value: string) => JSON.parse(value),
  JSONstringify: (value: string) => JSON.stringify(value),
  camelCase: (value: string) => camelCase(value),
  kebabCase: (value: string) => kebabCase(value),
  snakeCase: (value: string) => snakeCase(value),
};

type CONFIG_KEY = 'BASE_URL' | 'LIBRARIES' | 'ALIAS' | 'LOGGER';
const globalInstance: any = typeof window === 'undefined' ? global : window;
const _config = (globalInstance.__DIGIPAIR_CONFIG__ = globalInstance.__DIGIPAIR_CONFIG__ ?? {
  LIBRARIES: {} as { [key: string]: any },
  BASE_URL: 'https://cdn.jsdelivr.net/npm' as string,
  ALIAS: [] as Alias[],
  LOGGER: (level: string, path: string, message: string, context: any, data?: any) => {},
});
const isRemoteVersion = /^https?:\/\/[^\s/$.?#].[^\s]*$/;

const isPinsSettings = (value: any): boolean => {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.element === 'string' &&
    typeof value.library === 'string'
  );
};

export const config = {
  set: (key: CONFIG_KEY, value: any) => {
    _config[key] = key === 'LIBRARIES' && _config[key] ? { ..._config[key], ...value } : value;
  },
  log: (level: string, path: string, message: string, context: any, data?: any) =>
    _config.LOGGER(level, path, message, context, data),
};

export const applyTemplate = (value: any, context: any) => {
  let result = value;

  if (typeof value === 'string') {
    if (result.startsWith('NOEVAL:')) {
      result = value.substring(7);
    } else if (result.startsWith('EVALUATE:')) {
      const path = result.replace(/^EVALUATE:/, '');
      result = evaluateFeel(path, {
        ...context,
        ...DIGIPAIR_FUNCTIONS,
      });
    } else if (result.startsWith('FEEL:')) {
      const path = result.replace(/^FEEL:/, '');
      result = evaluateFeel(path, {
        ...context,
        ...DIGIPAIR_FUNCTIONS,
      });
    } else if (result.startsWith('CEL:')) {
      const path = result.replace(/^CEL:/, '');
      result = evaluateCel(
        path,
        {
          ...context,
        },
        DIGIPAIR_FUNCTIONS,
      );
    } else {
      const template = Handlebars.compile(value, { noEscape: true });
      result = template(context);
    }
  } else if (typeof value === 'object' && Array.isArray(value)) {
    result = value.map(item => (isPinsSettings(item) ? item : applyTemplate(item, context)));
  } else if (typeof value === 'object') {
    result = {} as any;

    Object.entries(value || {}).forEach(([key, attributeValue]) => {
      result[key] = applyTemplate(attributeValue, context);
    });
  }

  return result;
};

const executePins = async (settingsOrigin: PinsSettings, context: any = {}): Promise<any> => {
  let settings = preparePinsSettings(settingsOrigin, context);

  _config.LOGGER(
    'INFO',
    context.__PATH__,
    `execute:${settings.library}:${settings.element}:start`,
    context,
    settings,
  );

  const alias = _config.ALIAS.find((alias: Alias) => settings.library.split(':')[0] === alias.name);
  const config = context.config || {};
  let version = (config.VERSIONS || {})[settings.library] || 'latest';

  if (alias) {
    settings = preparePinsSettings(
      { ...settings, ...alias },
      {
        settings: {
          ...settings,
          version,
          library: settings.library.substring(alias.name.length + 1),
        },
      },
    );
    version = (config.VERSIONS || {})[settings.library] || 'latest';
  }

  if (settings.conditions?.each) {
    const results = [] as any[];

    for (let index = 0; index < settings.conditions.each.length; index++) {
      const item = settings.conditions.each[index];
      const itemSettingsOrigin = {
        ...settingsOrigin,
        conditions: { ...settingsOrigin.conditions, each: undefined },
      };
      const itemContext = {
        ...context,
        item,
        index,
        parent: { item: context.item, index: context.index, parent: context.parent },
      };
      const itemSettings = preparePinsSettings(itemSettingsOrigin, itemContext);

      if (typeof itemSettings.conditions?.if !== 'undefined' && !itemSettings.conditions.if) {
        continue;
      }

      let itemResult = null;
      try {
        itemResult = await executePins(itemSettingsOrigin, itemContext);
      } catch (error) {
        if (error === 'DIGIPAIR_CONDITIONS_IF_FALSE') {
          continue;
        }

        throw error;
      }

      results.push(itemResult);
    }

    return results;
  }

  if (typeof settings.conditions?.if !== 'undefined' && !settings.conditions.if) {
    throw 'DIGIPAIR_CONDITIONS_IF_FALSE';
  }

  const library =
    _config.LIBRARIES[settings.library] ||
    (typeof window === 'undefined'
      ? require(settings.library)
      : await import(
          isRemoteVersion.test(version)
            ? `${version}`
            : `${_config.BASE_URL}/${settings.library}@${version}/index.esm.js`
        ));
  const pins = library?.[settings.element];

  if (!pins) {
    throw new Error(`Element ${settings.element} not found in library ${settings.library}`);
  }

  const result = await pins(settings.noEvalProperties ?? settings.properties, settings.pins, context);
  _config.LOGGER(
    'INFO',
    context.__PATH__,
    `execute:${settings.library}:${settings.element}:end`,
    context,
    result,
  );

  return result;
};

export const executePinsList = async (
  pinsSettingsList: PinsSettings[],
  context: any,
  path = 'root',
): Promise<any> => {
  let previous = {};

  for (let i = 0; i < pinsSettingsList.length; i++) {
    const settings = pinsSettingsList[i];

    try {
      previous = await executePins(settings, {
        ...context,
        previous,
        parent: { previous: context.previous, parent: context.parent },
        __PATH__: `${path}[${i}]`,
      });
    } catch (error) {
      if (error === 'DIGIPAIR_CONDITIONS_IF_FALSE') {
        continue;
      }

      throw error;
    }
  }

  return previous;
};

export const generateElementFromPins = async (
  pinsSettings: PinsSettings,
  parent: Element,
  context: any,
  document: Document = typeof window !== 'undefined' ? window.document : global.document,
  options = { import: true },
): Promise<Element | void> => {
  let settings = preparePinsSettings(pinsSettings, context);
  const alias = _config.ALIAS.find((alias: Alias) => settings.library.split(':')[0] === alias.name);

  if (alias) {
    settings = preparePinsSettings({ ...settings, ...alias }, { settings });
  }

  if (settings.conditions?.each) {
    for (let index = 0; index < settings.conditions.each.length; index++) {
      const item = settings.conditions.each[index];
      await generateElementFromPins(
        { ...pinsSettings, conditions: { ...pinsSettings.conditions, each: undefined } },
        parent,
        {
          ...context,
          item,
          index,
          parent: { item: context.item, index: context.index, parent: context.parent },
        },
        document,
        options,
      );
    }
    return;
  }

  if (typeof settings.conditions?.if !== 'undefined' && !settings.conditions.if) {
    return;
  }

  const element = document.createElement(pinsSettings.element);

  // add digipair-vision and aframe compatibility
  const setAttribute = (attribute: string, value: any) =>
    pinsSettings.element.startsWith('a-') || pinsSettings.element.startsWith('dxr-')
      ? element.setAttributeNS('', attribute, value)
      : element.setAttribute(attribute, value);
  setAttribute('data-digipair-pins', '');

  const library = pinsSettings.library;
  if (options.import && library !== 'web' && !_config.LIBRARIES[library]) {
    const config = context.config || {};
    const version = (config.VERSIONS || {})[library] || 'latest';
    import(
      isRemoteVersion.test(version)
        ? `${version}`
        : `${_config.BASE_URL}/${library}@${version}/index.esm.js`
    );
  }

  Object.entries(settings.properties || {}).forEach(([key, value]) => {
    if (key === 'textContent') {
      element.textContent = value;
    } else if (key === 'innerHTML') {
      element.innerHTML = value;
    } else if (typeof value === 'string') {
      setAttribute(key, value);
    } else {
      (element as any)[key] = value;
    }
  });

  Object.entries(settings.events || ({} as { [key: string]: PinsSettings[] })).forEach(
    ([key, pinsList]) => {
      element.addEventListener(key as keyof HTMLElementEventMap, (_event: Event) => {
        const event = _event as CustomEvent;
        executePinsList(
          pinsList,
          { ...context, event: event.detail },
          `${context.__PATH__}.events[${key}]`,
        );
      });
    },
  );

  const pinsList = settings.pins || [];
  for (let i = 0; i < pinsList.length; i++) {
    const item = pinsList[i];
    await generateElementFromPins(item, element, context, document, options);
  }

  if (parent?.nodeName === 'TEMPLATE') {
    (parent as any).content.appendChild(element);
  } else {
    parent?.appendChild(element);
  }

  return element;
};

export const preparePinsSettings = (settings: PinsSettings, context: any): PinsSettings => {
  const localContext = {
    ...context,
    variables: context.variables || {},
    conditions: context.conditions || {},
  };

  const conditions = {} as any;
  for (const [key, value] of Object.entries(settings.conditions || {})) {
    conditions[key] = applyTemplate(value, localContext);
  }

  const properties = {} as any;
  for (const [key, value] of Object.entries(settings.properties || {})) {
    properties[key] = applyTemplate(value, localContext);
  }

  return { ...settings, properties, conditions };
};
