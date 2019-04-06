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
    deleteGoal: (accountUid, savingsGoalUid) => {
        return axios({
            url: `/account/4cc9c6f5-9dbf-9a06-e51a-02751e5ca695/savings-goals/eb5036b3-c033-4df7-b7e2-12354a55e3d0`,
            method: 'DELETE', 
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