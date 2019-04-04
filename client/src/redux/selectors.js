export const selectAllTransactions = (state) => state.transactions.transactions

export const selectAllOutgoingTransactions = (state) => selectAllTransactions(state).filter(transaction => transaction.direction === "OUTBOUND")

export const selectAllInboundTransactions = (state) => selectAllTransactions(state).filter(transaction => transaction.direction === "INBOUND")

