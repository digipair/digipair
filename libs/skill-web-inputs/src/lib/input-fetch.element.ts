import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('digipair-input-fetch')
export class FetchElement extends LitElement {
  @property()
  url!: string;

  @property()
  type: 'json' | 'text' = 'json';

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

  private async initialize() {
    const response = await fetch(this.url);
    if (this.type === 'text') {
      this._value = await response.text();
    } else if (this.type === 'json') {
      this._value = await response.json();
    }
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
  }

  override render(): TemplateResult {
    return html``;
  }
}
