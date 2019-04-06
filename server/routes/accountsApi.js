var express = require('express')
var axios = require('axios')
var config = require('../config.json')
var router = express.Router()


router.get('/', async function(req, res, next) {
    axios.get(`${config.baseUrl}/api/v2/accounts`, { headers: config.defaultHeaders })
        .then(response => {
            res.send(response.data)
    })
})

module.exports = router
