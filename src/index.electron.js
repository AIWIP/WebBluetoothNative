
function setupWebBluetoothPolyfill(navigator) {
    const hasBluetoothSupport = (navigator.bluetooth !== undefined);
    const hasBluetoothLESupport = (navigator.bluetooth.requestLEScan !== undefined); 

	var bluetooth = navigator.bluetooth

    console.log('Browser has bluetooth: ' + hasBluetoothSupport)
    console.log('Browser has bluetooth LE support: ' + hasBluetoothLESupport)

    if (!hasBluetoothSupport) {

        console.log('Polyfilling Bluetooth Support')
    }

    if (!hasBluetoothLESupport) {
        console.log('Polyfilling Bluetooth LE Support')
    }
}

setupWebBluetoothPolyfill(navigator)