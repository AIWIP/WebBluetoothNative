const setupBridge= require('./Bridge');

module.exports = function setupWebBluetoothPolyfill(navigator) {
    
    console.log('Main Implementation Goes Here')

    setupBridge()

    return navigator
}