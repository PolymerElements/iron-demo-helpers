import '../polymer/polymer.js';
import '../iron-location/iron-location.js';
import '../font-roboto/roboto.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        margin: 0px;
        padding: 15px 35px;
        border-bottom: 2px solid gray;
        height: 1.5em;
        display: none;
        overflow-x: auto;
        overflow-y: hidden;
        background-color: white;
        @apply --url-bar;
      }
      :host([in-iframe]) {
        /* This element only wants to be displayed if it's in an iframe. */
        display: block;
      }

      label {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
        /* for backwards compat */
        @apply --paper-font-common-base;
        display: inline-block;
        padding-right: 25px;
      }

      span {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
        /* for backwards compat */
        @apply --paper-font-common-code;
        white-space: pre;
      }

      .layout.horizontal {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }
    </style>

    <iron-location path="{{path}}" query="{{query}}" hash="{{hash}}">
    </iron-location>
    <div class="layout horizontal">
      <label>URL</label><span>{{url}}</span>
    </div>
`,

  is: 'url-bar',

  properties: {
    url: {
      computed: '__computeUrl(path, query, hash)',
      type: String
    },

    inIframe: {
      value: function() {
        return window.top !== window;
      },
      reflectToAttribute: true,
      type: Boolean
    },

    path: {
      type: String
    },

    query: {
      type: String
    },

    hash: {
      type: String
    }
  },

  __computeUrl: function(path, query, hash) {
    var url = path;

    if (query) {
      url += '?' + query;
    }

    if (hash) {
      url += '#' + hash;
    }

    return url;
  }
})
