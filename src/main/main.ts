import {app, BrowserWindow, autoUpdater, dialog} from 'electron';
import * as path from 'path';
import * as url from 'url';
require('update-electron-app')();
const isDev = require('electron-is-dev');

let mainWindow: Electron.BrowserWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 800
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, './index.html'),
            protocol: 'file:',
            slashes: true
        })
    )

    // Open Dev Tools
    mainWindow.webContents.openDevTools();

    // When window is closed 
    mainWindow.on('closed', () => {
        // Close all window elements and handle final actions
        mainWindow = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
})


