import getCssSelectorOrigin from 'css-selector-generator';

function unescapeCSS(cssEscapedString: string) {
  return cssEscapedString.replace(/\\([0-9A-Fa-f]{1,6})\s?/g, (_match: any, charCode: any) =>
    String.fromCharCode(parseInt(charCode, 16))
  ).replace(/\\/g, '');
}

export default function getCssSelector(element: any, options: any = {}) {
  const selector = getCssSelectorOrigin(element, options);
  return unescapeCSS(selector);
}
