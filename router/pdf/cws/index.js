const bankOpeningLetter = require('./bankOpeningLetter');
const fxInvoice = require('./fxInvoicePdf');
const mthStatement = require('./transactions/monthStatementPdf');

module.exports = function (app, axios, routes, vars) {
    bankOpeningLetter(app, axios, routes, vars);
    fxInvoice(app, axios, routes, vars);
    mthStatement(app, axios, routes, vars);
};
