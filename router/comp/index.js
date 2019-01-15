const activationLink = require('./activation-link');

module.exports = function (app, axios, routes, vars) {
    activationLink(app, axios, routes, vars);
};
