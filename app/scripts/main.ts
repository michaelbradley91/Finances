import * as path from 'path';
import electron from './electron';

electron.app.on('window-all-closed', function() {
  electron.app.quit();
});

electron.app.on('ready', function() {
  var mainWindow = new electron.BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + path.resolve('./app/views/index.html'));
});

export default class MoviesViewModel {

  constructor() {
  }

  add(x, y) {
    return x + y;
  }
}