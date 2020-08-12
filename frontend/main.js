// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const fetch = require("node-fetch");
var webContents;

function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
	width: 2000,
	height: 1200,
	webPreferences: {
	    preload: path.join(__dirname, 'preload.js'),
	    sandbox: false
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
async function captureImage_server(context, captureCount){
    var response;
    if (captureCount == 1) {
	response = await fetch("http://127.0.0.1:8080/capture-image", {
	    method: "POST",
	    headers: {
		"Content-Type": "application/json"
	    },
	    body: JSON.stringify({"context": context})
	});
    } else {
	response = await fetch("http://127.0.0.1:8080/multiple-captures-by-count", {
	    method: "POST",
	    headers: {
		"Content-Type": "application/json"
	    },
	    body: JSON.stringify({
		"context": context,
		"capture-count": parseInt(captureCount)
	    })
	});
    }
    return response.json();
}

// Sends data to the device which sets the exposure time (milliseconds)
async function setExposure_server(context, exposureTime){
    const response = await fetch("http://127.0.0.1:8080/set-exposure-time", {
	method: "POST",
	headers: {
	    "Content-Type": "application/json"
	},
	body: JSON.stringify({
	    "context": context,
	    "exposure-time": parseInt(exposureTime)
	})
    });
    return response.json();
}

// Retrieves the device exposure time which sets the exposure time (milliseconds)
async function getExposure_server(context, exposureTime){
    const response = await fetch("http://127.0.0.1:8080/get-exposure-time", {
	method: "POST",
	headers: {
	    "Content-Type": "application/json"
	},
	body: JSON.stringify({
	    "context": context
	})
    });
    return response.json();
}

// Sets f-stop value on the camera device
async function setFNumber_server(context, f_number){
    const response = await fetch("http://127.0.0.1:8080/set-aperture-f-stop", {
    	method: "POST",
    	headers: {
    	    "Content-Type": "application/json"
    	},
    	body: JSON.stringify({
    	    "context": context,
	    "f-number": parseInt(f_number)
    	})
    });
    return response.json();
}

// Retrieves available f-stop values from the camera device
async function getFNumberOptions_server(context){
    const response = await fetch("http://127.0.0.1:8080/get-aperture-options", {
    	method: "POST",
    	headers: {
    	    "Content-Type": "application/json"
    	},
    	body: JSON.stringify({
    	    "context": context
    	})
    });
    return response.json();
}

// Endpoint to remotely shutdown the server
function shutdown_server(){
    fetch(`http://127.0.0.1:8080/shutdown-server`)
}

async function getCameraState_server(context, cameraSessionId) {
    console.log("fetching camera state from endpoint");
    var response = await fetch("http://127.0.0.1:8080/get-camera-state", {
    	method: "POST",
    	headers: {
    	    "Content-Type": "application/json"
    	},
    	body: JSON.stringify({
    	    "context": context,
	    "camera-session-id": parseInt(cameraSessionId)
    	})
    });
    return response.json();
}

// Recieve asynchronous request from renderer
ipcMain.on('main', (event, arg) => {
    var context = {
	"command": arg["command"],
	"ipc-name": "main"
    }

    // Issue the specified command
    switch(arg["command"]) {
    case "captureImage_server":
	console.log("calling captureImage_server");
	captureImage_server(context, arg["capture-count"]).then(response => {
	    event.reply("rendererListener", response);
	});    
	break;

    case "setExposure_server":
	setExposure_server(context, arg["exposure-time"])
	    .then(response => {
		event.returnValue = response;
	    })
	    .catch(error => {
		displayErrorMessage(error, context);
	    });
	
	break;

    case "getFNumberOptions_server":
	getFNumberOptions_server(context)
	    .then(response => {
		event.returnValue = response;
	    });
	break;

    case "setFNumber_server":
	setFNumber_server(context, arg["f-number"]).then(response => {
	    event.returnValue = response;
	});
	break;
	
    case "shutdown_server":
	shutdown_server();
	break;

    case "getCameraState_server":
	getCameraState_server(context, arg["camera-session-id"])
	    .then(response => {
	    	event.returnValue = response;
	    })
	    .catch(error => {
	    	displayErrorMessage(error, context);
	    })
	break;
	
    default:
	console.log("command: "+command+" not found.");
    }
})

function displayErrorMessage(error, context) {
    webContents.send("rendererListener", {
	"error": error,
	"context": context
    });
}

// Init Python Flask server
// initPythonServer();

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
