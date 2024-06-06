import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { JSONEditor } from 'vanilla-jsoneditor';

@customElement('digipair-jsoneditor')
export class JsonEditorElement extends LitElement {
  @property()
  json: any = {};

  @property()
  contentStyle = '';

  override connectedCallback() {
    super.connectedCallback();
  }

  override render(): TemplateResult {
    setTimeout(() => {
      const target = this.shadowRoot?.querySelector('section');

      if (target) {
        (window as any).__TMP_JSON_EDITOR__ = new JSONEditor({
          target,
          props: {
            content: { json: this.json },
            onChange: (
              updatedContent: any,
              previousContent: any,
              { contentErrors, patchResult },
            ) => {
              let json = updatedContent.json;
              if (updatedContent.text) {
                try {
                  json = JSON.parse(updatedContent.text);
                } catch (e) {
                  // nothing
                }
              }

              if (!json) {
                return;
              }

              this.json = json;
              this.dispatchEvent(
                new CustomEvent('change', {
                  detail: { updatedContent, previousContent, contentErrors, patchResult },
                }),
              );
            },
          },
        });
      }
    }, 1);

    return html` <section style=${this.contentStyle}></section> `;
  }
}
