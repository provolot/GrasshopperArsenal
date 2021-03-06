// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
//
//

const { ipcRenderer } = require('electron')
var Events = require('./Events.js');
var $ = require('jquery');

ipcRenderer.on('echoserver::log', (event, msg) => {
    console.log(msg);
    $('<div class=msg>' + msg + '</div>').prependTo('#recentmessages');

    var maxMessages = 20
    var toRemove = $("#recentmessages").find(".msg").length - maxMessages;
    $("#recentmessages").find(".msg:nth-last-child(-n+" + toRemove + ")").remove();
});

Events.setRandomGradient();

