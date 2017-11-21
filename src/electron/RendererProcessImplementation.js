const { ipcRenderer } = require('electron')

class BluetoothClientContext {

}

class RenderProcessImplementation {

    constructor() {
        this.context = BluetoothClientContext()
    }
}

module.exports = function setupWebBluetoothPolyfill(navigator) {
    const hasBluetoothSupport = (navigator.bluetooth !== undefined);
    const hasBluetoothLESupport = (navigator.bluetooth.requestLEScan !== undefined); 

    console.log('Browser has bluetooth: ' + hasBluetoothSupport)
    console.log('Browser has bluetooth LE support: ' + hasBluetoothLESupport)


    if (!hasBluetoothSupport) {

        console.log('Polyfilling Bluetooth Support')

        navigator.bluetooth.requestDevice = () => {
            ipcRenderer.send('asynchronous-message', 'ping')
        }
    }

    if (!hasBluetoothLESupport) {
        console.log('Polyfilling Bluetooth LE Support')

        navigator.bluetooth.requestLEScan = () => {
            ipcRenderer.send('request-le-scan', 'request-scna')
        }
    }

    return navigator
}