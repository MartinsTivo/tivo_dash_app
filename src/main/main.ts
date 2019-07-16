import {app, BrowserWindow, autoUpdater, dialog} from 'electron';
import * as path from 'path';
import * as url from 'url';
require('update-electron-app')();
const isDev = require('electron-is-dev');

// this should be placed at top of main.js to handle setup events quickly
    // squirrel event handled and app will exit in 1000ms, so don't do anything else

if (!handleSquirrelEvent(app)) {

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

}


function handleSquirrelEvent(application: any) {
    if (process.argv.length === 1) {
        return false;
    }

    const ChildProcess = require('child_process');
    const path = require('path');

    const appFolder = path.resolve(process.execPath, '..');
    const rootAtomFolder = path.resolve(appFolder, '..');
    const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
    const exeName = path.basename(process.execPath);

    const spawn = function(command: any, args: any) {
        let spawnedProcess, error;

        try {
            spawnedProcess = ChildProcess.spawn(command, args, {
                detached: true
            });
        } catch (error) {}

        return spawnedProcess;
    };

    const spawnUpdate = function(args: any) {
        return spawn(updateDotExe, args);
    };

    const squirrelEvent = process.argv[1];
    switch (squirrelEvent) {
        case '--squirrel-install':
        case '--squirrel-updated':
            // Optionally do things such as:
            // - Add your .exe to the PATH
            // - Write to the registry for things like file associations and
            //   explorer context menus

            // Install desktop and start menu shortcuts
            spawnUpdate(['--createShortcut', exeName]);

            setTimeout(application.quit, 1000);
            return true;

        case '--squirrel-uninstall':
            // Undo anything you did in the --squirrel-install and
            // --squirrel-updated handlers

            // Remove desktop and start menu shortcuts
            spawnUpdate(['--removeShortcut', exeName]);

            setTimeout(application.quit, 1000);
            return true;

        case '--squirrel-obsolete':
            // This is called on the outgoing version of your app before
            // we update to the new version - it's the opposite of
            // --squirrel-updated

            application.quit();
            return true;
    }
};


