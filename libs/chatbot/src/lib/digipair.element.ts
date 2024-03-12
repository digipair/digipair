import '@ui5/webcomponents-icons/dist/AllIcons';
import '@ui5/webcomponents/dist/BusyIndicator';
import '@ui5/webcomponents/dist/Icon';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import './chat.element';
import { ChatElement } from './chat.element';
import { styles } from './digipair.data';
import getCssSelector from './tools/css-selector';
import { executePins, executePinsList } from '@digipair/engine';

const CHAT_COMMAND = (experience: string) => ({
  library: '@pinser-world/actions-experience',
  element: 'executeScene',
  properties: {
    experience,
    scene: 'conversation',
  },
});

let DIGIPAIR_USER = localStorage.getItem('digipair-user');
let NEW_USER = false;

if (!DIGIPAIR_USER) {
  // set uuid
  DIGIPAIR_USER = Math.random().toString(36).substring(2, 15);
  localStorage.setItem('digipair-user', DIGIPAIR_USER);

  NEW_USER = true;
}

@customElement('digipair-chatbot')
export class ChatbotElement extends LitElement {
  @property()
  code = '6539213e2fc9cf277ab8e70c';

  @property()
  firstOpenDelay = 60000;

  @property()
  apiUrl = 'https://service.digipair.ai/api';

  @property()
  baseUrl = 'https://chatbot.digipair.ai';
  
  @property()
  commonExperience = '6539213e2fc9cf277ab8e70c';

  @state()
  private boosters: any[] = [];

  @state()
  private loading = false;

  @state()
  private resultState = 'open';

  @state()
  private currentBoost: any = null;

  @state()
  private messages: { role: string; content: string }[] = [];

  @query('digipair-chatbot-chat')
  private chatbot!: ChatElement;

  private alreadyOpened = false;
  private isDigipairLoading = false;
  private metadata!: {
    id: string,
    avatar: string,
    color: string,
  };

  private blurEvent = (event: Event) => {
    const path = event.composedPath();
    if (!path.includes(this)) {
      // L'événement a été déclenché en dehors du composant
      this.closeResult();
    }
  };

  override connectedCallback(): void {
    super.connectedCallback();

    this.boostListener();
    document.addEventListener('click', this.blurEvent);
  }

  override disconnectedCallback(): void {
    document.removeEventListener('click', this.blurEvent);
  }
  
  private async boostListener() {
    const experience = this.code;
    const boosts = (await this.executeScene(this.commonExperience, 'boosts', {
      experience,
    }))
      .map(({ name, metadata }: any) => metadata?.boosts.map((boost: any) => ({ ...boost, scene: name, checkUrl: new RegExp(boost.url) })))
      .flat()
      .filter((boost: any) => boost && boost.selector);
    let lastSelectedBoosts: any [] | null = [];

    document.addEventListener(
      'mouseover',
      (event: any) => {
        lastSelectedBoosts = event.target.closest('digipair-ai') ? null : this.getBoostsFromTarget(event.target, boosts);

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
                library: '@pinser-world/actions-experience',
                element: 'executeScene',
                properties: {
                  experience: this.code,
                  scene: boost.scene,
                  input: {},
                }
              }
            }));
        }, 1000);
      },
      true,
    );
  }

  private getBoostsFromTarget(target: any, boosts: any[]): any[] {
    return boosts
      .filter((boost) => boost.checkUrl.test(window.location.href) && !!target.closest(boost.selector));
  }

  private async loadDigipair(): Promise<void> {
    this.isDigipairLoading = true;

    const experience = this.code;
    const scene = 'metadata';
    const metadata = await this.executeScene(this.commonExperience, scene, {
      experience,
    });

    this.metadata = { ...metadata, id: experience };
    await this.loadHistory();

    setTimeout(() => {
      this.scrollDown();
      setTimeout(() => {
        this.closeResult();
      }, 1);
    }, 1);

    this.isDigipairLoading = false;

    if (NEW_USER) {
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
    const userId = DIGIPAIR_USER;
    const experience = this.code;
    const scene = 'history';
    const messages = await this.executeScene(experience, scene, {
      userId,
    });

    if (messages.length > 0) {
      this.messages = messages;
    }
  }

  private scrollDown(): void {
    const container = (this.shadowRoot as unknown as HTMLElement).querySelector('.container') as HTMLElement;
    container.scrollTop = container.scrollHeight;
  }

  async execute(boost: any, message?: string): Promise<void> {
    this.currentBoost = null;
    this.loading = true;

    if (boost) {
      this.messages.push({
        role: 'user',
        content: boost.name,
      });
    }
    if (boost?.text) {
      this.messages.push({
        role: 'assistant',
        content: boost.text,
      });
    }
    this.chatbot.inputs.forEach(({ content }) => {
      if (!content) {
        return;
      }

      this.messages.push({
        role: 'user',
        content,
      });
    });
    if (message || boost.command.properties.input.prompt) {
      this.messages.push({
        role: 'user',
        content: message || boost.command.properties.input.prompt,
      });
    }
    this.chatbot.requestUpdate();

    const command = boost ? boost.command : CHAT_COMMAND(this.code);
    try {
      const pins = JSON.parse(JSON.stringify(command));
      pins.properties.input = {
        ...(pins.properties.input || {}),
        prompt: message || pins.properties.input.prompt,
        inputs: this.chatbot.inputs,
        userId: DIGIPAIR_USER,
        ...(!boost
          ? {}
          : {
            boost: {
              name: boost.name,
              text: boost.text,
            },
          }),
      };

      const detail = await executePins(pins);
      this.pushAssistantMessage(detail.assistant);

      if (detail.command && detail.command.length > 0) {
        executePinsList(detail.command, {});
      }
    } catch (error) {
      this.pushAssistantMessage('Oups, il y a eu une erreur...');
    }

    this.loading = false;
  }

  private executeBoost(boost: any): void {
    this.currentBoost = boost;

    if (!boost.prompt && (boost.inputs || []).length === 0) {
      this.execute(boost);
    } else if (boost.text) {
      this.openResult();
    }
  }

  private pushAssistantMessage(message: string): void {
    this.openResult();
    this.messages.push({
      role: 'assistant',
      content: message,
    });
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

  private executeScene = async (
    experience: string,
    scene: string,
    input: any = {},
  ): Promise<any> => {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        experience,
        scene,
        input,
      }),
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
      <section class="container result-${this.resultState}">
        <section class="result" style="border: 1px solid ${this.metadata.color}">
          <digipair-chatbot-chat
            baseUrl=${this.baseUrl}
            ?loading=${this.loading}
            .messages=${this.messages}
            .currentBoost=${this.currentBoost}
            @prompt=${(event: any) => this.execute(this.currentBoost, event.detail.prompt)}
          ></digipair-chatbot-chat>
        </section>

        <section class="actions ${this.loading ? 'loading' : ''}">
          ${!this.currentBoost
        ? this.boosters.map(
          boost => html`
                  <span class="action" style="border: 1px solid ${this.metadata.color}" @click=${() => this.executeBoost(boost)}>${boost.name}</span>
                `,
        )
        : html`
          <span
            class="action"
            style="border: 1px solid ${this.metadata.color}"
            @click=${() => {
            this.currentBoost = null;
            this.boosters = [];
          }}
              >Annuler</span
          >
        `}
        </section>

        <section class="panel" style="border: 1px solid ${this.metadata.color}"></section>
        <img
          @click=${() => (this.resultState !== 'closed' ? this.closeResult() : this.openResult())}
          class="logo ${this.loading ? 'loading' : ''}"
          src=${this.metadata.avatar}
        />
      </section>
    `;
  }
}
