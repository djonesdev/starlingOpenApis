import axios from 'axios'

export default {
    getGoals: accountUid => {
        return axios({
            url: `goals/${accountUid}`,
            method: 'GET', 
        })
    },
    createGoal: params => {
        const { name, accountUid } = params
        return axios({
            url: `goals/${accountUid}/${name}`,
            method: 'PUT', 
        })
    },
    transferToGoal: params => {
        const { accountUid, savingsGoalUid, transferUid, amount } = params
        return axios({
            url: `goals/${accountUid}/${savingsGoalUid}/add-money/${transferUid}?amount=${amount}`,
            method: 'PUT',
        })
    }
}