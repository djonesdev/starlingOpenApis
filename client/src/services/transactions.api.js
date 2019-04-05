import axios from 'axios'
import moment from 'moment'

export default {
    getTransactions: (params) => {
        const { from, to } = params
        console.log(params)
        let url
        if(!params.from && !params.to) {
            url = `https://api-sandbox.starlingbank.com/api/v1/transactions`
        } else {
            url = `https://api-sandbox.starlingbank.com/api/v1/transactions?fromDate=${from}&toDate=${to}`
        }
        return axios({
            url: url,
            method: 'GET', 
            headers: { Authorization: "Bearer Y5G2lM4uSbJefiNgFllnPTCdCWxvVPUn7VC0axYWpL3cbLYy1DZ9BN8fb9xbeUtM", "accessToken": 'Y5G2lM4uSbJefiNgFllnPTCdCWxvVPUn7VC0axYWpL3cbLYy1DZ9BN8fb9xbeUtM' },
        })
    }
}