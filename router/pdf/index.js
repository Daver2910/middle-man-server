const cws = require('./cws/index');
const forex = require('./forex/index');

module.exports = function (app, axios, routes, vars) {
    cws(app, axios, routes, vars);
    forex(app, axios, routes, vars);
};
