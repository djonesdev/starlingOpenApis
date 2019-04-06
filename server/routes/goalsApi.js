var express = require('express')
var axios = require('axios')
var config = require('../config.json')
var router = express.Router()


router.get('/:accountUid', async function(req, res, next) {
    axios.get(
        `${config.baseUrl}/api/v2/account/${req.params.accountUid}/savings-goals`, 
        { headers: config.defaultHeaders }
    )
    .then(response => {
        res.send(response.data)
    })
})

router.put('/:accountUid/:goalName', async function(req, res, next) {
    axios.put(
        `${config.baseUrl}/api/v2/account/${req.params.accountUid}/savings-goals`, 
        {
            name: req.params.goalName,
            currency: 'GBP'
        }, 
        { headers: config.defaultHeaders }
    )
    .then(response => {
        res.send(response.data)
    })
})

router.delete('/:accountUid/savings-goals/:savingsGoalUid', async function(req, res, next) {
    axios.delete(
        `${config.baseUrl}/api/v2/account/${req.params.accountUid}/savings-goals/${req.params.savingsGoalUid}`,
        { headers: config.defaultHeaders }
    )
})

router.put('/:accountUid/:savingsGoalUid/add-money/:transferUid', async function(req, res, next) {
    console.log('REDPARAMS', req.query)
    try {
        axios.put(
            `${config.baseUrl}/api/v2/account/${req.params.accountUid}/savings-goals/${req.params.savingsGoalUid}/add-money/${req.params.transferUid}`,
            { 
                amount: {
                    currency: "GBP",
                    minorUnits: req.query.amount
                } 
            },
            { headers: config.defaultHeaders }
        )
        .then(response => {
            console.log('transferRESPONSe', response)
            res.send(response.data)
        })
    } catch (err) {
        console.log(err, 'failed to make transfer')
    }
})

// data then config

// transferToGoal: (accountUid, savingsGoalUid) => {
//     return axios({
//         url: `https://api-sandbox.starlingbank.com/api/v2/account/my/savings-goals/${savingsGoalUid}/add-money/{transferUid}`,
//         method: 'GET', 
//         headers: { Authorization: "Bearer C9WbmFt5WXnL8Dbbb0fLYfaB9DcETFgzvtXYz8YyP4gtNxo4ngw9RXhiUXDZSenB", Accept: "application/json" },
//     })
// }

module.exports = router
