import { fetchEventSource } from '@microsoft/fetch-event-source';
import '@ui5/webcomponents-icons/dist/AllIcons';
import '@ui5/webcomponents/dist/BusyIndicator';
import '@ui5/webcomponents/dist/Icon';
import { executePinsList } from '@digipair/engine';
import { html, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import './chat.element';
import { ChatElement } from './chat.element';
import { styles } from './digipair-full.data';
import { _config } from './config';
import { Message } from './message.interface';

@customElement('digipair-chatbot-full')
export class DigipairFullElement extends LitElement {
  @property()
  code = 'common';

  @property()
  apiUrl = _config.API_URL;

  @property()
  userId: string | null = null;

  @state()
  private boosters: any[] = [];

  @state()
  private loading = false;

  @state()
  private currentBoost: any = null;

  @state()
  private messages: Message[] = [];

  @state()
  private loadingStep = '';

  @query('digipair-chatbot-chat')
  private chatbot!: ChatElement;
  private cacheBoosters: any[] = [];
  private isDigipairLoading = false;
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

  private CHAT_COMMAND(digipair: string, reasoning: string) {
    return {
      library: '@digipair/actions-chatbot',
      element: 'executeRemoteReasoning',
      properties: {
        digipair,
        reasoning: reasoning ?? 'conversation',
        apiUrl: this.apiUrl,
      },
    };
  }

  override connectedCallback(): void {
    super.connectedCallback();

    this.loadUser();
    this.loadBoosters();
    this.initializeSSE();
  }

  private initializeSSE() {
    const digipair = this.code;
    const reasoning = 'notification';

    fetchEventSource(`${this.apiUrl}/${digipair}/${reasoning}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      onmessage: (message: any) => {
        if (message.event !== 'message') {
          return;
        }

        const data = JSON.parse(message.data);

        if (data.type === 'step') {
          this.loadingStep = data.content;
        }

        if (data.type === 'message') {
          this.pushMessage(data.content);
        }
      },
      body: JSON.stringify({
        userId: this.userId,
      }),
      onerror(err) {
        console.error('[Digipair] SSE Error:', err);
      },
    });
  }

  private loadUser(): void {
    if (this.userId) {
      return;
    }

    this.userId = localStorage.getItem('digipair-user');

    if (!this.userId) {
      // set uuid
      this.userId = Math.random().toString(36).substring(2, 15);
      localStorage.setItem('digipair-user', this.userId);
    }
  }
  private async loadBoosters(): Promise<void> {
    this.cacheBoosters = (await this.executeScene('boosts'))
      .map((boost: any) => ({
        ...boost,
        checkUrl: new RegExp(boost.url),
      }))
      .filter((boost: any) => boost.standalone);
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
    }, 1);

    this.isDigipairLoading = false;
  }

  private async loadHistory(): Promise<void> {
    const userId = this.userId;
    const reasoning = 'history';
    const messages = (
      await this.executeScene(reasoning, {
        userId,
      })
    ).map((message: any) => ({
      ...message,
      boost: message.boost
        ? {
            ...message.boost,
            checkUrl: message.boost.url ? new RegExp(message.boost.url) : null,
          }
        : null,
    }));

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
    this.loadingStep = '';
    this.loading = true;

    if (message || boost?.command?.properties?.input?.prompt) {
      this.messages.push({
        role: 'user',
        content: message || boost.command.properties.input.prompt,
      });
    }
    this.chatbot.requestUpdate();

    const command = boost?.command ? boost.command : this.CHAT_COMMAND(this.code, boost?.reasoning);
    try {
      const pins = JSON.parse(JSON.stringify(command));
      pins.properties = pins.properties || {};
      pins.properties.input = {
        ...(pins.properties.input || {}),
        prompt: message || pins.properties.input?.prompt,
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
        config: { VERSIONS: this.metadata.config.VERSIONS },
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
        boosts: detail.boosts,
        sources: detail.sources,
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

    this.loadingStep = '';
    this.loading = false;
  }

  private executeBoost(boost: any): void {
    this.execute(boost);
    this.closeMenu();

    setTimeout(() => {
      (this.chatbot?.shadowRoot?.querySelector('#messageInput') as any).focus();
    }, 1);
  }

  private pushMessage(message: Message): void {
    this.messages.push(message);
    this.chatbot.requestUpdate();
  }

  private async openMenu(): Promise<void> {
    this.boosters = this.cacheBoosters;
  }

  private closeMenu(): void {
    this.boosters = [];
  }

  private setBoost(boost: any): void {
    this.currentBoost = boost;
    this.boosters = [];
  }

  private executeScene = async (reasoning: string, input: any = {}): Promise<any> => {
    const digipair = this.code;
    const response = await fetch(`${this.apiUrl}/${digipair}/${reasoning}`, {
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
        --digipair-color-primary: ${this.metadata.secondary};
        --digipair-color-text-primary: ${this.metadata.textPrimary};
        --digipair-color-text-primary: ${this.metadata.textSecondary};
      </style>

      <section class="container">
        <section class="result" style="border: 1px solid var(--digipair-color-primary, #52DFDB)">
          <digipair-chatbot-chat
            ?loading=${this.loading}
            .messages=${this.messages}
            .currentBoost=${this.currentBoost}
            .context=${{ config: this.metadata.config, variables: this.metadata.variables }}
            loadingStep=${this.loadingStep}
            @prompt=${(event: any) => this.execute(this.currentBoost, event.detail.prompt)}
            @boost=${(event: any) => this.setBoost(event.detail)}
            @executeboost=${(event: any) => this.executeBoost(event.detail)}
          ></digipair-chatbot-chat>
        </section>

        <section class="actions ${this.loading ? 'loading' : ''}">
          ${this.boosters.map(
            boost => html`
              <div>
                <span
                  class="action"
                  style="border: 1px solid var(--digipair-color-primary, #52DFDB)"
                  @click=${() => this.executeBoost(boost)}
                  >${boost.summary}</span
                >
              </div>
            `,
          )}
        </section>

        <section
          class="panel"
          style="border: 1px solid var(--digipair-color-primary, #52DFDB)"
        ></section>
        <img
          class="logo ${this.loading ? 'loading' : ''}"
          src=${this.metadata.avatar}
          @click=${() => (this.boosters.length <= 0 ? this.openMenu() : this.closeMenu())}
        />
      </section>
    `;
  }
}
