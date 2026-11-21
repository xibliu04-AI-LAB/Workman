const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function create() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({
    width: 980, height: 780, minWidth: 380, minHeight: 500,
    title: 'Workman', backgroundColor: '#f6f5f2', autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  w.loadFile(path.join(__dirname, 'index.html'));
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
