const fetch = require('node-fetch');
const axios = require('axios')
const config = require('../config.json');

module.exports = (app) => {

    app.get('/api/sandbox/transactions', (req, res) => {
        axios('/api/v1/transactions', {
            method: 'GET', 
            timeout: 4000, 
            // headers: { accessToken: config.accessToken }
        }, config.sandboxAccessToken)
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            res.redirect('/error');
        });
      });


}