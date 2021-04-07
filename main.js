// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const fetch = require('node-fetch');
const { spawn } = require('child_process');
const { sleep }  = require('sleep');
var webContents;
var child;

// Init Python Flask server
// initPythonServer();
// sleep(1);


function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
	width: 2000,
	height: 1200,
	webPreferences: {
	    preload: path.join(__dirname, 'preload.js'),
	    sandbox: false,
	    nodeIntegration: true
	}
    })

    // and load the index.html of the app.
    mainWindow.loadFile('./dist/OpticNerve/index.html')

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    webContents = mainWindow.webContents;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()
    

    app.on('activate', function () {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Init Python Flask server to handle device nication
function initPythonServer() {
    child = spawn(path.join(__dirname, "./backend/dist/server/server"));
}

// Endpoint to remotely shutdown the server
function shutdown_server(){
    fetch(`http://127.0.0.1:8080/shutdown-server`)
}

// Recieve asynchronous request from renderer
ipcMain.handle('main', (event, arg) => {
    // Issue the specified command
    switch(arg["command"]) {
	
    case "shutdown_server":
	shutdown_server();
	break;
	
    default:
	console.log("command: "+command+" not found.");}
    
})

function displayErrorMessage(error) {
    console.log(error);
    webContents.send("rendererListener", {
	"error": error
    });
}

// Any platform except MacOS shuts down the entire
// program when all windows are closed
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
	app.quit();
    }
})

// When officially quitting the program, shut down
// the server as well.
app.on('before-quit', function () {
    shutdown_server();
})
