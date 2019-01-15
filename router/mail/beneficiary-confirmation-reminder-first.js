module.exports = function (app, axios, routes, vars) {

    app.get(routes.a7, async (req, res) => {
        axios({
            url: `${vars.CLIENT_URL}${vars.PORT}/pdf/generate`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + Buffer.from(vars.CLIENT_USER + ':' + vars.CLIENT_PASSWORD).toString('base64')
            },
            data: {
                'template': '',
                'templateParameters': {
                    "contactName": "David",
                    "dealerName": vars.Manager,
                    "clientName": "Facebook",
                    "beneficiaryName": "amazon ltd",
                    "lastContact": vars.Today

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
            .catch(err => {
                res.send(err)
            })
    });
}
