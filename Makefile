electron:
	yarn install
	./node_modules/.bin/electron-rebuild
	webpack --config webpack-electron.config.js
	echo "electron"

ios:
	echo "ios"

android:
	echo "android"