const {ipcMain} = require('electron')

module.exports = function setupBridge(bluetooth) {

    bluetooth.addEventListener('advertisementreceived', advertisement => {
        console.log('Bridge Recieved Advertisement Event ' + advertisement)
        ipcMain.send('advertisementreceived', advertisement)
    })
    
    ipcMain.on('request-le-scan', (event, arg) => {
        bluetooth.requestLEScan()
    })

    console.log("Web Bluetooth Bridge configured")
}
