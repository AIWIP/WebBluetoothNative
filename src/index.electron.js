const { ipcRenderer } = require('electron');
const setupMainProcessPolyfill = require('./electron/MainProcessImplementation');
const setupRendererPolyfill = require('./electron/RendererProcessImplementation');

function isElectronMainProcess() {
    return (process && process.type === 'browser')
}
function isElectronRenderer() {
    return (process && process.type !== 'browser')
}

if (isElectronMainProcess()) {
    this.navigator = setupMainProcessPolyfill(navigator)
}

if (isElectronRenderer()) {
    this.navigator = setupRendererPolyfill(navigator)
}
