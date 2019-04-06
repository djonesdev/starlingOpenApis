import React from 'react'
import { Link } from 'react-router-dom'
import { DateRangePicker, Button, TransactionItem } from '../../components'
import './transactions.css'

export const Transactions = (props) => {
    const { 
        onCangeFromDate, 
        onCangeToDate, 
        fromDate, 
        toDate, 
        handleSubmit, 
        displayRoundUp, 
        transactions,
        navigateToGoals,
    } = props
        const hasTransactions = transactions.length >= 1
        return (
          <div className='page-container'>
            <div className='date-picker'>
                <h3 className="center-aligned">Would you like to view your transactions?</h3>
                <h4 className="center-aligned">You can enter dates below to filter transactions, or just leave them blank</h4>
                <DateRangePicker 
                    onChangeFromDate={onCangeFromDate} 
                    onChangeToDate={onCangeToDate} 
                    fromDateValue={fromDate}
                    toDateValue={toDate}
                />
                <Button className="center-aligned " onClick={handleSubmit} label="View Transactions" />
            </div>
                <div className="center-aligned">
                    <h3>Your total round up for this month</h3>
                    <p>{displayRoundUp}</p>
                    <h3>Would you like to put your round-up into your savings goal?</h3>
                    <Button label="Go To Goals" onClick={navigateToGoals}/>
                    <Link to="/create-goal">
                        <Button label="Create Goal" />
                    </Link>
                </div>
            {hasTransactions && (
                <div className="center-aligned">
                    <TransactionItem transactions={transactions} />
                </div>
            )}
          </div>
        );
      }

