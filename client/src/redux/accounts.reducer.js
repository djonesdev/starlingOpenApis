const initialState = {
    account: [],
    goals: []
}

export const accountsReducer = (state = initialState, action)  => {
    const { payload } = action
    switch (action.type) {
        case 'GET_ACCOUNT_DETAILS_SUCCESS': 
            return {
                ...state, 
                account: payload
            }
        case 'GET_GOAL_SUCCESS':
            return {
                ...state,
                goals: payload,
            }
        case 'CREATE_GOAL_SUCCESS':
            return {
                ...state,
                goals: payload,
            }
        case 'GOAL_TRANSFER_SUCCESS':
            return {
                ...state, 
                goals: payload
            }
        default:
            return state
    }
}