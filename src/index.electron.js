const { ipcRenderer } = require('electron');
const setupMainProcessPolyfill = require('./electron/MainProcessImplementation');
const setupBridgePolyfill = require('./electron/BridgeImplementation');
const setupRendererPolyfill = require('./electron/RendererProcessImplementation');

function isElectronMainProcess() {
    return (process && process.type === 'browser')
}
function isElectronRenderer() {
    return (process && process.type !== 'browser')
}

if (isElectronMainProcess()) {
    setupBridgePolyfill()

    this.navigator = setupMainProcessPolyfill(navigator)
}

if (isElectronRenderer()) {
    this.navigator = setupRendererPolyfill(navigator)
}
