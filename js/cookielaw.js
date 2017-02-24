/**
 * This Javascript is inspired by django-cookie-law (https://github.com/TyMaszWeb/django-cookie-law),
 * but assumes that jQuery is present, and only handles management of the cookie.
 * Provides an extra function to test for the presence of the cookielaw cookie,
 * allowing the banner to manage its own visibility.
 */

var Cookielaw = {
    hasCookie : function() {
        // Tests if the cookielaw cookie is present
        return document.cookie.match(/^(.*; ?)?cookielaw_accepted=[^;]+/) !== null;
    },

    createCookie : function() {
        // Create a cookie that effectively never expires
        document.cookie = "cookielaw_accepted=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }
};
