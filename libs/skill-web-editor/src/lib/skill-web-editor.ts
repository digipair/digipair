//import { userService } from '@pinser-world/core/user';
import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import * as Toastify from 'toastify-js';
import { PinsSettings } from '@digipair/engine';
import { blocksLegacy } from './blocks/json';
import { initializeWorkspaceFromPinsAndLibraries } from './generator/json-to-blockly';

const BASE_URL = 'https://cdn.jsdelivr.net/npm';
const BLOCKLY_VERSION = '10.4.3';
declare const Blockly: any;
let jsonGenerator: any,
  generateBlocklyBlockFromLibraries: any,
  generateToolboxFromLibraries: any,
  initializeMutator: any;

@customElement('digipair-editor')
export class GenericSceneElement extends LitElement {
  @property()
  digipair!: string;

  @property()
  reasoning!: string;

  @state()
  private canSave = false;

  private reasoningData: any;
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

  private loadReasoning(detail: any) {
    const scene = {
      ...detail,
      properties: {
        ...(detail.properties.trigger || []).reduce(
          (acc: any, { name, value }: any) => ({ ...acc, [name]: value }),
          {},
        ),
        actions: detail.properties.actions.map((action: any) => ({
          ...action,
          properties: action.properties?.reduce(
            (acc: any, { name, value }: any) => ({ ...acc, [name]: value }),
            {},
          ),
        })),
        conditions: detail.properties.conditions.map((action: any) => ({
          ...action,
          properties: action.properties?.reduce(
            (acc: any, { name, value }: any) => ({ ...acc, [name]: value }),
            {},
          ),
        })),
        pins: [],
      },
    };

    Blockly.Events.disable();
    initializeWorkspaceFromPinsAndLibraries(scene, this.workspace, this.librariesToLoad);
    Blockly.Events.enable();
  }

  private async getReasoning(digipair: string, reasoning: string): Promise<PinsSettings | null> {
    const response = await fetch(`${window.origin}/admin/reasoning-read`, {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        digipair,
        reasoning,
      }),
      method: 'POST',
    });
    const content = await response.json();

    return content;
  }

  private async getLibraries(libraries: { [key: string]: string }): Promise<any[]> {
    console.log('libraries', libraries);

    const list = await Promise.all(
      Object.keys(libraries).map(async (library: any, i: number) =>
        fetch(`${BASE_URL}/${library}@${libraries[library]}/schema.json`).then(res => res.json()),
      ),
    );

    console.log('list', list);

    // const response = await fetch(environment.SERVICE_URL, {
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify({ experience: environment.SERVICE_EXPERIENCEID, scene: 'libraries', input: { token: await userService.token(), libraries } }),
    //   method: 'POST'
    // });
    // const list = await response.json()

    // return list;
    return list;
  }

  private async loadScene(digipair: string, reasoning: string): Promise<void> {
    this.reasoningData = await this.getReasoning(digipair, reasoning);
    const scene = this.reasoningData.content as PinsSettings;
    this.librariesToLoad = await this.getLibraries(this.reasoningData.libraries);

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
        type: this.reasoningData.content.type,
        name: this.reasoning,
        description: this.reasoningData.content.description,
        ...JSON.parse(code),
      };

      return true;
    } catch (e) {
      return false;
    }
  }

  private async saveScene(): Promise<void> {
    if (this.canSave == true) {
      // const experienceId = this.experience;
      // const sceneName = this.scene;
      // const value = this.codeInWorkspace;

      // await fetch(environment.SERVICE_URL, {
      //   headers: {
      //     'content-type': 'application/json',
      //   },
      //   body: JSON.stringify({ experience: environment.SERVICE_EXPERIENCEID, scene: 'updateScene', input: { token: await userService.token(), experienceId, sceneName, value } }),
      //   method: 'POST'
      // });

      Toastify({
        text: 'Successfully saved !',
        position: 'center',
        style: {
          'font-family': 'Arial, Helvetica, sans- serif',
          background: 'linear-gradient(90deg, rgba(7,99,101,1) 0%, rgba(4,129,58,1) 100%)',
        },
        duration: 3000,
      }).showToast();
    } else {
      Toastify({
        text: 'Your scene cannot be saved, invalid format',
        position: 'center',
        style: {
          'font-family': 'Arial, Helvetica, sans- serif',
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

    this.toolbox = generateToolboxFromLibraries(this.librariesToLoad);
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
      .blocklyToolboxDiv {
        background-color: #09121d;
        color: white;
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
    </style>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <div>
      <div style="position: fixed; top: 0; right: 0; bottom: 0; left: 0;" data-scene></div>
      <div 
        style ="position: absolute;
          top: 24px;
          right: 24px;
          border-radius: 100%;
          color: #fff;
          width: 56px;
          height: 56px;
          line-height: 56px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
          transition: box-shadow 0.3s ease-in-out;
          text-align: center;
          font-weight: 500;
          background-color:${this.canSave ? '#12b5cd' : '#5F5F5F'} ;
          cursor: pointer;"
        class="material-icons"
        aria-hidden="true"
        @click=${() => this.saveScene()}>save</div>
      </div>
    </div>
   `;
  }
}
