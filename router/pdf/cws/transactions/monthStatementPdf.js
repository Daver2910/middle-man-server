module.exports = function (app, axios, routes, vars) {
    app.get(routes.a12, async (req, res) => {
        axios({
            url: `${vars.CLIENT_URL}${vars.PORT}/pdf/generate`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + Buffer.from(vars.CLIENT_USER + ':' + vars.CLIENT_PASSWORD).toString('base64')
            },
        data: {
            'templateParameters': {
                statements: [],
                "account_details":{
                    "account_number":"00422525",
                    "iban":"G04225asdsadasdasdasdasd25",
                    "sort_code":"232290",
                    "swift_bic":"GB2L"
                },
                "client": {
                    "company_name": "Very long company name limited",
                    "client_name": "asdas",
                    "postal_code": "00-078",
                    "building_number": "2",
                    "address1": "Address 1",
                    "address2": "Address 2",
                    "city": "Warsaw",
                    "country": "Poland"
                },
                "balances": {
                    "currency_code": "GBP",
                    "brought": "1252.00",
                    "carried": "2254.00",
                    "total_credit": "4521",
                    "total_debit": "5441.43"
                },
                "from": "2018-01-01",
                "to": "2018-02-24"
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
})
};
