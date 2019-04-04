import axios from 'axios'

export default {
    createGoal: (accountUid) => {
        return axios({
            url: `https://api-sandbox.starlingbank.com/api/v2/account/${accountUid}/savings-goals`,
            method: 'GET', 
            headers: { Authorization: "Bearer Y5G2lM4uSbJefiNgFllnPTCdCWxvVPUn7VC0axYWpL3cbLYy1DZ9BN8fb9xbeUtM", Accept: "application/json" },
        })
    },
    transferToGoal: (accountUid, savingsGoalUid) => {
        return axios({
            url: `https://api-sandbox.starlingbank.com/api/v2/account/${accountUid}/savings-goals/${savingsGoalUid}/add-money/{transferUid}`,
            method: 'GET', 
            headers: { Authorization: "Bearer Y5G2lM4uSbJefiNgFllnPTCdCWxvVPUn7VC0axYWpL3cbLYy1DZ9BN8fb9xbeUtM", "accessToken": 'Y5G2lM4uSbJefiNgFllnPTCdCWxvVPUn7VC0axYWpL3cbLYy1DZ9BN8fb9xbeUtM' },
        })
    }
}