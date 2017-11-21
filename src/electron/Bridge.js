const {ipcMain} = require('electron')

module.exports = function setupBridge(bluetooth) {
    
    ipcMain.on('request-le-scan', (event, arg) => {
        bluetooth.requestLEScan()
    })

    console.log("Web Bluetooth Bridge configured")
}
