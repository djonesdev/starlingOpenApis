import React from 'react'

export const TransactionItem = (props) => {
    return (
      <div>
        <p>Amount</p>
        <p>{props.amount}</p>
        <p>Account Balance</p>
        <p>{props.balance}</p>
      </div>
    )
  }
