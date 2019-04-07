export const selectAllTransactions = state => state.transactions.transactions

export const selectAllOutgoingTransactions = state => selectAllTransactions(state).filter(transaction => transaction.direction === "OUTBOUND" && transaction.source !== "INTERNAL_TRANSFER")

export const selectAllInboundTransactions = state => selectAllTransactions(state).filter(transaction => transaction.direction === "INBOUND")

export const selectAccountUid = state => state.account.account[0]

export const selectGoals = state => state.goals.goals.savingsGoalList

export const selectTransferAmount = state => state.goals.transferAmount

export const selectDirtyTransactions = state => state.goals.dirtyTransactions

export const selectNonRoundUpTransactions = state => selectAllTransactions(state) && selectAllOutgoingTransactions(state).filter(transaction => !state.goals.dirtyTransactions.includes(transaction))