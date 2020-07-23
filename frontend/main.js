// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
	width: 800,
	height: 600,
	webPreferences: {
	    preload: path.join(__dirname, 'preload.js')
	}
    })

    // and load the index.html of the app.
    mainWindow.loadFile('./dist/OpticNerve/index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
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

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// function initPythonServer() {
//     console.log("called initPythonServer()");
    
//     var { PythonShell } = require('python-shell');

//     let options = {
// 	mode: 'text'
//     };
    
//     PythonShell.run('../backend/server.py', options, function (err, results) {
// 	if (err) throw err;
// 	// results is an array consisting of messages collected during execution
// 	console.log('response: ', results);

//     });
// }

// function captureImage(){
//     console.log("called captureImage");
//     fetch(`http://127.0.0.1:5000/capture-image`).then((data)=>{      
// 	return data.text();
	
//     }).then((text)=>{
// 	console.log("data: ", text);
//     }).catch(e=>{
// 	console.log(e);
//     })

// }

// Init Python Flask server
// initPythonServer();


// btn.addEventListener('click', () => {
//   onclick();
// });

// btn.dispatchEvent(new Event('click'))
