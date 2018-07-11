
<!---

This README is automatically generated from the comments in these files:
demo-snippet.html  url-bar.html

Edit those files, and our readme bot will duplicate them over here!
Edit this file, and the bot will squash your changes :)

The bot does some handling of markdown. Please file a bug if it does the wrong
thing! https://github.com/PolymerLabs/tedium/issues

-->

[![Published on NPM](https://img.shields.io/npm/v/@polymer/iron-demo-helpers.svg)](https://www.npmjs.com/package/@polymer/iron-demo-helpers)
[![Build status](https://travis-ci.org/PolymerElements/iron-demo-helpers.svg?branch=master)](https://travis-ci.org/PolymerElements/iron-demo-helpers)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/iron-demo-helpers)

## &lt;demo-snippet&gt;

`demo-snippet` is a helper element that displays the source of a code snippet and
its rendered demo. It can be used for both native elements and
Polymer elements.

See: [Documentation](https://www.webcomponents.org/element/@polymer/iron-demo-helpers),
  [Demo](https://www.webcomponents.org/element/@polymer/iron-demo-helpers/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/iron-demo-helpers
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@polymer/iron-demo-helpers/demo-snippet.js';
      import '@polymer/paper-checkbox/paper-checkbox.js';
    </script>
  </head>
  <body>
    <demo-snippet>
      <template>
        <input type="date">
        <paper-checkbox>Checkbox</paper-checkbox>
      </template>
    </demo-snippet>
  </body>
</html>
```

### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/iron-demo-helpers/demo-snippet.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <demo-snippet>
        <template>
          <input type="date">
          <paper-checkbox>Checkbox</paper-checkbox>
        </template>
      </demo-snippet>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## &lt;url-bar&gt;

`url-bar` is a helper element that displays a simple read-only URL bar if
and only if the page is in an iframe. In this way we can demo elements that
deal with the URL in our iframe-based demo environments.

If the page is not in an iframe, the url-bar element is not displayed.

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/iron-demo-helpers
cd iron-demo-helpers
npm install
npm install -g polymer-cli
```

### Running the demo locally
```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
