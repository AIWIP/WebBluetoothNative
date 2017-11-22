const { ipcRenderer } = require('electron');

function isElectronMainProcess() {
    return !global.hasOwnProperty('window')
}

function isElectronRenderer() {
    return process && global.hasOwnProperty('window')
}

if (isElectronMainProcess()) {
    const bluetooth = require('./electron/mainProcessImplementation');
    module.exports = bluetooth
}

if (isElectronRenderer()) {
    const setupRendererPolyfill = require('./electron/rendererProcessImplementation');    
    this.navigator = setupRendererPolyfill(navigator)
}
