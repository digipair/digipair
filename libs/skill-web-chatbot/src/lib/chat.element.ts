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

  @property({ type: Object })
  context: any;

  @property({ type: Array })
  get inputs(): { [key: string]: any }[] {
    return this.inputsElement?.values || [];
  }

  @property()
  loadingStep!: string;

  @query('#messageInput')
  private messageInput!: HTMLInputElement;

  @query('digipair-chatbot-inputs')
  private inputsElement!: InputsElement;

  private previousMessages = '';
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
          #ffffff
        ); /* Couleur du texte des messages de l'utilisateur */
        align-self: flex-end;
        margin-left: auto;
      }

      .assistant a {
        color: var(--digipair-color-text-primary, #242e3b);
      }

      .user a {
        color: var(--digipair-color-text-secondary, #ffffff);
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
        border-radius: 20px 5px 0px 20px;
        border: 1px solid rgba(112, 183, 253, 0.3);
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
        height: 45px;
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

      .container.with-boost {
        bottom: 105px;
      }

      .input-container.with-boost {
        height: 85px;
      }

      .input .assistant {
        height: 18px;
        max-width: 100%;
        width: 235px;
        overflow: hidden;
        opacity: 0.3;
      }

      .input .assistant p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .button.action {
        float: right;
      }

      .loading {
        overflow: visible !important;
      }

      .loading .step {
        color: #bfc1c3;
        margin-left: 45px;
        padding-top: 15px;
        display: block;
      }

      .loading img {
        float: left;
      }

      .sources {
        margin-top: 10px;
      }

      .sources > .source {
        background-color: rgba(255, 255, 255, 0.5);
        font-size: 12px;
        color: rgb(60, 60, 60);
        padding: 0px 8px;
        display: inline-block;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
        transform: scale(0.95);
        margin-bottom: 4px;
        border-radius: 5px;
        text-decoration: none;
        cursor: default;
      }

      .sources > .source.has-link {
        background-color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
      }

      .sources > .source.has-link:hover {
        transform: scale(1);
      }

      .trust-bar {
        position: relative;
        width: 100%;
        height: 3px;
        background-color: rgba(82, 223, 219, 0.2);
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 5px;
      }

      .trust-bar-fill {
        height: 100%;
        background-color: green;
        transition: width 0.3s ease;
        border-radius: 5px;
      }

      .boosts {
        margin-top: 10px;
        margin-bottom: 5px;
      }

      .boosts.loading {
        display: none;
      }

      .boosts > .boost {
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 20px;
        font-size: 10px;
        color: rgb(60, 60, 60);
        padding: 4px 14px;
        cursor: pointer;
        display: inline-block;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
        transform: scale(0.95);
        margin-bottom: 1px;
      }

      .boosts > .boost:hover {
        transform: scale(1);
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

    if (
      (this.currentBoost && !this.canAnswerToMessageBoost(this.currentBoost)) ||
      this.loading ||
      ((!this.messageInput || this.messageInput.value === '') &&
        (!this.currentBoost || this.currentBoost.required)) ||
      !this.hasInputsValues()
    ) {
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

  private answer(message: any): void {
    const boost = message.boost;

    this.dispatchEvent(
      new CustomEvent('boost', {
        detail: {
          parent_history: message.uuid,
          parent_conversation: message.parent_conversation || message.uuid,
          ...boost,
        },
      }),
    );
  }

  private canAnswerToMessageBoost(boost: any): boolean {
    if (!boost) {
      return false;
    }

    if (boost.checkUrl && !boost.checkUrl.test(window.location.href)) {
      return false;
    }

    if (boost.selector && !document.querySelector(boost.selector)) {
      return false;
    }

    return true;
  }

  private executeBoost(boost: any): void {
    this.dispatchEvent(
      new CustomEvent('executeboost', {
        detail: boost,
      }),
    );
  }

  private getAvailableBoosts(boosts: any[]): any[] {
    return boosts
      .filter(
        (boost: any) =>
          boost &&
          (boost.standalone || boost.selector) &&
          (boost.standalone || document.querySelectorAll(boost.selector).length === 1),
      )
      .map(boost => ({
        ...boost,
        context: {
          element: boost.standalone ? null : boost.selector,
        },
        checkUrl: new RegExp(boost.url),
      }))
      .filter(boost => boost.checkUrl.test(window.location.href));
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

    setTimeout(() => {
      this.renderRoot.querySelectorAll('.mermaid:not([data-processed=true]').forEach(async el => {
        const { svg } = await mermaid.render('graphDiv', el.textContent);
        el.innerHTML = svg;
        el.setAttribute('data-processed', 'true');
      });
    }, 1);

    return html`
      <section class="container ${this.currentBoost ? 'with-boost' : ''}">
        ${this.messages.map(
          message =>
            html`<section class="${message.role}">
              ${this.canAnswerToMessageBoost(message.boost)
                ? html`<ui5-icon
                    name="response"
                    class="button action"
                    @click=${() => this.answer(message)}
                  ></ui5-icon>`
                : nothing}
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
        <digipair-chatbot-inputs
          @change=${() => this.requestUpdate()}
          .inputs=${this.currentBoost?.inputs || []}
          .context=${{ ...this.context, ...(this.currentBoost?.context || {}) }}
        ></digipair-chatbot-inputs>

        ${!this.loading
          ? nothing
          : html`<section class="loading">
              <img src=${WRITTING_IMAGE} /><span class="step">${this.loadingStep}</span>
            </section>`}
      </section>

      <section class="input-container ${this.currentBoost ? 'with-boost' : ''}">
        <section class="input">
          ${this.currentBoost?.parent_history
            ? html`
                <section class="assistant">
                  ${this.messages
                    .filter(message => message.uuid === this.currentBoost?.parent_history)
                    .map(
                      message => html`
                        <ui5-icon
                          name="decline"
                          class="button action"
                          @click=${() =>
                            this.dispatchEvent(new CustomEvent('boost', { detail: null }))}
                        ></ui5-icon>
                        ${unsafeHTML(
                          this.converter.makeHtml(
                            message.content.replace(
                              /```markdown([\s\S]*?)```/g,
                              (_: unknown, group: string) => group,
                            ),
                          ),
                        )}

                        <section class="sources">
                          ${message.sources?.map(
                            (source: any) => html`
                              <a
                                class="source ${source.document_url ? 'has-link' : ''}"
                                href=${source.document_url ?? 'javascript:'}
                                target="_blank"
                              >
                                ${source.document_name}
                                <div class="trust-bar">
                                  <div
                                    class="trust-bar-fill"
                                    style="width: ${source.rank * 100}%;"
                                  ></div>
                                </div>
                              </a>
                            `,
                          )}
                        </section>

                        <section class="actions ${this.loading ? 'loading' : ''}">
                          ${this.getAvailableBoosts(message.boosts || []).map(
                            boost => html`
                              <span class="action" @click=${() => this.executeBoost(boost)}
                                >${boost.summary}</span
                              >
                            `,
                          )}
                        </section>
                      `,
                    )}
                </section>
              `
            : nothing}
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
          class="button ${(this.currentBoost && !this.canAnswerToMessageBoost(this.currentBoost)) ||
          this.loading ||
          ((!this.messageInput || this.messageInput.value === '') &&
            (!this.currentBoost || this.currentBoost.required)) ||
          !this.hasInputsValues()
            ? 'disabled'
            : ''}"
          @click=${() =>
            (this.currentBoost && !this.canAnswerToMessageBoost(this.currentBoost)) ||
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
