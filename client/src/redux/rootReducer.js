import { combineReducers } from 'redux';
import { transactionsReducer as transactions } from './transactions.reducer'

export default combineReducers({
    transactions,
})