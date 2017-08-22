import '../../polymer/polymer.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
'use strict';

Polymer({
  _template: `
    <style>
      :host {
        display: inline-block;
        padding: 5px 10px;
        background: var(--button-background, white);
        line-height: 1.2;
        border: 2px solid var(--button-border, #ccc);
        border-radius: 3px;
      }
    </style>
    <div>[[value]]</div>
`,

  is: 'simple-button',

  properties: {
    value: {
      type: String
    }
  }
});
