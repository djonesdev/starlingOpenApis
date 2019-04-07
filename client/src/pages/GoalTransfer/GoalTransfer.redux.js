import GoalsApi from '../../services/goals.api'

export const transferToGoal = payload => async dispatch => {
    dispatch(goalTransferStart())
    try {
        GoalsApi.transferToGoal(payload).then(response => dispatch(goalTransferSuccess(response)))
    } catch (err) {
        dispatch(goalTransferError(err))
        console.log(err, 'Goal transfer failed')
    }
}

export const goalTransferStart = () => {
    return {
        type: 'GOAL_TRANSFER_START', 
    }
}

export const goalTransferSuccess = payload => dispatch => {
    dispatch({
        type: 'GOAL_TRANSFER_SUCCESS',
        payload: payload
     })
}


export const goalTransferError = payload => dispatch => {
    dispatch({
        type: 'GOAL_TRANSFER_ERROR',
        payload: payload
    })
}

