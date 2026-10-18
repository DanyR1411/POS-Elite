const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true, // Oculta el menú superior clásico de Windows
    icon: path.join(__dirname, 'icon.ico'), // (Opcional) Si le pones un ícono
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.maximize(); // Abre el POS maximizado por defecto
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});