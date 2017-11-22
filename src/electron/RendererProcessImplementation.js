const { remote } = require('electron');
const bluetooth = remote.require('./mainProcessImplementation');

module.exports = function setupWebBluetoothPolyfill(navigator) {
    const hasBluetoothSupport = (navigator.bluetooth !== undefined);
    const hasBluetoothLESupport = (navigator.bluetooth.requestLEScan !== undefined);

    console.log('Browser has bluetooth: ' + hasBluetoothSupport)
    console.log('Browser has bluetooth LE support: ' + hasBluetoothLESupport)

    navigator.bluetooth.requestLEScan = bluetooth.requestLEScan

    for (var x in bluetooth) {
        console.log(x)
        navigator.bluetooth[x] = bluetooth[x]
    }

    return navigator
}