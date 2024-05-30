import { LitElement, TemplateResult, css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import getCssSelector from './tools/css-selector';

@customElement('digipair-input-element')
export class ElementElement extends LitElement {
  @property()
  label = 'Element';

  @property()
  selector = '';

  @property()
  filter = '*';

  @property()
  required = true;

  @state()
  private state = 'unloaded';

  @state()
  private _content = 'aucun element selectionne';
  get content() {
    return this._content;
  }

  private _value = '';
  get value(): string {
    return this._value;
  }

  static override styles = css`
    .digipair-input {
      padding: 10px 15px;
      margin-bottom: 10px;
      line-height: 1.4;
      border: 1px solid var(--digipair-color-primary, #52dfdb);
      color: var(--digipair-color-primary, #52dfdb);
      align-self: flex-start;
      margin-right: auto;
      text-align: center;
    }

    .digipair-input ui5-icon {
      color: var(--digipair-color-secondary, #52dfdb);
    }

    .digipair-input.unloaded ui5-icon {
      color: var(--digipair-color-primary, #52dfdb);
    }

    .digipair-input p {
      text-align: center;
      font-size: 12px;
      margin: 0;
    }

    .digipair-input.unloaded {
      cursor: pointer;
    }

    .digipair-input.loaded ui5-icon {
      float: left;
    }
  `;

  private loadElement() {
    const digipairEl = document.querySelector('digipair-chatbot') as any;

    this.state = 'selecting';
    digipairEl.closeResult();

    const unsetCurrentElement = () => {
      document
        .querySelectorAll('.digipair-input-element-selecting')
        .forEach(el => el.classList.remove('digipair-input-element-selecting'));
    };

    const keydown = (event: any) => {
      if (event.key === 'Escape' || event.keyCode === 27) {
        document.removeEventListener('keydown', keydown);
        document.removeEventListener('click', click);
        document.removeEventListener('mouseout', mouseout);
        unsetCurrentElement();
        this.state = this._value ? 'loaded' : 'unloaded';
        digipairEl.openResult();
      }
    };

    const click = (event: any) => {
      if (event.target.closest('digipair-chatbot')) {
        return;
      }

      document.removeEventListener('keydown', keydown);
      document.removeEventListener('click', click);
      document.removeEventListener('mouseout', mouseout);

      const selector = document.querySelector('.digipair-input-element-selecting');

      if (!selector) {
        this.state = this._value ? 'loaded' : 'unloaded';
        digipairEl.openResult();
        return;
      }

      this._value = getCssSelector(selector, { blacklist: ['.digipair-input-element-selecting'] });
      this._content = `> $(${this._value})`;
      this.state = 'loaded';
      unsetCurrentElement();

      this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));

      setTimeout(() => {
        digipairEl.openResult();
      }, 1);
    };

    const mouseout = (event: any) => {
      if (event.target.closest('digipair-chatbot')) {
        return;
      }

      unsetCurrentElement();
      event.target.closest(this.filter)?.classList.add('digipair-input-element-selecting');
      this.requestUpdate();
    };

    document.addEventListener('keydown', keydown);
    document.addEventListener('click', click);
    document.addEventListener('mouseout', mouseout);
  }

  private addSelectingStyle() {
    if (document.querySelector('#digipair-input-element-style')) {
      return;
    }

    const style = document.createElement('style');
    style.setAttribute('id', 'digipair-input-element-style');
    style.innerHTML = `
      .digipair-input-element-selecting {
        border: 1px dashed rgb(153, 153, 153) !important;
      }
    `;
    document.body.append(style);
  }

  override connectedCallback(): void {
    super.connectedCallback();

    this.addSelectingStyle();

    if (this.selector) {
      this._value = this.selector;
      this._content = `> $(${this.selector})`;
      this.state = 'loaded';
    }
  }

  override render(): TemplateResult {
    return html`
      <section
        class="digipair-input ${this.state}"
        @click=${() =>
          ['unloaded', 'loaded'].indexOf(this.state) >= 0 ? this.loadElement() : void 0}
      >
        ${this.state === 'loaded'
          ? html`
              <ui5-icon name="attachment"></ui5-icon>
              <p>${this.label}<br />${this._content}</p>
            `
          : this.state === 'selecting'
          ? html` <ui5-icon name="locate-me"></ui5-icon>
              <p>
                ${this.label}${document.querySelector('.digipair-input-element-selecting')
                  ? html`<br />$(${getCssSelector(
                        document.querySelector('.digipair-input-element-selecting'),
                        { blacklist: ['.digipair-input-element-selecting'] },
                      )})`
                  : nothing}
              </p>`
          : html` <ui5-icon name="add-document"></ui5-icon>
              <p>${this.label}</p>`}
      </section>
    `;
  }
}
