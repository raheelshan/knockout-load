// Knockout Load plugin v1.0
// (c) 2014 Muhammad Raheel - 
(function (e) {
    "function" === typeof require && "object" === typeof exports && "object" === typeof module ? e(require("knockout"), exports) : "function" === typeof define && define.amd ? define(["knockout", "exports"], e) : e(ko, ko.search = {})
})
(function (e, f) {
    ko.load = {
        view: function (path) {
            var path = path + '.html'
            var xmlHttp = null;
            xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", path, false );
            xmlHttp.send( null );
            return xmlHttp.responseText
        }
    }
})
