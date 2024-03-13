import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';
// import { PinsSettings, generateElementFromPins } from '@digipair/engine';
import * as engine from '@digipair/engine';

const { generateElementFromPins } = engine as any;
type PinsSettings = any;

@customElement('digipair-chatbot-inputs')
export class InputsElement extends LitElement {
  @property({ type: Array })
  inputs: any[] = [];

  @property({ type: Object })
  context: any = {};

  get values(): { [key: string]: any }[] {
    return Array.from((this.shadowRoot as unknown as HTMLElement).children).map((el: any) => ({
      value: el.value,
      content: el.content,
      required: el.required,
    }));
  }

  override render() {
    return html`
      ${(this.inputs || []).map(
      (pins: PinsSettings) =>
        html`${until(
          generateElementFromPins(pins, this.context).then((el: Element) => {
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
