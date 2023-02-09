// ==UserScript==
// @name         WebSocketRedirect
// @namespace    WRedirect
// @version      1.0
// @description  Redirect all Websocket connections to 127.0.0.1:8080
// @author       Moch
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var originalWebSocket = window.WebSocket;
window.WebSocket = function(url) {
    return new originalWebSocket('ws://127.0.0.1:8080');
};
})();
