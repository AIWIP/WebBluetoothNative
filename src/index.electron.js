const { ipcRenderer } = require('electron');

function isElectronMainProcess() {
    return !global.hasOwnProperty('window')
}

function isElectronRenderer() {
    return process && global.hasOwnProperty('window')
}

if (isElectronMainProcess()) {
    const bluetooth = require('./electron/MainProcessImplementation');
    const setupBridge = require('./electron/Bridge');

    setupBridge(bluetooth)
    module.exports = bluetooth
}

if (isElectronRenderer()) {
    const setupRendererPolyfill = require('./electron/RendererProcessImplementation');    
    this.navigator = setupRendererPolyfill(navigator)
}
