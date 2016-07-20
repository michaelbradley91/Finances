/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {var electron = __webpack_require__(1);
	var tsApp = __webpack_require__(2);
	
	electron.app.on('window-all-closed', function() {
	        if (process.platform != 'darwin') electron.app.quit();
	      });
	
	      electron.app.on('ready', function() {
	        var mainWindow = new electron.BrowserWindow({width: 800, height: 600});
	        mainWindow.loadURL('file://' + __dirname + '/index.html');
	        mainWindow.on('closed', function() {
	          mainWindow = null;
	        });
	      });
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, "app"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	function run(electron, process, dirName) {
	    electron.app.on('window-all-closed', function () {
	        if (process.platform != 'darwin')
	            electron.app.quit();
	    });
	    electron.app.on('ready', function () {
	        var mainWindow = new electron.BrowserWindow({ width: 800, height: 600 });
	        mainWindow.loadURL('file://' + dirName + '/index.html');
	        mainWindow.on('closed', function () {
	            mainWindow = null;
	        });
	    });
	}
	exports.run = run;


/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map