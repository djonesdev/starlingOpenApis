const initialState = {
    account: [],
}

export const accountsReducer = (state = initialState, action)  => {
    const { payload } = action
    switch (action.type) {
        case 'GET_ACCOUNT_DETAILS_SUCCESS': 
            return {
                ...state, 
                account: payload
            }
        case 'GET_ACCOUNT_DETAILS_ERROR': 
            return {
                ...state, 
                account: payload
            }
        default:
            return state
    }
}