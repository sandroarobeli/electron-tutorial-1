const { contextBridge, ipcRenderer } = require("electron");
// Official
// To bridge Electron's different process types (Node vs. browser) together, we will need to use a special //script called a preload.

// These and other backend APIs are used here and passed to main.js
// main.js makes it available to renderer.js
// renderer.js script and data via that script are embedded in index.html
// and thus can be displayed in pages via window.
contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
  // we can also expose variables, not just functions
});
