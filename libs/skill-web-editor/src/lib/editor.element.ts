import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import * as ToastifyJs from 'toastify-js';
import { PinsSettings } from '@digipair/engine';
import { blocksLegacy } from './blocks/json';
import { initializeWorkspaceFromPinsAndLibraries } from './generator/json-to-blockly';
import { schemas as schemasWeb } from './schemas/web.schema';

const Toastify = (ToastifyJs as any).default;
const BASE_URL = 'https://cdn.jsdelivr.net/npm';
const BLOCKLY_VERSION = '10.4.3';
declare const Blockly: any;
let jsonGenerator: any,
  generateBlocklyBlockFromLibraries: any,
  generateToolboxFromLibraries: any,
  initializeMutator: any;

@customElement('digipair-editor')
export class EditorElement extends LitElement {
  @property()
  digipair!: any;

  @property()
  reasoning!: any;

  @property()
  menuColor = 'white';

  @property()
  menuBackgroundColor = 'rgb(66, 133, 244)';

  @property()
  contentStyle = 'position: fixed; top: 0; right: 0; bottom: 0; left: 0;';

  @state()
  private canSave = false;

  private workspace: any;
  private blocks: any;
  private toolbox: any;
  private codeInWorkspace: any;
  private librariesToLoad: any;

  override createRenderRoot() {
    return this;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.initialize();
  }

  private async initialize() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${BASE_URL}/toastify-js/src/toastify.min.css`;
    link.type = 'text/css';
    document.head.appendChild(link);

    let script: any, promise: any;

    script = document.createElement('script');
    script.src = `${BASE_URL}/blockly@${BLOCKLY_VERSION}/blockly_compressed.js`;
    promise = new Promise(resolve => {
      script.onload = resolve;
    });
    document.head.appendChild(script);
    await promise;

    script = document.createElement('script');
    script.src = `${BASE_URL}/blockly@${BLOCKLY_VERSION}/blocks_compressed.js`;
    promise = new Promise(resolve => {
      script.onload = resolve;
    });
    document.head.appendChild(script);
    await promise;

    script = document.createElement('script');
    script.src = `${BASE_URL}/blockly@${BLOCKLY_VERSION}/msg/en.js`;
    promise = new Promise(resolve => {
      script.onload = resolve;
    });
    document.head.appendChild(script);
    await promise;

    const blocklyToJson = await import('./generator/blockly-to-json');
    jsonGenerator = blocklyToJson.jsonGenerator;

    const pinsToBlockly = await import('./generator/pins-to-blockly');
    generateBlocklyBlockFromLibraries = pinsToBlockly.generateBlocklyBlockFromLibraries;
    generateToolboxFromLibraries = pinsToBlockly.generateToolboxFromLibraries;
    initializeMutator = pinsToBlockly.initializeMutator;

    setTimeout(() => this.loadScene(this.digipair, this.reasoning), 1);
    this.addEventListener('setReasoning' as any, ({ detail }: CustomEvent) =>
      this.loadReasoning(detail),
    );
  }

  private loadReasoning(reasoning: PinsSettings) {
    Blockly.Events.disable();
    initializeWorkspaceFromPinsAndLibraries(reasoning, this.workspace, this.librariesToLoad);
    Blockly.Events.enable();
  }

  private async getLibraries(libraries: { [key: string]: string }): Promise<any[]> {
    const list = [
      schemasWeb,
      ...(await Promise.all(
        Object.keys(libraries).map(async (library: any, i: number) =>
          fetch(`${BASE_URL}/${library}@${libraries[library]}/schema.json`).then(res => res.json()),
        ),
      )),
    ];

    return list;
  }

  private async loadScene(digipair: any, reasoning: PinsSettings): Promise<void> {
    const scene = reasoning;
    this.librariesToLoad = await this.getLibraries(digipair.libraries);

    this.loadBlockly(scene);
    if (!scene) {
      return;
    }
    this.canSave = this.verifyCanSaveAndGetCode();
  }

  private verifyCanSaveAndGetCode(): boolean {
    const code = jsonGenerator.workspaceToCode(this.workspace);

    try {
      this.codeInWorkspace = {
        name: this.reasoning.name,
        description: this.reasoning.description,
        ...JSON.parse(code),
      };

      return true;
    } catch (e) {
      return false;
    }
  }

  private async saveScene(): Promise<void> {
    if (this.canSave == true) {
      this.dispatchEvent(
        new CustomEvent('save', {
          detail: {
            digipair: this.digipair.id,
            reasoning: (this.reasoning as any).id,
            value: this.codeInWorkspace,
          },
        }),
      );
    } else {
      Toastify({
        text: 'Your scene cannot be saved, invalid format',
        position: 'center',
        style: {
          'font-family': '"Poppins", sans-serif',
          background: 'linear-gradient(90deg, rgba(121,9,9,1) 0%, rgba(203,62,62,1) 100%)',
        },
        duration: 3000,
      }).showToast();
    }
  }

  private loadBlockly(scene: PinsSettings) {
    initializeMutator();
    const generatedBlocks = generateBlocklyBlockFromLibraries(this.librariesToLoad, blocksLegacy);
    this.blocks = Blockly.common.createBlockDefinitionsFromJsonArray(generatedBlocks);

    const tags =
      this.librariesToLoad.find((library: any) => library.info.title === scene.library)?.[
        'x-scene-blocks'
      ]?.[`/${scene.element}`]?.tags || [];
    this.toolbox = generateToolboxFromLibraries(this.librariesToLoad, tags);
    Blockly.common.defineBlocks(this.blocks);
    const container = this.renderRoot.querySelector('[data-scene]');

    this.workspace = Blockly.inject(
      container as any,
      {
        toolbox: this.toolbox,
        scrollbars: true,
        infiniteBlocks: true,
        trashcan: false,
        move: {
          scrollbars: true,
          drag: true,
          wheel: true,
        },
        theme: Blockly.Theme.defineTheme('modest', {
          blockStyles: {
            logic_blocks: {
              colourPrimary: '#D1C4E9',
              colourSecondary: '#EDE7F6',
              colorTertiary: '#B39DDB',
            },
            loop_blocks: {
              colourPrimary: '#A5D6A7',
              colourSecondary: '#E8F5E9',
              colorTertiary: '#66BB6A',
            },
            math_blocks: {
              colourPrimary: '#2196F3',
              colourSecondary: '#1E88E5',
              colorTertiary: '#0D47A1',
            },
            text_blocks: {
              colourPrimary: '#FFCA28',
              colourSecondary: '#FFF8E1',
              colorTertiary: '#FF8F00',
            },
            list_blocks: {
              colourPrimary: '#4DB6AC',
              colourSecondary: '#B2DFDB',
              colorTertiary: '#009688',
            },
            variable_blocks: {
              colourPrimary: '#EF9A9A',
              colourSecondary: '#FFEBEE',
              colorTertiary: '#EF5350',
            },
            variable_dynamic_blocks: {
              colourPrimary: '#EF9A9A',
              colourSecondary: '#FFEBEE',
              colorTertiary: '#EF5350',
            },
            procedure_blocks: {
              colourPrimary: '#D7CCC8',
              colourSecondary: '#EFEBE9',
              colorTertiary: '#BCAAA4',
            },
          },
        }),
      } as any,
    );

    this.workspace.addChangeListener((e: any) => {
      if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING) {
        return;
      }
      if (this.workspace.isDragging()) {
        return;
      }
      this.canSave = this.verifyCanSaveAndGetCode();
    });

    Blockly.Events.disable();
    initializeWorkspaceFromPinsAndLibraries(scene, this.workspace, this.librariesToLoad);
    Blockly.Events.enable();
  }

  override render(): TemplateResult {
    return html`
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      .blocklyToolboxDiv {
        background-color: ${this.menuBackgroundColor};
        color: ${this.menuColor};
        width: 370px;
      }

      .header {
        position: unset !important;
      }

      .menu-item > a::after {
        content: '> ';
        margin-left: 30px;
      }

      .header__logo {
        margin-left: 80px;
      }

      .header .main-nav {
        position: unset;
        margin-top: 50px;
        margin-left: 60px;
      }

      .header .container {
        margin: 0;
      }

      .blocklyTreeRow {
        height: 30px;
        line-height: 30px;
      }

      .blocklyPath {
        stroke: #fff;
      }

      .blocklyPathDark {
        fill: #fff;
      }
    </style>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <div>
      <div style=${this.contentStyle} data-scene></div>
      <div 
        style ="position: absolute;
          top: 24px;
          right: 24px;
          border-radius: 100%;
          color: #52DFDB;
          width: 56px;
          height: 56px;
          line-height: 56px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
          transition: box-shadow 0.3s ease-in-out;
          text-align: center;
          font-weight: 500;
          background-color:${this.canSave ? '#242E3B' : '#5F5F5F'} ;
          cursor: pointer;"
        class="material-icons"
        aria-hidden="true"
        @click=${() => this.saveScene()}>save</div>
      </div>
    </div>
   `;
  }
}
