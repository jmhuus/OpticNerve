// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    console.log("preload.js ran...");
    
    const replaceText = (selector, text) => {
	const element = document.getElementById(selector)
	if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
	replaceText(`${type}-version`, process.versions[type])
    }
})


const ipcRenderer = require("electron").ipcRenderer;

// Asynchronous send
window.sendTestMessage = function(){
    ipcRenderer.send("test", "it's working!!!");
}

window.ipc = ipcRenderer;

// Asynchronous response
ipcRenderer.on('test-response', (event, arg) => {
  console.log("response from main.js:  " + arg);
});

