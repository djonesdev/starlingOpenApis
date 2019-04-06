import GoalsApi from '../../services/goals.api'

export const transferToGoal = payload => async dispatch => {
    try {
        GoalsApi.transferToGoal(payload).then(response => dispatch(goalTransferSuccess(response)))
    } catch (err) {
        dispatch(goalTransferError(err))
        console.log(err, 'Goal transfer failed')
    }
}

const goalTransferSuccess = payload => dispatch => {
    dispatch({
        type: 'GOAL_TRANSFER_SUCCESS',
        payload: payload
     })
}


const goalTransferError = payload => dispatch => {
    dispatch({
        type: 'GOAL_TRANSFER_ERROR',
        payload: payload
    })
}

