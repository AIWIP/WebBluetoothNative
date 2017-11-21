const electron = require('electron')
const remote = electron.remote
const noble = remote.require('noble')

export function requestScan() {

}

export function requestLEScan() {

    noble.on('stateChange', (state: any) => {

        if (state === 'poweredOn') {

            noble.startScanning((error: any, devices: any) => {

            })

            // Search for aiwip beacon's only ['7447A2E4E8B046D38FCC69717D9D65D9']
            noble.startScanning()
        }
    })
}