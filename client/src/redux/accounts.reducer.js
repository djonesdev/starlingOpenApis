const initialState = {
    account: [],
    goal: []
}

export const accountsReducer = (state = initialState, action)  => {
    const { payload } = action
    switch (action.type) {
        case 'GET_ACCOUNT_DETAILS_SUCCESS': 
            return {
                ...state, 
                account: payload
            }
        case 'CREATE_GOAL_SUCCESS':
            return {
                ...state,
                goal: payload,
            }
        case 'GOAL_TRANSFER_SUCCESS':
            return {
                ...state, 
                goal: payload
            }
        default:
            return state
    }
}