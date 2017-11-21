import Bridge from './Bridge'

// Copy from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/web-bluetooth/index.d.ts

interface Bluetooth {
	requestLEScan(): void
}

interface Navigator {
	bluetooth: Bluetooth;
}

// ((navigator: Navigator, process) => {
//     // const hasBluetoothSupport = (navigator.bluetooth !== undefined);
//     // const hasBluetoothLESupport = (navigator.bluetooth.requestLEScan !== undefined);
//     // const isElectron = (process && process.versions && (process.versions.electron !== undefined));
//     // const isWeb = (Platform.OS == 'web' && isElectron)

//     var bluetooth = navigator.bluetooth

//     console.log('Browser has bluetooth: ' + hasBluetoothSupport)
//     console.log('Browser has bluetooth LE support: ' + hasBluetoothLESupport)

//     if (!hasBluetoothSupport && !isWeb) {

//         console.log('Polyfilling Bluetooth Support')
//         bluetooth.requestScan = Bridge.requestScan
//     }

//     if (!hasBluetoothLESupport && !isWeb) {

//         console.log('Polyfilling Bluetooth LE Support')
//         bluetooth.requestLEScan = Bridge.requestLEScan
//     }

// })(navigator, process);

export default {}