import TransactionApi from '../services/transactions.api'
import AccountsApi from '../services/accounts.api'
import GoalsApi from '../services/goals.api'

export const getTransactions = params => async dispatch => {
    try {
      TransactionApi.getTransactions(params).then(response => {
          dispatch(getTranasctionsSuccess(response.data))
      })
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

export const getAccountDetails = () => async dispatch => {
    try {
        AccountsApi.getAccountDetails().then(response => dispatch(getAccountDetailsSuccess(response.data.accounts)))
    } catch (err) {
        console.log(err, 'Get account details failed')
    }
}

const getAccountDetailsSuccess = payload => dispatch => {
    dispatch({
       type: 'GET_ACCOUNT_DETAILS_SUCCESS',
       payload
    })
}

// Goals Actions

export const getGoals = accountUid => async dispatch => {
    try {
      GoalsApi.getGoals(accountUid).then(response => {
          dispatch(getGoalsSuccess(response.data))
      })
    } catch (err) {
        console.error(err, 'get goals call failed')
    }
}

const getGoalsSuccess = payload => (dispatch) => {
    dispatch({
       type: 'GET_GOAL_SUCCESS',
       payload: payload
    })
}

export const createGoal = accountUid => async dispatch => {
    try {
        GoalsApi.createGoal(accountUid).then(response => dispatch(createGoalSuccess(response)))
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
        GoalsApi.transferToGoal(accountUid, savingsGoalUid).then(response => dispatch(goalTransferSuccess(response)))
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
