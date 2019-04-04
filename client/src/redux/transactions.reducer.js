const initialState = {
    transactions: {}
}

export const transactionsReducer = (state = initialState, action)  => {
    switch (action.type) {
      case 'GET_API_SUCCESS':
      console.log(action.payload)
      return {
          transactions: action.payload,
      }
     default:
      return state
    }
}