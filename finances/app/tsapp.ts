import path = require('path');
import jquery = require('jquery');
import electron = require('electron');

      electron.app.on('window-all-closed', function() {
        if (process.platform != 'darwin') electron.app.quit();
      });

      electron.app.on('ready', function() {
        var mainWindow = new electron.BrowserWindow({width: 800, height: 600});
        mainWindow.loadURL('file://' + path.resolve('./app/index.html'));
        mainWindow.on('closed', function() {
          mainWindow = null;
        });
      });

      