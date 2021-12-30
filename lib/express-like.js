exports = module.exports = createApplication;

var EventEmitter = require('events').EventEmitter;
var mixin = require('merge-descriptors');

function createApplication() {
    var app = function(req, res, next) {
        app.handle(req, res, next);
    }

    mixin(app, EventEmitter.prototype, false);

    app.request = Object.create(req, {
        app: {configurable: true, enumerable: true, writable: true, value:app}
    })

    app.response = Object.create(res, {
        app: {configurable: true, enumerable: true, writable: true, value: app}
    })

    return app;
}