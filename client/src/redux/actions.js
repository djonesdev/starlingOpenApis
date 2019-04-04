import TransactionApi from '../services/transactions.api'
import AccountsApi from '../services/accounts.api';

export const getTransactions = () => async dispatch => {
    try {
      TransactionApi.getTransactions().then(response => {
          dispatch(getTranasctionsSuccess(response.data._embedded.transactions))
      })
      console.log(typeof result)
    } catch (err) {
        console.error(err, 'call failed')
    }
}

const getTranasctionsSuccess = payload => (dispatch) => {
    dispatch({
       type: 'GET_TRANSACTIONS_SUCCESS',
       payload: payload
    })
}

export const createGoal = accountUid => async dispatch => {
    try {
        AccountsApi.createGoal(accountUid).then(response => dispatch(createGoalSuccess(response)))
    } catch (err) {
        console.log(err, 'Goal creation failed')
    }
}

const createGoalSuccess = payload => dispatch => {
    dispatch({
       type: 'CREATE_GOAL_SUCCESS',
       payload: payload
    })
}

export const transferToGoal = (accountUid, savingsGoalUid) => async dispatch => {
    try {
        AccountsApi.transferToGoal(accountUid, savingsGoalUid).then(response => dispatch(goalTransferSuccess(response)))
    } catch (err) {
        console.log(err, 'Goal transfer failed')
    }
}

const goalTransferSuccess = payload => dispatch => {
    dispatch({
        type: 'GOAL_TRANSFER_SUCCESS',
        payload: payload
     })
}