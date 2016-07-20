var electron = require('electron');
var tsApp = require('./tsapp.ts');

tsApp.run(electron, process, __dirname);