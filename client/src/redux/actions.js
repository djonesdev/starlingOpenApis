import TransactionApi from '../services/transactions.api'

export const getTransactions = () => async (dispatch) => {
    try {
      TransactionApi.getTransactions().then(response => {
          console.log('response', response)
          dispatch(getTranasctionsSuccess(response.data._embedded.transactions))
      })
      console.log(typeof result)
    } catch (err) {
        console.error(err, 'call failed')
    }
}

const getTranasctionsSuccess = (payload) => (dispatch) => {
    dispatch({
       type: 'GET_API_SUCCESS',
       payload: payload
    })
}