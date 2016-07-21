import electron_module = require('electron');

var electron: Electron.CommonElectron;
electron = electron_module;

// Due to a bug where a locally installed electron can override the electron module when testing,
// we must override the electron value with the remote property if necessary.
if (electron_module.app == null || typeof electron_module.app == undefined) {
  electron = electron_module.remote;
}

export default electron;