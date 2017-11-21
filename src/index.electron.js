const { ipcRenderer } = require('electron');

function isElectronMainProcess() {
    return !global.hasOwnProperty('window')
}

function isElectronRenderer() {
    return process && global.hasOwnProperty('window')
}

if (isElectronMainProcess()) {
    const bluetooth = require('./electron/mainProcessImplementation');
    const setupBridge = require('./electron/bridge');

    setupBridge(bluetooth)
    module.exports = bluetooth
}

if (isElectronRenderer()) {
    const setupRendererPolyfill = require('./electron/rendererProcessImplementation');    
    this.navigator = setupRendererPolyfill(navigator)
}
