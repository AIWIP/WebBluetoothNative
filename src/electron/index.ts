export default function setupWebBluetoothPolyfill(navigator: any) {
    const hasBluetoothSupport = navigator.hasOwnProperty('bluetooth');
    const hasBluetoothLESupport = navigator.bluetooth.hasOwnProperty('requestLEScan');
	const isWeb = true;

	var bluetooth = navigator.bluetooth

    console.log('Browser has bluetooth: ' + hasBluetoothSupport)
    console.log('Browser has bluetooth LE support: ' + hasBluetoothLESupport)

    if (!hasBluetoothSupport && !isWeb) {

        console.log('Polyfilling Bluetooth Support')
    }

    if (!hasBluetoothLESupport && !isWeb) {
        console.log('Polyfilling Bluetooth LE Support')
    }
}
