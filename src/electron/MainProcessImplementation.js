const noble = require('noble');

class BluetoothLEScan {
    constructor(implementation) {
        this.implementation = implementation
    }

    stop() {
        console.log('Requesting stop of LE Scan')
        this.implementation._stopLEScan(this);
    }
}

class MainProcessImplementation {

    constructor() {
        console.log('Make Main')

        this.poweredOn = false
        this.leRequests = []

        noble.on('stateChange', function(state) {
            console.log('Bluetooth State Changed: ' + state);

            this.poweredOn = (state == 'poweredOn')
        });

        noble.on('discover', function(peripheral) {
            console.log(peripheral);
        });
    }

    requestLEScan() {
        console.log('Requesting LE Scan')

        this.leRequests.push(1)
        this._leRequestsDidUpdate()

        return Promise.resolve(new BluetoothLEScan(this))
    }

    _stopLEScan(scan) {
        const index = this.leRequests.indexOf(scan);
        this.leRequests.splice(index, 1);

        this._leRequestsDidUpdate()
    }

    _leRequestsDidUpdate() {

        if (this.leRequests.length > 0) {
            console.log('Bluetooth Started Scanning')
            noble.startScanning();
        } else {
            console.log('Bluetooth Stopped Scanning')
            noble.stopScanning();
        }
    }
}

module.exports = new MainProcessImplementation()