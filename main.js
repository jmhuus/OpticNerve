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


async function getConnectedDevices_server() {
    var response = await fetch("http://127.0.0.1:8080/get-ptp-device-ids", {
	method: "get"
    });
    return response.json();
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

async function getDeviceDetails_server(device_type) {
    var response = await fetch("http://127.0.0.1:8080/get-device-details", {
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

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// Recieve asynchronous request from renderer
ipcMain.handle('main', (event, arg) => {
    // Issue the specified command
    switch(arg["command"]) {
    case "getConnectedDevices_server":
	var response = getConnectedDevices_server()
	response["command"] = arg["command"];
	return response;
	
    case "captureImage_server":
	var response = captureImage_server(arg["capture-count"], arg["device-type"])
	response["command"] = arg["command"];
	return response;
	
    // TODO(jordanhuus): change naming convention to shutter
    case "setExposure_server":
	var response = setExposure_server(arg["exposure-time"], arg["device-type"])
	response["command"] = arg["command"];
	return response;

    case "getFNumberOptions_server":
	var response = getFNumberOptions_server(arg["device-type"])
	response["command"] = arg["command"];	
	return response;

    case "setFNumber_server":
	var response = setFNumber_server(arg["f-number"], arg["device-type"])
	response["command"] = arg["command"];	
	return response;

    case "getCameraState_server":
	var response = getCameraState_server(arg["camera-session-id"], arg["device-type"])
	response["command"] = arg["command"];	
	return response;

    case "getIso_server":
	var response = getIso_server(arg["device-type"])
	response["command"] = arg["command"];
	return response;

    case "setIso_server":
	var response = setIso_server(arg["iso-number"], arg["device-type"])
	response["command"] = arg["command"];
	return response;

    case "getDeviceDetails_server":
	var response = getDeviceDetails_server(arg["device-type"])
	response["command"] = arg["command"];
	return response;
	
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
