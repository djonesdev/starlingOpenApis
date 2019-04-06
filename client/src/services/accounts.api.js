import axios from 'axios'

export default {
    getAccountDetails: () => {
        return axios({
            url: `https://api-sandbox.starlingbank.com/api/v2/accounts`,
            method: 'GET', 
            headers: { Authorization: "Bearer C9WbmFt5WXnL8Dbbb0fLYfaB9DcETFgzvtXYz8YyP4gtNxo4ngw9RXhiUXDZSenB", Accept: "application/json" },
        })
    },
}