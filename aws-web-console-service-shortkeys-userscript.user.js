// ==UserScript==
// @name         AWS Web Console Service Shortkeys
// @namespace    https://wiki.gslin.org/wiki/AWS_Web_Console_Service_Shortkeys
// @version      0.20190924.3
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
        if ('input' !== aEl.tagName.toLowerCase() && 'textare' !== aEl.tagName.toLowerCase() && '/' === event.key) {
            document.getElementById('nav-servicesMenu').click();
            return;
        }

        // Escape key in #awsc-services-search-autocomplete
        if ('awsc-services-search-autocomplete' === document.activeElement.id && 'Escape' === event.key) {
            document.getElementById('nav-servicesMenu').click();
            return;
        }
    });
})();
