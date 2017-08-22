import '../polymer/polymer.js';
import '../iron-flex-layout/iron-flex-layout.js';
import '../font-roboto/roboto.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="demo-pages-shared-styles">
  <template>
    <style>
      body {
        font-family: 'Roboto', 'Noto', sans-serif;
        font-size: 14px;
        margin: 0;
        padding: 24px;
        background-color: #fafafa;
      }

      .horizontal-section-container {
        @apply --layout-horizontal;
        @apply --layout-center-justified;
        @apply --layout-wrap;
      }

      .vertical-section-container {
        @apply --layout-vertical;
        @apply --center-justified;
      }

      .centered {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      demo-snippet.centered-demo {
        --demo-snippet-demo: {
          @apply --layout-horizontal;
          @apply --layout-wrap;
          @apply --layout-center-justified;
        };
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer);
