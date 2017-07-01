const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')

let mainWindow;
var options = {
	"debug": true,
	"version": "1.0",
	"views_dir": "views",
	"root_view": "index.html"
};

function createWindow () {
	// Create the browser window.
	mainWindow = new BrowserWindow({width: 800, height: 600})

	mainWindow.loadURL(path.join('file://', __dirname, options.views_dir, options.root_view));
	
	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		console.log('close');
		mainWindow = null
	})
}

// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow()
	}
})