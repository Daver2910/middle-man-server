module.exports = function (app, axios, routes, vars) {
    app.get(routes.a10, async (req, res) => {
        axios({
            url: `${vars.CLIENT_URL}${vars.PORT}/pdf/generate`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + Buffer.from(vars.CLIENT_USER + ':' + vars.CLIENT_PASSWORD).toString('base64')
            },
            data: {
                'templateParameters': {
                    accountType: 1
                },
                'name': `pdf_mt103_payment_confirmation_`,
                'orientation': 'portrait',
                'dpi': 300,
                'margin-top': '15mm',
                'margin-bottom': '15mm',
                'margin-left': "10mm",
                'margin-right': "10mm",
                'footer-html': `http://${vars.CLIENT_USER}:${vars.CLIENT_PASSWORD}@127.0.0.1:${vars.PORT}/pdf/generate-footer-pages`
            }
        })
            .then(data => {
                res.status(200);
                res.send(data.data)
            })
        .catch(err =>{ res.send(err)})
    });
}
