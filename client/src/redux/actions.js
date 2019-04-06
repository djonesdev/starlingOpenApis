// import TransactionApi from '../services/transactions.api'
// import GoalsApi from '../services/goals.api'

// // Transaction Actions

// export const getTransactions = params => async dispatch => {
//     try {
//       TransactionApi.getTransactions(params).then(response => {
//           dispatch(getTranasctionsSuccess(response.data))
//       })
//     } catch (err) {
//         dispatch(getTranasctionsError(err))
//         console.error(err, 'call failed')
//     }
// }

// const getTranasctionsSuccess = payload => dispatch => {
//     dispatch({
//        type: 'GET_TRANSACTIONS_SUCCESS',
//        payload: payload
//     })
// }

// const getTranasctionsError = payload => dispatch => {
//     dispatch({
//        type: 'GET_TRANSACTIONS_ERROR',
//        payload: payload
//     })
// }

// // Goals Actions

// export const getGoals = accountUid => async dispatch => {
//     try {
//       GoalsApi.getGoals(accountUid).then(response => {
//           dispatch(getGoalsSuccess(response.data))
//         })
//         } catch (err) {
//             dispatch(getGoalsError(err))
//         console.error(err, 'get goals call failed')
//     }
// }

// const getGoalsSuccess = payload => dispatch => {
//     dispatch({
//        type: 'GET_GOAL_SUCCESS',
//        payload: payload
//     })
// }

// const getGoalsError = payload => dispatch => {
//     dispatch({
//        type: 'GET_GOAL_ERROR',
//        payload: payload
//     })
// }

// export const createGoal = payload => async dispatch => {
//     try {
//         GoalsApi.createGoal(payload)
//         .then(response => {
//             dispatch(createGoalSuccess(response))
//             dispatch(getGoals(payload.accountUid))
//         })
//     } catch (err) {
//         console.log(err, 'Goal creation failed')
//     }
// }

// const createGoalSuccess = payload => dispatch => {
//     dispatch({
//        type: 'CREATE_GOAL_SUCCESS',
//        payload: payload
//     })
// }

// export const transferToGoal = payload => async dispatch => {
//     try {
//         GoalsApi.transferToGoal(payload).then(response => dispatch(goalTransferSuccess(response)))
//     } catch (err) {
//         dispatch(goalTransferError(err))
//         console.log(err, 'Goal transfer failed')
//     }
// }

// const goalTransferSuccess = payload => dispatch => {
//     dispatch({
//         type: 'GOAL_TRANSFER_SUCCESS',
//         payload: payload
//      })
// }


// const goalTransferError = payload => dispatch => {
//     dispatch({
//         type: 'GOAL_TRANSFER_ERROR',
//         payload: payload
//     })
// }

