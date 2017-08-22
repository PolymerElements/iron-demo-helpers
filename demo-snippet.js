import '../polymer/polymer.js';
import '../marked-element/marked-element.js';
import '../prism-element/prism-highlighter.js';
import '../prism-element/prism-theme-default.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
import { dom } from '../polymer/lib/legacy/polymer.dom.js';
'use strict';

Polymer({
  _template: `
    <style include="prism-theme-default">
      :host {
        display: block;

        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
        margin-bottom: 40px;
        @apply --demo-snippet;
      }

      .demo {
        display: block;
        border-bottom: 1px solid #e0e0e0;
        background-color: white;
        margin: 0;
        padding: 20px;
        @apply --demo-snippet-demo;
      }

      .code-container {
        margin: 0;
        background-color: #f5f5f5;
        font-size: 13px;
        overflow: auto;
        position: relative;
        padding: 0 20px;
        @apply --demo-snippet-code;
      }

      .code {
        padding: 20px;
        margin: 0;
        background-color: var(--google-grey-100);
        font-size: 13px;
        overflow: auto;
        @apply(--demo-snippet-code);
      }
      .code > pre {
        margin: 0;
        padding: 0 0 10px 0;
      }

      button {
        position: absolute;
        top: 0;
        right: 0px;
        text-transform: uppercase;
        border: none;
        cursor: pointer;
        background: #e0e0e0;
      }
    </style>

    <prism-highlighter></prism-highlighter>

    <div class="demo">
      <slot id="content"></slot>
    </div>

    <div class="code-container">
      <marked-element markdown="[[_markdown]]" id="marked">
         <div class="code" slot="markdown-html" id="code"></div>
      </marked-element>
      <button id="copyButton" title="copy to clipboard" on-tap="_copyToClipboard">Copy</button>
    </div>
`,

  is: 'demo-snippet',

  properties: {
    _markdown: {
      type: String
    }
  },

  attached: function() {
    this._observer = dom(this.$.content).observeNodes(function(info) {
      this._updateMarkdown();
    }.bind(this));
  },

  detached: function() {
    if (this._observer) {
      dom(this.$.content).unobserveNodes(this._observer);
      this._observer = null;
    }
  },

  _updateMarkdown: function() {
    var template = dom(this).queryDistributedElements('template')[0];

    // If there's no template, render empty code.
    if (!template) {
      this._markdown = '';
      return;
    }

    var snippet = this.$.marked.unindent(template.innerHTML);

    // Boolean properties are displayed as checked="", so remove the ="" bit.
    snippet = snippet.replace(/=""/g, '');
    this._markdown = '```\n' + snippet + '\n' + '```';

    // Stamp the template.
    if (!template.hasAttribute('is')) {
      // Don't need to listen for more changes (since stamping the template
      // will trigger an observeNodes)
      dom(this.$.content).unobserveNodes(this._observer);
      this._observer = null;
      dom(this).appendChild(document.importNode(template.content, true));
    }
  },

  _copyToClipboard: function() {
    // From https://github.com/google/material-design-lite/blob/master/docs/_assets/snippets.js
    var snipRange = document.createRange();
    snipRange.selectNodeContents(this.$.code);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(snipRange);
    var result = false;
    try {
      result = document.execCommand('copy');
      this.$.copyButton.textContent = 'done';
    } catch (err) {
      // Copy command is not available
      console.error(err);
      this.$.copyButton.textContent = 'error';
    }

    // Return to the copy button after a second.
    setTimeout(this._resetCopyButtonState.bind(this), 1000);

    selection.removeAllRanges();
    return result;
  },

  _resetCopyButtonState: function() {
    this.$.copyButton.textContent = 'copy';
  }
});
