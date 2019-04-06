export const selectAllTransactions = (state) => state.transactions.transactions

export const selectAllOutgoingTransactions = (state) => selectAllTransactions(state).filter(transaction => transaction.direction === "OUTBOUND")

export const selectAllInboundTransactions = (state) => selectAllTransactions(state).filter(transaction => transaction.direction === "INBOUND")

export const selectAccountUid = (state) => state.account.account[0]

export const selectGoals = (state) => state.goals.savingsGoalList

export const selectTransferAmount = (state) => state.goals.transferAmount