import { LitElement, html, noChange, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';
import { generateElementFromPins } from '@digipair/engine';

@customElement('digipair-chatbot-inputs')
export class InputsElement extends LitElement {
  @property({ type: Array })
  inputs: any[] = [];

  @property({ type: Object })
  context: any = {};

  private cache = '';

  get values(): { [key: string]: any }[] {
    return Array.from((this.shadowRoot as unknown as HTMLElement).children).map((el: any) => ({
      value: el.value,
      content: el.content,
      required: el.required,
    }));
  }

  override render() {
    const cache = JSON.stringify(this.inputs);

    if (this.cache === cache) {
      return noChange;
    }
    this.cache = cache;

    return html`
      ${(this.inputs || []).map(
        (pins: PinsSettings) =>
          html`${until(
            generateElementFromPins(pins, null, this.context).then((el: Element) => {
              setTimeout(() => this.dispatchEvent(new CustomEvent('change')), 1);
              el.addEventListener('change', () => this.dispatchEvent(new CustomEvent('change')));
              return el;
            }),
            nothing,
          )}`,
      )}
    `;
  }
}
