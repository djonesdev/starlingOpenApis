import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TransactionItem } from '../../components'
import './Transactions.css'

export const Transactions = (props) => {
    const { 
        handleSubmit, 
        displayRoundUp, 
        transactions,
        navigateToGoal,
        hasTransactions,
        isGoalButtonDisabled,
    } = props
        return (
            <div className='page-container'>
                <h3>Would you like to view your transactions for the last seven days?</h3>
                <Button onClick={handleSubmit} label="View Transactions" />
                <div>
                    {hasTransactions && (
                    <div className="transactions-container">
                        <div className="table-container">
                            <TransactionItem transactions={transactions} />
                        </div>
                        <div className="roundup-display">
                            <h3>Your total round up for this week</h3>
                            <p>{`£${displayRoundUp}`}</p>
                            <h3>Would you like to put your round-up into your savings goal?</h3>
                            <Link to="/create-goal">
                                <Button label="Go To Goals" disabled={isGoalButtonDisabled} onClick={navigateToGoal}/>
                            </Link>
                        </div>
                    </div>
                    )} 
                </div>
            </div>
        );
      }

