import { combineReducers } from 'redux';
import { transactionsReducer as transactions } from './transactions.reducer'
import { accountsReducer as account } from './accounts.reducer'

export default combineReducers({
    transactions,
    account,
})