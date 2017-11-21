const { ipcRenderer } = require('electron');
const setupMainProcessPolyfill = require('./electron/MainProcessImplementation');
const setupRendererPolyfill = require('./electron/RendererProcessImplementation');
const setupBridge = require('./electron/Bridge');

function isElectronMainProcess() {
    return (process && process.type === 'browser')
}
function isElectronRenderer() {
    return (process && process.type !== 'browser')
}

if (isElectronMainProcess()) {
    this.navigator = setupMainProcessPolyfill(navigator)
    setupBridge(this.navigator)
}

if (isElectronRenderer()) {
    this.navigator = setupRendererPolyfill(navigator)
}
