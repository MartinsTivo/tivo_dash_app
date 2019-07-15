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

if (isDev) {
    console.log("Running in development")
} else {
    const server = 'https://github.com/MartinsTivo/tivo_dash_app.git';
    const feed = `${server}/update/${process.platform}/${app.getVersion()}`

    autoUpdater.setFeedURL({url: feed});

    setInterval(() => {
        autoUpdater.checkForUpdates()
    }, 60000)

    autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
        const dialogOpts = {
          type: 'info',
          buttons: ['Restart', 'Later'],
          title: 'Application Update',
          message: process.platform === 'win32' ? releaseNotes : releaseName,
          detail: 'A new version has been downloaded. Restart the application to apply the updates.'
        }
      
        dialog.showMessageBox(dialogOpts, (response) => {
          if (response === 0) autoUpdater.quitAndInstall()
        })
      })

      autoUpdater.on('error', message => {
        console.error('There was a problem updating the application')
        console.error(message)
      })
}


