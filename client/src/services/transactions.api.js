import axios from 'axios'

export default {
    getTransactions: params => {
        const { from, to } = params
        const url = `https://api-sandbox.starlingbank.com/api/v1/transactions?source=${undefined}&fromDate=${from}&toDate=${to}`
        return axios({
            url: url,
            method: 'GET', 
            headers: { Authorization: "Bearer C9WbmFt5WXnL8Dbbb0fLYfaB9DcETFgzvtXYz8YyP4gtNxo4ngw9RXhiUXDZSenB", "accessToken": 'Y5G2lM4uSbJefiNgFllnPTCdCWxvVPUn7VC0axYWpL3cbLYy1DZ9BN8fb9xbeUtM' },
        })
    }
}