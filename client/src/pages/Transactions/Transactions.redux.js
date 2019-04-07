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

export const getTranasctionsSuccess = payload => dispatch => {
    dispatch({
       type: 'GET_TRANSACTIONS_SUCCESS',
       payload: payload
    })
}


export const getTranasctionsError = payload => dispatch => {
    dispatch({
       type: 'GET_TRANSACTIONS_ERROR',
       payload: payload
    })
}

export const setTransferAmount = payload => {
    return {
        type: 'SET_TRANSFER_AMOUNT',
        payload,
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

export const getAccountDetailsSuccess = payload => dispatch => {
    dispatch({
       type: 'GET_ACCOUNT_DETAILS_SUCCESS',
       payload
    })
}

export const getAccountDetailsError = payload => dispatch => {
    dispatch({
       type: 'GET_ACCOUNT_DETAILS_ERROR',
       payload
    })
}