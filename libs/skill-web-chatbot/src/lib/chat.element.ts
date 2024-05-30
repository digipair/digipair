import mermaid from 'mermaid/dist/mermaid.esm.min.mjs';
import { LitElement, TemplateResult, css, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import * as showdown from 'showdown';
import { InputsElement } from './inputs.element';
import { WRITTING_IMAGE } from './common.data';
import './inputs.element';

@customElement('digipair-chatbot-chat')
export class ChatElement extends LitElement {
  @property({ type: Boolean })
  loading!: boolean;

  @property({ type: Array })
  messages!: any[];

  @property({ type: Object })
  currentBoost: any;

  @property({ type: Array })
  get inputs(): { [key: string]: any }[] {
    return this.inputsElement?.values || [];
  }

  @query('#messageInput')
  private messageInput!: HTMLInputElement;

  @query('digipair-chatbot-inputs')
  private inputsElement!: InputsElement;

  private previousMessages = '';
  private previousCurrentBoostText: string | undefined = undefined;
  private converter!: showdown.Converter;

  static override styles = [
    css`
      /* Pour Chrome et Edge */
      .container::-webkit-scrollbar {
        width: 8px; /* Largeur de la barre de défilement */
        background-color: transparent; /* Couleur de fond du rail de la barre de défilement */
      }

      .container::-webkit-scrollbar-thumb {
        background-color: #bfc1c3;
        border-radius: 10px; /* Pour rendre la barre de défilement arrondie */
        background-clip: padding-box;
        border: 2px solid transparent; /* Espace entre la barre de défilement et son rail */
      }

      .container::-webkit-scrollbar-track {
        background-color: transparent; /* Couleur de fond de la zone de défilement */
      }
      .container {
        position: absolute;
        top: 0;
        bottom: 70px;
        left: 0;
        right: 0;
        padding: 20px;
        overflow-y: scroll;
        margin-top: 1px;
        margin-bottom: 2px;
        margin-right: 3px;
      }

      .container > section {
        overflow: auto;
      }
      .container > section::-webkit-scrollbar {
        height: 8px; /* Largeur de la barre de défilement */
        background-color: transparent; /* Couleur de fond du rail de la barre de défilement */
      }
      .container > section::-webkit-scrollbar-thumb {
        background-color: #bfc1c3;
        border-radius: 10px; /* Pour rendre la barre de défilement arrondie */
        background-clip: padding-box;
        border: 2px solid transparent; /* Espace entre la barre de défilement et son rail */
      }
      .container > section::-webkit-scrollbar-track {
        background-color: transparent; /* Couleur de fond de la zone de défilement */
      }

      .assistant,
      .user {
        max-width: 70%; /* Largeur maximale des bulles de chat */
        padding: 10px 15px;
        margin-bottom: 10px;
        border-radius: 20px;
        line-height: 1.4;
      }

      .assistant {
        background-color: var(
          --digipair-color-primary,
          #52dfdb
        ); /* Couleur de fond des messages de l'assistant */
        color: var(
          --digipair-color-text-primary,
          #242e3b
        ); /* Couleur du texte des messages de l'assistant */
        align-self: flex-start;
        margin-right: auto;
      }

      .user {
        background-color: var(--digipair-color-secondary, #242e3b);
        color: var(
          --digipair-color-text-secondary,
          #FFFFFF
        ); /* Couleur du texte des messages de l'utilisateur */
        align-self: flex-end;
        margin-left: auto;
      }

      .assistant a {
        color: var(--digipair-color-text-primary, #242e3b);
      }

      .user a {
        color: var(--digipair-color-text-secondary, #FFFFFF);
      }

      .input-container {
        position: absolute;
        bottom: 0px;
        right: 0;
        left: 0;
        height: 50px;
        margin-top: 0px;
        padding-top: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
        box-shadow: rgba(0, 0, 0, 0.05) 0 0 25px;
      }

      .input-container input {
        outline: none;
        width: 250px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #bababa;
        background-color: transparent;
        margin-right: 6px;
        padding-bottom: 0px;
      }

      .button {
        margin-left: 5px;
      }
      .button:not(.disabled) {
        cursor: pointer;
      }
      .button:hover:not(.disabled) {
        color: rgb(112, 183, 253);
      }
      .button.disabled {
        color: rgb(220 220 220);
      }

      .input {
        position: absolute;
        top: 0;
        bottom: 5px;
        left: 8px;
        right: 40px;
        margin-top: 5px;
        margin-left: 4px;
        margin-bottom: 5px;
      }

      #messageInput {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        resize: none;
        background-color: white;
        color: black;
      }
      #messageInput::-webkit-scrollbar {
        width: 8px; /* Largeur de la barre de défilement */
        background-color: transparent; /* Couleur de fond du rail de la barre de défilement */
      }
      #messageInput::-webkit-scrollbar-thumb {
        background-color: #bfc1c3;
        border-radius: 10px; /* Pour rendre la barre de défilement arrondie */
        background-clip: padding-box;
        border: 2px solid transparent; /* Espace entre la barre de défilement et son rail */
      }
      #messageInput::-webkit-scrollbar-track {
        background-color: transparent; /* Couleur de fond de la zone de défilement */
      }

      p {
        margin: 0;
      }

      [name='microphone'] {
        position: absolute;
        right: 10px;
        top: 12px;
      }

      [name='begin'] {
        position: absolute;
        right: 10px;
        top: 40px;
      }
    `,
  ];

  override connectedCallback(): void {
    super.connectedCallback();

    mermaid.initialize({ startOnLoad: false });
    showdown.extension('mermaid', function () {
      return [
        {
          type: 'lang',
          filter: function (text: string) {
            return text.replace(/```mermaid([^`]+)```/g, (_match, diagramCode) => {
              return '<div class="mermaid">' + diagramCode + '</div>';
            });
          },
        },
      ];
    });
    this.converter = new showdown.Converter({
      simplifiedAutoLink: true,
      strikethrough: true,
      tables: true,
      tasklists: true,
      smoothLivePreview: true,
    });
    this.converter.addExtension('mermaid' as any, {} as any);
  }

  private async addMessage(content: string): Promise<void> {
    if (this.currentBoost && !this.currentBoost.prompt) {
      this.dispatchEvent(new CustomEvent('prompt', { detail: { prompt: '' } }));
      return;
    }

    this.messageInput.value = '';
    this.dispatchEvent(new CustomEvent('prompt', { detail: { prompt: content } }));
  }

  private scrollDown(): void {
    const container = this.renderRoot.querySelector('.container') as Element;
    container.scrollTop = container.scrollHeight;
  }

  private keypressManagement(event: any) {
    if (event.key !== 'Enter' || event.shiftKey) {
      this.requestUpdate();
      return;
    }

    event.preventDefault();
    this.addMessage(this.messageInput.value.trim());
  }

  private hasInputsValues(): boolean {
    return this.inputsElement.values.reduce(
      (acc, { value, required }) => (required && value === '' ? false : acc),
      true,
    );
  }

  pushMessage(message: any): void {
    this.messages.push(message);
    this.requestUpdate();
  }

  override render(): TemplateResult {
    if (this.previousMessages !== JSON.stringify(this.messages)) {
      this.previousMessages = JSON.stringify(this.messages);
      setTimeout(() => this.scrollDown(), 1);
    }
    if (this.previousCurrentBoostText !== this.currentBoost?.text) {
      this.previousCurrentBoostText = this.currentBoost?.text;
      setTimeout(() => this.scrollDown(), 1);
    }

    setTimeout(() => {
      this.renderRoot.querySelectorAll('.mermaid:not([data-processed=true]').forEach(async el => {
        const { svg } = await mermaid.render('graphDiv', el.textContent);
        el.innerHTML = svg;
        el.setAttribute('data-processed', 'true');
      });
    }, 1);

    return html`
      <section class="container">
        ${this.messages.map(
          message => html`<section class="${message.role}">
            ${unsafeHTML(
              this.converter.makeHtml(
                message.role === 'user'
                  ? message.content.replace(/\n/g, '  \n')
                  : message.content.replace(
                      /```markdown([\s\S]*?)```/g,
                      (_: unknown, group: string) => group,
                    ),
              ),
            )}
          </section>`,
        )}
        ${this.currentBoost?.name
          ? html`<section class="user">${this.currentBoost.name}</section>`
          : nothing}
        ${this.currentBoost?.text
          ? html`<section class="assistant">${this.currentBoost.text}</section>`
          : nothing}
        <digipair-chatbot-inputs
          @change=${() => this.requestUpdate()}
          .inputs=${this.currentBoost?.inputs || []}
          .context=${this.currentBoost?.context || {}}
        ></digipair-chatbot-inputs>

        ${!this.loading
          ? nothing
          : html`<section class="loading"><img src=${WRITTING_IMAGE} /></section>`}
      </section>

      <section class="input-container">
        <section class="input">
          <textarea
            id="messageInput"
            value=""
            placeholder=${this.currentBoost && !this.currentBoost.prompt
              ? ''
              : 'Saisir votre message'}
            @keydown=${() => this.requestUpdate()}
            @keyup=${(event: Event) => this.keypressManagement(event)}
            ?disabled=${this.loading || (this.currentBoost && !this.currentBoost.prompt)}
          ></textarea>
        </section>

        <ui5-icon
          name="begin"
          class="button ${this.loading ||
          ((!this.messageInput || this.messageInput.value === '') &&
            (!this.currentBoost || this.currentBoost.required)) ||
          !this.hasInputsValues()
            ? 'disabled'
            : ''}"
          @click=${() =>
            this.loading ||
            ((!this.messageInput || this.messageInput.value === '') &&
              (!this.currentBoost || this.currentBoost.required)) ||
            !this.hasInputsValues()
              ? void 0
              : this.addMessage(this.messageInput.value.trim())}
        ></ui5-icon>
      </section>
    `;
  }
}
