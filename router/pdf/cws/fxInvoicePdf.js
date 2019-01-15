module.exports = function (app, axios, routes, vars) {
    app.get(routes.a5, async (req, res) => {
        axios({
            url: `${vars.CLIENT_URL}${vars.PORT}/pdf/generate`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + Buffer.from(vars.CLIENT_USER + ':' + vars.CLIENT_PASSWORD).toString('base64')
            },
            data: {
                'templateParameters': {
                    "userName": "David",
                    "client": {
                        "name": "My  Ltd (UK)",
                        "addressLine2": "sdsdf",
                        "addressLine1": "25",
                        "city": "Warsaw",
                        "countyState": 'Mozowice',
                        "country": "Poland",
                        "postCode": "00-133"
                    },
                    "summary": {
                        "currenciesPurchased": "USD",
                        "currenciesPurchasedNames": "us",
                        "purchasedAmount": 2555,
                        "dueDate": vars.Today,
                        "totalFees": '1231.10',
                        "invoiceNumber": "515115",
                        "orderTimestamp": null,
                        "invoice_simple_date": vars.Today,
                        "accountNumber": vars.Bank.number,
                        "settlementCurrency": "$",
                        "settlementCurrencyName": "$",
                        "totalNumberOfPayments": "12",
                        "totalCostOfCurrency": "32,000.00",
                        "valueDate": "12/11/2018",
                        "total": "33,357.87",
                        "rate": 20,
                        "paymentDateRangeTo": "31/12/2018"
                    },
                    'payments': [
                        {
                            "buyCurrency": "AUE",
                            "totalPaymentsAmount": "18554.12",
                            "rate": "1.55",
                            "sellCurrency": "USD",
                            "totalCurrencyCost": "5151",
                            "paymentsCount": "23"
                        },
                        {
                            "buyCurrency": "USD",
                            "totalPaymentsAmount": "1555",
                            "rate": "0.87",
                            "sellCurrency": "EUR",
                            "totalCurrencyCost": "88747",
                            "paymentsCount": "21"
                        }
                    ],
                    "settlementInstructions": {
                        "accountName": 'John Jones',
                        "bankName": "AIB Bank",
                        "country": 'Poland',
                        "sortCode": vars.Bank.sort,
                        "accountNumber": vars.Bank.number,
                        "iban": vars.Bank.iban,
                        "swift": vars.Bank.swift
                    },
                    "accountManagerName": vars.Manager,
                    "accountManagerPhone": vars.Phone
                },
                'orientation': 'portrait',
                'dpi': 300,
                'margin-top': '15mm',
                'margin-bottom': '15mm',
                'margin-left': "10mm",
                'margin-right': "10mm",
                'footer-html': `http://${vars.CLIENT_USER}:${vars.CLIENT_PASSWORD}@127.0.0.1:${vars.PORT}/pdf/generate-footer-pages`
            }
        }).then(data => {
            res.status(200);
            res.send(data.data)
        }, error => {
            if (error.response) {
                if (error.response.data) {
                    res.json(error.response.data);
                } else {
                    res.json('');
                }
                res.json('');
            }

        })
            .catch(err =>{
                res.send(err)
            })
    });
};
