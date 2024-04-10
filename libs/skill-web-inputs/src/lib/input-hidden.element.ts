import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('digipair-input-hidden')
export class HiddenElement extends LitElement {
  @property()
  value = '';

  @property()
  required = true;

  override render(): TemplateResult {
    return html``;
  }
}
