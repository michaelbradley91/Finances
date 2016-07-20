export function run(electron, process, dirName) {
      electron.app.on('window-all-closed', function() {
        if (process.platform != 'darwin') electron.app.quit();
      });

      electron.app.on('ready', function() {
        var mainWindow = new electron.BrowserWindow({width: 800, height: 600});
        mainWindow.loadURL('file://' + dirName + '/index.html');
        mainWindow.on('closed', function() {
          mainWindow = null;
        });
      });
  }