import axios from 'axios'

export default {
    getGoals: accountUid => {
        return axios({
            url: `https://api-sandbox.starlingbank.com/api/v2/account/${accountUid}/savings-goals`,
            method: 'GET', 
            headers: { Authorization: "Bearer C9WbmFt5WXnL8Dbbb0fLYfaB9DcETFgzvtXYz8YyP4gtNxo4ngw9RXhiUXDZSenB", Accept: "application/json" },
        })
    },
    createGoal: accountUid => {
        return axios({
            url: `https://api-sandbox.starlingbank.com/api/v2/account/${accountUid}/savings-goals`,
            data: { name: "Super sweet savings pool", currency: "GBP", target: { currency: 'GBP' } },
            method: 'PUT', 
            headers: { Authorization: "Bearer C9WbmFt5WXnL8Dbbb0fLYfaB9DcETFgzvtXYz8YyP4gtNxo4ngw9RXhiUXDZSenB", Accept: "application/json" },
        })
    },
    transferToGoal: (accountUid, savingsGoalUid) => {
        return axios({
            url: `https://api-sandbox.starlingbank.com/api/v2/account/my/savings-goals/${savingsGoalUid}/add-money/{transferUid}`,
            method: 'GET', 
            headers: { Authorization: "Bearer C9WbmFt5WXnL8Dbbb0fLYfaB9DcETFgzvtXYz8YyP4gtNxo4ngw9RXhiUXDZSenB", Accept: "application/json" },
        })
    }
}