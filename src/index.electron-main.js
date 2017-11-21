const {ipcMain} = require('electron')

ipcMain.on('request-le-scan', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.sender.send('asynchronous-reply', 'request-le-scan')
})