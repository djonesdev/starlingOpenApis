import GoalsApi from '../../services/goals.api'

export const getGoals = accountUid => async dispatch => {
    try {
      GoalsApi.getGoals(accountUid).then(response => {
          dispatch(getGoalsSuccess(response.data))
        })
        } catch (err) {
            dispatch(getGoalsError(err))
            console.error(err, 'get goals call failed')
    }
}

export const getGoalsSuccess = payload => dispatch => {
    dispatch({
       type: 'GET_GOAL_SUCCESS',
       payload: payload
    })
}

export const getGoalsError = payload => dispatch => {
    dispatch({
       type: 'GET_GOAL_ERROR',
       payload: payload
    })
}

export const createGoal = payload => async dispatch => {
    try {
        // GoalsApi.createGoal(payload)
        // .then(response => {
            // dispatch(createGoalSuccess(response))
            dispatch(getGoals(payload.accountUid))
        // })
    } catch (err) {
        console.log(err, 'Goal creation failed')
    }
}

export const createGoalSuccess = payload => dispatch => {
    dispatch({
       type: 'CREATE_GOAL_SUCCESS',
       payload: payload
    })
}

export const createGoalError = payload => dispatch => {
    dispatch({
        type: 'CREATE_GOAL_ERROR',
        payload: payload
     })
}