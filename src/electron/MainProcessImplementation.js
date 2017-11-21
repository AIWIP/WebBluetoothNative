const noble = require('noble');

module.exports = {
    requestLEScan: () => {
        console.log('Scan')

        noble.on('stateChange', function(state) {
            console.log(state);
        });
    }
}