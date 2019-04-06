var express = require('express')
var axios = require('axios')
var config = require('../config.json')
var router = express.Router()

router.get('/', async function(req, res, next) {
    console.log(req.query)
    axios.get(`${config.baseUrl}/api/v1/transactions?from=${req.query.from}&to=${req.query.to}`, { headers: config.defaultHeaders })
    .then(response => {
        res.send(response.data._embedded.transactions)
   })
})

module.exports = router