module.exports = function (app, axios, routes, vars) {
    app.get(routes.a11, async (req, res) => {
        axios({
            url: `${vars.CLIENT_URL}${vars.PORT}/pdf/generate`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + Buffer.from(vars.CLIENT_USER + ':' + vars.CLIENT_PASSWORD).toString('base64')
            },
            data: {
                'templateParameters': {
                    'from': new Date(),
                    client: {
                        client_name: 'John',
                        company_name: 'sdgdg',
                        building_number: 11,
                        address1: 2,
                        address2: 'fhghghghfgh',
                        city: 'london',
                        postal_code: '342354',
                        country: 'poland'
                    },
                    balances: {
                        currency_code: '$',
                        brought: '009889',
                        total_credit: 4535,
                        total_debit: 345345,
                        carried: 34534
                    },
                    statements: [
                        {
                            date: new Date(),
                            type: '4444',
                            debit: 556,
                            credit: 555,
                            balance: 545,
                            reference: 'dsfsdfsd'
                        }
                    ]
                },
                'name': '',
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
            .catch(err => {
                res.send(err)
            })
    });
};
