const EventTarget = require('event-target-shim').EventTarget;
const Event = require('./event');
const { ipcRenderer } = require('electron')

class RendererProcessImplementation extends EventTarget {

    requestLEScan() {
        ipcRenderer.send('request-le-scan', 'request-scna')
    }
}

module.exports = function setupWebBluetoothPolyfill(navigator) {
    const hasBluetoothSupport = (navigator.bluetooth !== undefined);
    const hasBluetoothLESupport = (navigator.bluetooth.requestLEScan !== undefined); 
    const implementation = new RendererProcessImplementation()

    console.log('Browser has bluetooth: ' + hasBluetoothSupport)
    console.log('Browser has bluetooth LE support: ' + hasBluetoothLESupport)

    if (!hasBluetoothSupport) {
        console.log('Polyfilling Bluetooth Support')
        navigator.bluetooth.requestDevice = implementation.requestDevice
    }

    if (!hasBluetoothLESupport) {
        console.log('Polyfilling Bluetooth LE Support')
        navigator.bluetooth.requestLEScan = implementation.requestLEScan
    }

    return navigator
}