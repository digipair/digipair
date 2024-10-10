import '@ui5/webcomponents-icons/dist/AllIcons';
import '@ui5/webcomponents/dist/BusyIndicator';
import '@ui5/webcomponents/dist/Icon';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { executePinsList } from '@digipair/engine';
import './chat.element';
import { ChatElement } from './chat.element';
import { styles } from './digipair.data';
import getCssSelector from './tools/css-selector';
import { _config } from './config';
import { Message } from './message.interface';

let API_URL: string;

@customElement('digipair-chatbot')
export class ChatbotElement extends LitElement {
  @property()
  code = 'common';

  @property()
  firstOpenDelay = 60000;

  @property()
  apiUrl = _config.API_URL;

  @property()
  userId: string | null = null;

  @state()
  private boosters: any[] = [];

  @state()
  private loading = false;

  @state()
  private resultState = 'open';

  @state()
  private currentBoost: any = null;

  @state()
  private messages: Message[] = [];

  @query('digipair-chatbot-chat')
  private chatbot!: ChatElement;
  private CHAT_COMMAND = (digipair: string, reasoning: string) => ({
    library: '@digipair/actions-chatbot',
    element: 'executeRemoteReasoning',
    properties: {
      digipair,
      reasoning: reasoning ?? 'conversation',
      apiUrl: API_URL,
    },
  });

  private alreadyOpened = false;
  private isDigipairLoading = false;
  private newUser!: boolean;
  private metadata!: {
    id: string;
    config: { VERSIONS: { [key: string]: string } };
    variables: { [key: string]: any };
    avatar: string;
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
  };

  private blurEvent = (event: Event) => {
    const path = event.composedPath();
    if (!path.includes(this)) {
      // L'événement a été déclenché en dehors du composant
      this.closeResult();
    }
  };

  override connectedCallback(): void {
    API_URL = this.apiUrl;

    super.connectedCallback();

    this.loadUser();
    this.boostListener();
    this.externalBoostListener();
    document.addEventListener('click', this.blurEvent);
  }

  override disconnectedCallback(): void {
    document.removeEventListener('click', this.blurEvent);
  }

  private externalBoostListener() {
    this.addEventListener('executeBoost', ({ detail }: any) => {
      setTimeout(() => this.executeBoost({ context: {}, ...detail }), 1);
    });
  }

  private loadUser(): void {
    this.newUser = false;

    if (this.userId) {
      return;
    }

    this.userId = localStorage.getItem('digipair-user');
    if (!this.userId) {
      // set uuid
      this.userId = Math.random().toString(36).substring(2, 15);
      localStorage.setItem('digipair-user', this.userId);

      this.newUser = true;
    }
  }

  private async boostListener() {
    const boosts = (await this.executeScene('boosts'))
      .map((boost: any) => ({
        ...boost,
        checkUrl: new RegExp(boost.url),
      }))
      .filter((boost: any) => boost.selector);
    let lastSelectedBoosts: any[] | null = [];

    document.addEventListener(
      'mouseover',
      (event: any) => {
        lastSelectedBoosts = event.target.closest('digipair-chatbot')
          ? null
          : this.getBoostsFromTarget(event.target, boosts);

        setTimeout(async () => {
          // si on est sur le chatbot, on ne fait rien
          if (!lastSelectedBoosts) {
            return;
          }

          const selectedBoosts = this.getBoostsFromTarget(event.target, boosts);

          // garder les boosts communs entre les deux listes
          this.boosters = selectedBoosts
            .filter(boost => lastSelectedBoosts?.includes(boost))
            .map(boost => ({
              name: boost.name,
              prompt: boost.prompt,
              required: boost.required,
              text: boost.text,
              inputs: boost.inputs,
              context: {
                element: getCssSelector(event.target.closest(boost.selector)),
              },
              command: {
                library: '@digipair/actions-chatbot',
                element: 'executeRemoteReasoning',
                properties: {
                  digipair: this.code,
                  reasoning: boost.scene,
                  input: {},
                  apiUrl: API_URL,
                },
              },
            }));
        }, 1000);
      },
      true,
    );
  }

  private getBoostsFromTarget(target: any, boosts: any[]): any[] {
    return boosts.filter(
      boost => boost.checkUrl.test(window.location.href) && !!target.closest(boost.selector),
    );
  }

  private async loadDigipair(): Promise<void> {
    this.isDigipairLoading = true;

    const digipair = this.code;
    const reasoning = 'metadata';
    const metadata = await this.executeScene(reasoning);

    this.metadata = { ...metadata, id: digipair, config: { VERSIONS: metadata.config.VERSIONS } };
    await this.loadHistory();

    setTimeout(() => {
      this.scrollDown();
      setTimeout(() => {
        this.closeResult();
      }, 1);
    }, 1);

    this.isDigipairLoading = false;

    if (this.newUser) {
      this.manageNewUser();
    }
  }

  private manageNewUser(): void {
    if (!this.firstOpenDelay) {
      return;
    }

    setTimeout(() => {
      if (this.alreadyOpened) {
        return;
      }

      this.openResult();
    }, this.firstOpenDelay);
  }

  private async loadHistory(): Promise<void> {
    const userId = this.userId;
    const reasoning = 'history';
    const messages = await this.executeScene(reasoning, {
      userId,
    });

    if (messages.length > 0) {
      this.messages = messages;
    }
  }

  private scrollDown(): void {
    const container = (this.shadowRoot as unknown as HTMLElement).querySelector(
      '.container',
    ) as HTMLElement;
    container.scrollTop = container.scrollHeight;
  }

  async execute(boost: any, message?: string): Promise<void> {
    this.loading = true;

    if (message || boost.command.properties.input.prompt) {
      this.messages.push({
        role: 'user',
        content: message || boost.command.properties.input.prompt,
      });
    }
    this.chatbot.requestUpdate();

    const command = boost?.command ? boost.command : this.CHAT_COMMAND(this.code, boost?.reasoning);
    try {
      const pins = JSON.parse(JSON.stringify(command));
      pins.properties.input = {
        ...(pins.properties.input || {}),
        prompt: message || pins.properties.input.prompt,
        inputs: this.chatbot.inputs,
        userId: this.userId,
        step: boost?.step,
        parent_history: boost?.parent_history,
        parent_conversation: boost?.parent_conversation,
        context: boost?.context || {},
        ...(!boost
          ? {}
          : {
              boost: {
                name: boost.name,
                text: boost.text,
              },
            }),
      };

      const detail = await executePinsList([pins], {
        config: {
          VERSIONS: this.metadata.config.VERSIONS,
        },
      });
      this.currentBoost = detail.boost
        ? {
            parent_history: detail.uuid,
            parent_conversation: detail.parent_conversation || detail.uuid,
            ...detail.boost,
          }
        : null;
      this.pushMessage({
        role: 'assistant',
        content: detail.assistant,
        uuid: detail.uuid,
        boost: detail.boost,
        parent_conversation: detail.parent_conversation,
        parent_history: detail.parent_history,
      });

      if (detail.command && detail.command.length > 0) {
        executePinsList(detail.command, { config: { VERSIONS: this.metadata.config.VERSIONS } });
      }
    } catch (error) {
      this.pushMessage({
        role: 'assistant',
        content: 'Oops...',
      });
    }

    this.loading = false;
  }

  private executeBoost(boost: any): void {
    this.execute(boost);
    this.openResult();
  }

  private pushMessage(message: Message): void {
    this.openResult();
    this.messages.push(message);
    this.chatbot.requestUpdate();
  }

  private openResult(): void {
    this.resultState = 'open';
    setTimeout(() => {
      (this.chatbot?.shadowRoot?.querySelector('#messageInput') as any).focus();
    }, 1);

    this.alreadyOpened = true;
  }

  private closeResult(): void {
    this.resultState = 'closed';
  }

  private setBoost(boost: any): void {
    this.currentBoost = boost;
    this.boosters = [];
  }

  private executeScene = async (reasoning: string, input: any = {}): Promise<any> => {
    const digipair = this.code;
    const response = await fetch(`${API_URL}/${digipair}/${reasoning}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    return await response.json();
  };

  static override styles = styles;
  override render(): TemplateResult {
    if (this.metadata?.id !== this.code) {
      if (!this.isDigipairLoading) {
        this.loadDigipair();
      }
      return html``;
    }

    return html`
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-style: normal;

        --digipair-color-primary: ${this.metadata.primary};
        --digipair-color-text-primary: ${this.metadata.textPrimary};
        --digipair-color-secondary: ${this.metadata.secondary};
        --digipair-color-text-secondary: ${this.metadata.textSecondary};
      </style>

      <section class="container result-${this.resultState}">
        <section class="result" style="border: 1px solid var(--digipair-color-primary, #52DFDB)">
          <digipair-chatbot-chat
            ?loading=${this.loading}
            .messages=${this.messages}
            .currentBoost=${this.currentBoost}
            .context=${{ config: this.metadata.config, variables: this.metadata.variables }}
            @prompt=${(event: any) => this.execute(this.currentBoost, event.detail.prompt)}
            @boost=${(event: any) => this.setBoost(event.detail)}
          ></digipair-chatbot-chat>
        </section>

        <section class="actions ${this.loading ? 'loading' : ''}">
          ${this.boosters.map(
            boost => html`
              <span
                class="action"
                style="border: 1px solid var(--digipair-color-primary, #52DFDB)"
                @click=${() => this.executeBoost(boost)}
                >${boost.summary}</span
              >
            `,
          )}
        </section>

        <section
          class="panel"
          style="border: 1px solid var(--digipair-color-primary, #52DFDB)"
        ></section>
        <img
          @click=${() => (this.resultState !== 'closed' ? this.closeResult() : this.openResult())}
          class="logo ${this.loading ? 'loading' : ''}"
          src=${this.metadata.avatar}
        />
      </section>
    `;
  }
}
