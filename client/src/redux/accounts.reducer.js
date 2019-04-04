const initialState = {
    accounts: {}
}

export const accountsReducer = (state = initialState, action)  => {
    const { payload } = action
    switch (action.type) {
        case 'CREATE_GOAL_SUCCESS':
            return {
                ...state,
                accounts: payload,
            }
        case 'GOAL_TRANSFER_SUCCESS':
            return {
                ...state, 
                accounts: payload
            }
        default:
            return state
    }
}