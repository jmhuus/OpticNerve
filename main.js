// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const fetch = require('node-fetch');
const { spawn } = require('child_process');
const { sleep }  = require('sleep');
var webContents;
var child;

// Init Python Flask server
initPythonServer();
sleep(1);


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
    child = spawn(path.join(__dirname, "./backend/dist/server/server"));
}

// Initiates the device to capture an image and return the result
async function captureImage_server(captureCount, device_type){
    var response;
    if (captureCount <= 1) {
	response = await fetch("http://127.0.0.1:8080/capture-image", {
	    method: "POST",
	    headers: {
		"Content-Type": "application/json"
	    },
	    body: JSON.stringify({
		"device-type": device_type
	    })
	});
    } else {
	response = await fetch("http://127.0.0.1:8080/multiple-captures-by-count", {
	    method: "POST",
	    headers: {
		"Content-Type": "application/json"
	    },
	    body: JSON.stringify({
		"capture-count": parseInt(captureCount),
		"device-type": device_type
	    })
	});
    }
    return response.json();
}

// Sends data to the device which sets the exposure time (milliseconds)
async function setExposure_server(exposureTime, device_type){
    const response = await fetch("http://127.0.0.1:8080/set-exposure-time", {
	method: "POST",
	headers: {
	    "Content-Type": "application/json"
	},
	body: JSON.stringify({
	    "exposure-time": parseInt(exposureTime),
	    "device-type": device_type
	})
    });
    return response.json();
}

// Retrieves the device exposure time which sets the exposure time (milliseconds)
async function getExposure_server(device_type){
    const response = await fetch("http://127.0.0.1:8080/get-exposure-time", {
	method: "POST",
	headers: {
	    "Content-Type": "application/json"
	},
	body: JSON.stringify({
	    "device-type": device_type
	})
    });
    return response.json();
}

// Sets f-stop value on the camera device
async function setFNumber_server(f_number, device_type){
    const response = await fetch("http://127.0.0.1:8080/set-aperture-f-stop", {
    	method: "POST",
    	headers: {
    	    "Content-Type": "application/json"
    	},
    	body: JSON.stringify({
	    "f-number": parseInt(f_number),
	    "device-type": device_type
    	})
    });
    return response.json();
}

// Retrieves available f-stop values from the camera device
async function getFNumberOptions_server(device_type){
    const response = await fetch("http://127.0.0.1:8080/get-aperture-options", {
    	method: "POST",
    	headers: {
    	    "Content-Type": "application/json"
    	},
	body: JSON.stringify({
	    "device-type": device_type
	})
    });
    return response.json();
}

// Endpoint to remotely shutdown the server
function shutdown_server(){
    fetch(`http://127.0.0.1:8080/shutdown-server`)
}

async function getCameraState_server(cameraSessionId, device_type) {
    var response = await fetch("http://127.0.0.1:8080/get-camera-state", {
    	method: "POST",
    	headers: {
    	    "Content-Type": "application/json"
    	},
    	body: JSON.stringify({
	    "camera-session-id": parseInt(cameraSessionId),
	    "device-type": device_type
    	})
    });
    return response.json();
}

async function getIso_server(device_type) {
    var response = await fetch("http://127.0.0.1:8080/get-iso-number", {
    	method: "POST",
    	headers: {
    	    "Content-Type": "application/json"
    	},
    	body: JSON.stringify({
	    "device-type": device_type
    	})
    });
    return response.json();
}

async function setIso_server(iso_number, device_type) {
    var response = await fetch("http://127.0.0.1:8080/set-iso-number", {
    	method: "POST",
    	headers: {
    	    "Content-Type": "application/json"
    	},
    	body: JSON.stringify({
	    "device-type": device_type,
	    "iso-number": parseInt(iso_number)
    	})
    });
    return response.json();
}

// Recieve asynchronous request from renderer
ipcMain.on('main', (event, arg) => {
    // Issue the specified command
    switch(arg["command"]) {
    case "captureImage_server":
	captureImage_server(arg["capture-count"], arg["device-type"])
	    .then(response => {
		response["command"] = arg["command"];
		event.reply("rendererListener", response);
	    })
	    .catch(error => {
		response = {};
		response["success"] = false;
		displayErrorMessage(error);
	    });
	break;

    case "setExposure_server":
	setExposure_server(arg["exposure-time"], arg["device-type"])
	    .then(response => {
		event.returnValue = response;
	    })
	    .catch(error => {
		displayErrorMessage(error);
	    });
	
	break;

    case "getFNumberOptions_server":
	getFNumberOptions_server(arg["device-type"])
	    .then(response => {
		event.returnValue = response;
	    })
	    .catch(error => {
		displayErrorMessage(error);
	    });
	break;

    case "setFNumber_server":
	setFNumber_server(arg["f-number"], arg["device-type"])
	    .then(response => {
		event.returnValue = response;
	    })
	    .catch(error => {
		displayErrorMessage(error);
	    });
	break;

    case "getCameraState_server":
	getCameraState_server(arg["camera-session-id"], arg["device-type"])
	    .then(response => {
	    	event.returnValue = response;
	    })
	    .catch(error => {
		displayErrorMessage(error);
	    });
	break;

    case "getIso_server":
	getIso_server(arg["device-type"])
	    .then(response => {
	    	event.returnValue = response;
	    })
	    .catch(error => {
		displayErrorMessage(error);
	    });
	break;

    case "setIso_server":
	setIso_server(arg["iso-number"], arg["device-type"])
	    .then(response => {
	    	event.returnValue = response;
	    })
	    .catch(error => {
		displayErrorMessage(error);
	    });
	break;

    case "shutdown_server":
	shutdown_server();
	break;
	
    default:
	console.log("command: "+command+" not found.");
    }
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
