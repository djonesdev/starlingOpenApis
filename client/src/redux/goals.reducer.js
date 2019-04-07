const initialState = {
    goals: [],
    dirtyTransactions: [],
    transferTargetGoalName: '',
    transferAmount: 0,
    loading: false 
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
                transferAmount: payload.amount,
                dirtyTransactions: payload.dirtyTransactions
            }
        case 'SET_TARGET_GOAL_NAME': {
            return {
                ...state,
                transferTargetGoalName: payload
            }
        }
        case 'GOAL_TRANSFER_START':
            return {
                loading: true
            }
        case 'GOAL_TRANSFER_SUCCESS':
            return {
                ...state, 
                goals: payload,
                loading: false
            }
        case 'GOAL_TRANSFER_ERROR':
            return {
                ...state, 
                goals: payload,
                loading: false
            }
        default:
            return state
    }
}