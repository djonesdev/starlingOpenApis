export const selectAllTransactions = (state) => state.transactions.transactions

export const selectAllOutgoingTransactions = (state) => selectAllTransactions(state).filter(transaction => transaction.direction === "OUTBOUND")

export const selectAllInboundTransactions = (state) => selectAllTransactions(state).filter(transaction => transaction.direction === "INBOUND")

export const selectAccountUid = (state) => state.account.account[0]

