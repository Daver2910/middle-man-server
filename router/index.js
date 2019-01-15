const lite = require('./lite/index');
const pdf = require('./pdf/index');
const comap = require('./comap/index');
const mail = require('./mail/index');

module.exports = function (app, axios, routes, vars) {
    lite(app, axios, routes, vars);
    pdf(app, axios, routes, vars);
    comap(app, axios, routes, vars);
    mail(app, axios, routes, vars);
};

