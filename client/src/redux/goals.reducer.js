const initialState = {
    goals: [],
    transferAmount: 0,
}

export const goalsReducer = (state = initialState, action)  => {
    const { payload } = action
    switch (action.type) {
        case 'GET_GOAL_SUCCESS':
            return {
                ...state,
                goals: payload,
            }
        case 'GET_GOAL_ERROR':
            return {
                ...state,
                goals: payload,
            }
        case 'CREATE_GOAL_SUCCESS':
            return {
                ...state,
                goals: payload,
            }
        case 'CREATE_GOAL_ERROR':
            return {
                ...state,
                goals: payload,
            }
        case 'SET_TRANSFER_AMOUNT': 
            return {
                ...state, 
                transferAmount: payload
            }
        case 'GOAL_TRANSFER_SUCCESS':
            return {
                ...state, 
                goals: payload
            }
        case 'GOAL_TRANSFER_ERROR':
            return {
                ...state, 
                goals: payload
            }
        default:
            return state
    }
}