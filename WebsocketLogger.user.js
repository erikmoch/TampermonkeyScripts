// ==UserScript==
// @name         WebsocketLogger
// @namespace    WSLogger
// @version      1.0
// @description  Logs all messages sent and received through websockets
// @author       Moch
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const originalWebSocket = window.WebSocket;
    window.WebSocket = function(url) {
        const socket = new originalWebSocket(url);
        socket.addEventListener('message', event => {
            console.log(`[Incoming] ${event.data}`);
        });
        socket.sendOriginal = socket.send;
        socket.send = function(data) {
            console.log(`[Outgoing] ${data}`);
            socket.sendOriginal(data);
        };
        return socket;
    };
})();