import * as path from 'path';
import { app, BrowserWindow, shell } from 'electron';
require('@treverix/remote/main').initialize(); // Types not supported yet

let mainWindow: BrowserWindow;

const isDev: boolean = process.env.ELECTRON_ENV === 'dev';
const isMacOS: boolean = process.platform === 'darwin';

// Render main window w/ configuration settings
const renderWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 1024,
    minWidth: 1280,
    minHeight: 1024,
    center: true,
    frame: true, //isMacOS,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      devTools: isDev,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.ts'),
    },
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.setMenu(null);
  mainWindow.removeMenu();

  // Depending on the environment the frontend will either load from the react server or the static html file
  mainWindow.loadURL(isDev ? 'http://localhost:3000/' : './build/index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Detect if devtools was somehow opened outside development and close it
  mainWindow.webContents.on('devtools-opened', () => {
    if (!isDev) mainWindow.webContents.closeDevTools();
  });

  // Open external urls inside browser
  mainWindow.webContents.on('new-window', (e, url) => {
    e.preventDefault();
    shell.openExternal(url);
  });

  // Automatically open devtools on dev mode
  mainWindow.webContents.openDevTools();
};

// Render the main window on app open
app.on('ready', renderWindow);

// Additional check to close app on macos
app.on('window-all-closed', () => !isMacOS && app.quit());

// Activate app if mainwindow isnt already opened
app.on('activate', () => !mainWindow && renderWindow());
