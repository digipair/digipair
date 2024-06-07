import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('digipair-material-icons-icon')
export class IconElement extends LitElement {
  @property()
  name!: string;

  @property()
  iconStyle = '';

  override render(): TemplateResult {
    return html`
      <link
        id="digipair-material-icons-css"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <span class="material-icons" style=${this.iconStyle}>${this.name}</span>
    `;
  }
}
