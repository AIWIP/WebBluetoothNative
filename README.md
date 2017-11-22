# Web Bluetooth Native

Polyfill to add Web Bluetooth and Web Bluetooth Scanning support to React Native and Electron Apps.

The aim of this is to serve as a reference implementation until Browser Vendors and React Native provide first party support.

This polyfill is built upon the progressive principle and falls back on the native Web APIs when possible. 

Read the specs here:

- [Web Bluetooth Specification](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Bluetooth Scanning Specification](https://webbluetoothcg.github.io/web-bluetooth/scanning.html)

# Roadmap

- Document implmentation
- Unit test implementation
- Modualize correctly so it can be imported in both Main Electron and Renderer Electron
- Modualize so that it's easy to add additional backend support (CoreBluetooth etc)
- Implement for electron OS X
- Implement for electron Windows
- Implement for React Native iOS
- Implement for React Native Android