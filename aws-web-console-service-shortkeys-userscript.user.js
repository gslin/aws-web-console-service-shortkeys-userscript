// ==UserScript==
// @name         [DEPRECATED] AWS Web Console Service Shortkeys
// @namespace    https://wiki.gslin.org/wiki/AWS_Web_Console_Service_Shortkeys
// @version      0.20201213.0
// @description  Use '/' and Escape to switch services in AWS Web Console
// @author       You
// @match        https://console.aws.amazon.com/*
// @match        https://*.console.aws.amazon.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keyup', function(event) {
        let aEl = document.activeElement;

        // '/' key in non-input field.
        if ('input' !== aEl.tagName.toLowerCase() && 'textarea' !== aEl.tagName.toLowerCase() && '/' === event.key) {
            document.getElementById('search-box-input').focus();
            return;
        }
    });
})();
