const { ipcRenderer } = require('electron');
const i = require('./electron/MainProcessImplementation');
const b = require('./electron/BridgeImplementation');
const setupRendererPolyfill = require('./electron/RendererProcessImplementation');

function isRenderer() {
    return (process && process.type !== 'browser')
}

if (isRenderer()) {
    this.navigator = setupRendererPolyfill(navigator)
}
