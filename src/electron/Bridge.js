const {ipcMain} = require('electron')

module.exports = function setupBridge(bluetooth) {

    bluetooth.addEventListener('advertisementreceived', p => {
        console.log('fergerger ' + p)
    })
    
    ipcMain.on('request-le-scan', (event, arg) => {
        bluetooth.requestLEScan().then(scan => {
            scan.stop()
        })
    })

    console.log("Web Bluetooth Bridge configured")
}
