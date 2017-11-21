const noble = require('noble');

class MainProcessImplementation {

    requestLEScan() {
        console.log('Scan')
        
        noble.on('stateChange', function(state) {
            console.log(state);
        });

        noble.on('discover', function(peripheral) {
            console.log(peripheral);
        });

        noble.startScanning();
    }
}
