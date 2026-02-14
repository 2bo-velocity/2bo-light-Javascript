(function (global) {
    'use strict';

    const Light = {
        // DOM Operations
        q: (selector, context = document) => {
            return (context || document).querySelector(selector);
        },

        qa: (selector, context = document) => {
            return Array.from((context || document).querySelectorAll(selector));
        },

        id: (id) => {
            return document.getElementById(id);
        },

        // Style Operations
        addClass: (element, className) => {
            if (element && element.classList) {
                element.classList.add(className);
            }
        },

        removeClass: (element, className) => {
            if (element && element.classList) {
                element.classList.remove(className);
            }
        },

        css: (element, styles) => {
            if (element && element.style) {
                Object.assign(element.style, styles);
            }
        },

        // Attribute Operations
        attr: (element, key, value) => {
            if (!element) return;
            if (value === undefined) {
                return element.getAttribute(key);
            }
            element.setAttribute(key, value);
        },

        // Event Handling
        on: (element, type, fn, options) => {
            if (element && element.addEventListener) {
                element.addEventListener(type, fn, options);
            }
        },

        off: (element, type, fn, options) => {
            if (element && element.removeEventListener) {
                element.removeEventListener(type, fn, options);
            }
        },

        // Utility
        ready: (fn) => {
            if (document.readyState !== 'loading') {
                fn();
            } else {
                document.addEventListener('DOMContentLoaded', fn);
            }
        },

        defer: (fn) => {
            return Promise.resolve().then(fn);
        },

        uuid: () => {
            return crypto.randomUUID();
        },

        // Ajax
        get: (url) => {
            return fetch(url).then(response => response.json());
        },

        post: (url, data) => {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => response.json());
        }
    };

    // Freeze to prevent modification
    Object.freeze(Light);

    // Export to global
    global.$2b = Light;

})(window);
