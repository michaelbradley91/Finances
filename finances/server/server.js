!function(e){function o(n){if(r[n])return r[n].exports;var t=r[n]={exports:{},id:n,loaded:!1};return e[n].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}var r={};return o.m=e,o.c=r,o.p="",o(0)}([function(e,o,r){"use strict";var n=r(1),t=r(2);t.app.on("window-all-closed",function(){"darwin"!=process.platform&&t.app.quit()}),t.app.on("ready",function(){var e=new t.BrowserWindow({width:800,height:600});e.loadURL("file://"+n.resolve("./app/index.html")),e.on("closed",function(){e=null})})},function(e,o){e.exports=require("path")},function(e,o){e.exports=require("electron")}]);
//# sourceMappingURL=server.js.map