// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const fetch = require("node-fetch");

function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
	width: 800,
	height: 600,
	webPreferences: {
	    preload: path.join(__dirname, 'preload.js'),
	    sandbox: false
	}
    })

    // and load the index.html of the app.
    mainWindow.loadFile('./dist/OpticNerve/index.html')

    // Open the DevTools.
    mainWindow.webContents.openDevTools()
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

// Init Python Flask server to handle device communication
function initPythonServer() {
    console.log("called initPythonServer()");
    
    var { PythonShell } = require('python-shell');

    let options = {
	mode: 'text'
    };
    
    PythonShell.run('../backend/server.py', options, function (err, results) {
	if (err) throw err;
	// results is an array consisting of messages collected during execution
	console.log('response: ', results);

    });
}

// Initiates the device to capture an image and return the result
function captureImage_server(){
    console.log("called captureImage");
    fetch(`http://127.0.0.1:8080/capture-image`).then((data)=>{      
	return data.text();
	
    }).then((text)=>{
	console.log("data: ", text);
    }).catch(e=>{
	console.log(e);
    })
}

// Endpoint to remotely shutdown the server
function shutdownServer(){
    console.log("called shutdownServer");
    fetch(`http://127.0.0.1:8080/shutdown-server`).then((data)=>{      
	return data.text();
	
    }).then((text)=>{
	console.log("data: ", text);
    }).catch(e=>{
	console.log(e);
    })
}

// Recieve asynchronous request from renderer
ipcMain.on('test', (event, arg) => {
    console.log("it's working!!! (from main.js).");
    captureImage_server();
})

// Init Python Flask server
initPythonServer();

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
    shutdownServer();
})
