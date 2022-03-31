# Sirv Media Viewer script loader

[![Test](https://github.com/Mefistosss/sirv-media-viewer-script/actions/workflows/test.yml/badge.svg)](https://github.com/Mefistosss/sirv-media-viewer-script/actions/workflows/test.yml)

You can add Sirv Media Viewer script to your page as the [documentation](https://sirv.com/help/articles/sirv-media-viewer/) recommends or you can use this module.

This module adds Sirv Media Viewer script to page once.


## install
```
npm install --save sirv-media-viewer-script
```
## usage
```
import loadSMVScript from 'sirv-media-viewer-script';

loadSMVScript().then((sirv) => {
	// script is loaded
});

```
## API
### `promise = loadSMVScript([attrs], [parentNode])`
Append a `<script>` node with `'https://scripts.sirv.com/sirvjs/v3/sirv.js'` URL to the `<head>` element in the DOM.

#### `attrs` (optional)
More about it you can find [here](https://www.npmjs.com/package/load-script2#attrs-optional)

#### `parentNode` (optional)
More about it you can find [here](https://www.npmjs.com/package/load-script2#parentnode-optional)

#### `promise`

Returns a promise which resolves to the `sirv` object that was appended to the
DOM, or rejects with `err` if any occurred.
