const initialState = {
    transactions: []
}

export const transactionsReducer = (state = initialState, action)  => {
    const { payload } = action
    switch (action.type) {
      case 'GET_TRANSACTIONS_SUCCESS':
      return {
          ...state,
          transactions: payload,
      }
     default:
      return state
    }
}