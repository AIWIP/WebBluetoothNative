module.exports = function setupBridge(bluetooth) {

    bluetooth.addEventListener('advertisementreceived', advertisement => {
        console.log('Bridge Recieved Advertisement Event ' + advertisement)
        // TODO: Pass this onto the render 
        // https://electronjs.org/docs/api/web-contents#webcontentssendchannel-arg1-arg2-
        // https://electronjs.org/docs/api/ipc-main
    })
    
    ipcMain.on('request-le-scan', (event, arg) => {
        bluetooth.requestLEScan()
    })

    console.log("Web Bluetooth Bridge configured")
}
