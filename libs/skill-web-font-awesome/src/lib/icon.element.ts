import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('digipair-font-awesome-icon')
export class IconElement extends LitElement {
  @property()
  name!: string;

  @property()
  category!: string;

  override connectedCallback(): void {
    super.connectedCallback();

    if (document.querySelector('#digipair-font-awesome')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'digipair-font-awesome';
    style.textContent = `
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
    `;

    // ajout au header de la page
    document.head.appendChild(style);
  }

  override render(): TemplateResult {
    return html`
      <style>
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
      </style>
      <i class="${this.category ? 'fa-' + this.category : 'fa'} fa-${this.name}"></i>
    `;
  }
}
