electron:
	yarn install
	./node_modules/.bin/electron-rebuild
	webpack
	echo "electron"

ios:
	echo "ios"

android:
	echo "android"