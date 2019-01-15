const monthStatement = require('./statement/monthStatementPdf');

module.exports = function (app, axios, routes, vars) {
    monthStatement(app, axios, routes, vars);
};
