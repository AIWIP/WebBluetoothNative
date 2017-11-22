const { remote } = require('electron');
const bluetooth = remote.require('./mainProcessImplementation');

const EventTarget = require('event-target-shim').EventTarget;
const Event = require('./event');
const { ipcRenderer } = require('electron')

module.exports = function setupWebBluetoothPolyfill(navigator) {
    const hasBluetoothSupport = (navigator.bluetooth !== undefined);
    const hasBluetoothLESupport = (navigator.bluetooth.requestLEScan !== undefined);

    console.log('Browser has bluetooth: ' + hasBluetoothSupport)
    console.log('Browser has bluetooth LE support: ' + hasBluetoothLESupport)

    if (!hasBluetoothSupport) {
        console.log('Polyfilling Bluetooth Support')
        navigator.bluetooth.requestDevice = bluetooth.requestDevice
    }

    if (!hasBluetoothLESupport) {
        console.log('Polyfilling Bluetooth LE Support')
        navigator.bluetooth.requestLEScan = bluetooth.requestLEScan
    }

    return navigator
}