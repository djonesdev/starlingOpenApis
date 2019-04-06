import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TransactionItem } from '../../components'
import './transactions.css'

export const Transactions = (props) => {
    const { 
        handleSubmit, 
        displayRoundUp, 
        transactions,
        navigateToGoal,
        hasTransactions
    } = props
        return (
          <div className='page-container'>
            <div className='date-picker'>
                <h3 className="center-aligned">Would you like to view your transactions for the last seven days?</h3>
                <Button className="center-aligned" onClick={handleSubmit} label="View Transactions" />
            </div>
            {hasTransactions && (
                <div className="table-container">
                    <TransactionItem transactions={transactions} />
                </div>
            )}
            <div className="center-aligned">
                <h3>Your total round up for this month</h3>
                <p>{`£${displayRoundUp}`}</p>
                <h3>Would you like to put your round-up into your savings goal?</h3>
                <Link to="/create-goal">
                    <Button label="Go To Goals" onClick={navigateToGoal}/>
                </Link>
                </div>
          </div>
        );
      }

