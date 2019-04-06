var express = require('express')
var axios = require('axios')
var config = require('../config.json')
var router = express.Router()

router.get('/', async function(res) {
    axios.get(`${config.baseUrl}/api/v1/transactions?source=${undefined}&fromDate=${undefined}&toDate=${undefined}`, { headers: config.defaultHeaders })
    .then(response => {
        console.log(response.data._embedded.transactions)
        res.send(response.data._embedded.transactions)
   })
})


module.exports = router