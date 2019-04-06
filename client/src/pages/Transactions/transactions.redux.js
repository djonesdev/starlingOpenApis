import TransactionApi from '../../services/transactions.api'
import AccountsApi from '../../services/accounts.api'

// Transactions Actions

export const getTransactions = params => async dispatch => {
    try {
      TransactionApi.getTransactions(params).then(response => {
          dispatch(getTranasctionsSuccess(response.data))
      })
    } catch (err) {
        dispatch(getTranasctionsError(err))
        console.error(err, 'call failed')
    }
}

const getTranasctionsSuccess = payload => dispatch => {
    dispatch({
       type: 'GET_TRANSACTIONS_SUCCESS',
       payload: payload
    })
}


const getTranasctionsError = payload => dispatch => {
    dispatch({
       type: 'GET_TRANSACTIONS_ERROR',
       payload: payload
    })
}

export const setTransferAmount = amount => {
    return {
        type: 'SET_TRANSFER_AMOUNT',
        payload: amount,
    }
}

// Account Actions

export const getAccountDetails = () => async dispatch => {
    try {
        AccountsApi.getAccountDetails().then(response => dispatch(getAccountDetailsSuccess(response.data.accounts)))
    } catch (err) {
        dispatch(getAccountDetailsError(err))
        console.log(err, 'Get account details failed')
    }
}

const getAccountDetailsSuccess = payload => dispatch => {
    dispatch({
       type: 'GET_ACCOUNT_DETAILS_SUCCESS',
       payload
    })
}

const getAccountDetailsError = payload => dispatch => {
    dispatch({
       type: 'GET_ACCOUNT_DETAILS_ERROR',
       payload
    })
}