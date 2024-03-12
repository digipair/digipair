import getCssSelectorOrigin from 'css-selector-generator';

function unescapeCSS(cssEscapedString: string) {
  return cssEscapedString.replace(/\\([0-9A-Fa-f]{1,6})\s?/g, (match, charCode) =>
    String.fromCharCode(parseInt(charCode, 16))
  ).replace(/\\/g, '');
}

export default function getCssSelector(element: HTMLElement, options = {}) {
  const selector = getCssSelectorOrigin(element, options);
  return unescapeCSS(selector);
}
