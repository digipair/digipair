import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('digipair-input-dom-attribute')
export class DomAttributeElement extends LitElement {
  @property()
  selector = '';

  @property()
  attribute = '';

  @property()
  required = true;

  private _value: any;
  get value(): any {
    return this._value;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.initialize();
  }

  private async initialize(): Promise<void> {
    const element = document.querySelector(this.selector) as any;
    const value = element[this.attribute] ?? element.getAttribute(this.attribute);

    if (!(value instanceof Promise)) {
      this._value = value;
      return;
    }

    try {
      this._value = await value;
      this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
    } catch (error) {
      this._value = value;
    }
  }

  override render(): TemplateResult {
    return html``;
  }
}
