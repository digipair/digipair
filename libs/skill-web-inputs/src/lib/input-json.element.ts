import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('digipair-input-json')
export class InputJsonElement extends LitElement {
  @property()
  label = 'Upload';

  @property()
  accept = '.json';

  @property()
  multiple = false;

  @property()
  required = true;

  @state()
  private state = 'unloaded';

  @state()
  private _content = 'no file selected';
  get content() {
    return this._content;
  }

  private _value: string | ArrayBuffer | null = '';
  get value(): string | ArrayBuffer | null {
    return this._value;
  }

  static override styles = css`
    .download {
      padding: 10px 15px;
      margin-bottom: 10px;
      line-height: 1.4;
      border-color: rgb(220, 248, 198);
      border: 1px solid rgb(112, 183, 253);
      color: rgb(112, 183, 253);
      align-self: flex-start;
      margin-right: auto;
      text-align: center;
    }

    .download.unloaded ui5-icon {
      color: rgb(112, 183, 253);
    }

    .download.loaded {
      border: 1px solid rgb(213 213 213);
      color: rgb(0, 0, 0);
    }

    .download p {
      text-align: center;
      font-size: 12px;
      margin: 0;
    }

    .download.unloaded {
      cursor: pointer;
    }

    .download.loaded ui5-icon {
      float: left;
    }
  `;

  private loadFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = this.multiple;
    input.accept = this.accept;
    input.onchange = (event: any) => {
      const files = event.target.files;
      const file = files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        this._value = JSON.parse(reader.result as string);
        this._content = `> ${file.name}`;
        this.state = 'loaded';
        this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
      };
    };
    input.click();
  }

  override render(): TemplateResult {
    return html`
      <section
        class="download ${this.state}"
        @click=${() => (['unloaded', 'loaded'].indexOf(this.state) >= 0 ? this.loadFile() : void 0)}
      >
        ${this.state === 'loaded'
          ? html` <ui5-icon name="attachment"></ui5-icon>
              <p>${this.label}<br />${this._content}</p>`
          : html` <ui5-icon name="add-document"></ui5-icon>
              <p>${this.label}</p>`}
      </section>
    `;
  }
}
