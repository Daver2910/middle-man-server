const firstCallValidate = require('./first-call-validate-fail-private');
const Welcome = require('./welcome-letter');
const beneConfirmation = require('./beneficiary-confirmation');
const firstReminder = require('./beneficiary-confirmation-reminder-first');
const secondReminder = require('./beneficiary-confirmation-reminder-second');
const welcomeEmail = require('./welcome-email');
const welcomeTocompany = require('./welcome-to');

module.exports = function (app, axios, routes, vars) {
    firstCallValidate(app, axios, routes, vars);
    Welcome(app, axios, routes, vars);
    beneConfirmation(app, axios, routes, vars);
    firstReminder(app, axios, routes, vars);
    secondReminder(app, axios, routes, vars);
    welcomeEmail(app, axios, routes, vars);
    welcomeTocompany(app, axios, routes, vars);

};
