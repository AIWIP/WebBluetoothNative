const noble = require('noble');

class BluetoothHostContext {
    constructor() {
        this.leRequests = []
    }
}

class MainProcessImplementation {

    constructor() {
        console.log('Make Main')

        this.poweredOn = false
        this.context = new BluetoothHostContext()

        noble.on('stateChange', function(state) {
            console.log('Bluetooth State Changed: ' + state);

            this.poweredOn = (state == 'poweredOn')
        });
    }

    requestLEScan() {
        console.log('Requesting LE Scan')
        
        noble.on('discover', function(peripheral) {
            console.log(peripheral);
        });

        noble.startScanning();
    }
}

module.exports = new MainProcessImplementation()