'use strict';

var electron     = require('electron');
var app          = electron.app;
var BrowserWindow = electron.BrowserWindow; 

// chash-reporterがcompanyNameとか必要らしいので一旦コメントアウト
// require('crash-reporter').start();


var mainWindow = null;

app.on('window-all-closed', function(){
   if (process.platform != 'darwin')
       app.quit();
});

app.on('ready', function(){
    // ブラウザ(Chromium)の起動、初期画面のロード
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});



