import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tesseract from 'tesseract.js/dist/tesseract.esm.min.js';

@customElement('digipair-input-ocr-selector')
export class HiddenElement extends LitElement {
  @property()
  selector!: string;

  @property()
  language = 'eng';

  @property()
  required = true;

  private _value: string | ArrayBuffer = '';
  get value(): string | ArrayBuffer {
    return this._value;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.initialize();
  }

  private async initialize(): Promise<void> {
    const img = document.querySelector(this.selector) as HTMLImageElement;
    if (img) {
      this._value = await this.analyzeFile(img);
      this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
    }
  }

  private async analyzeFile(file: any): Promise<string> {
    const worker = await tesseract.createWorker(this.language);
    const {
      data: { text },
    } = await worker.recognize(file);
    await worker.terminate();

    return text;
  }

  override render(): TemplateResult {
    return html``;
  }
}
