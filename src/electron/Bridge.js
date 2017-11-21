const {ipcMain} = require('electron')

module.exports = function setupBridge(bluetooth) {

    bluetooth.addEventListener('advertisementreceived', p => {
        console.log('Bridge Recieved Advertisement Event ' + p)
    })
    
    ipcMain.on('request-le-scan', (event, arg) => {
        bluetooth.requestLEScan()
    })

    console.log("Web Bluetooth Bridge configured")
}
