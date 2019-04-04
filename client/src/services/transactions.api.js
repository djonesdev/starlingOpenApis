import axios from 'axios'

export default {
    getTransactions: () => {
        return axios({
            url: 'https://api-sandbox.starlingbank.com/api/v1/transactions',
            method: 'GET', 
            headers: { Authorization: "Bearer Y5G2lM4uSbJefiNgFllnPTCdCWxvVPUn7VC0axYWpL3cbLYy1DZ9BN8fb9xbeUtM", "accessToken": 'Y5G2lM4uSbJefiNgFllnPTCdCWxvVPUn7VC0axYWpL3cbLYy1DZ9BN8fb9xbeUtM' },
        })
    }
}