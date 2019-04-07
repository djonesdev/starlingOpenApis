import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components';
import './GoalTransfer.css'
import { minorUnitsToMajor } from '../../util/text-formatter';

export const GoalTransfer = (props) => {
    const { onClick, goal, transferAmount, successMessage } = props
    return (
        <div className="container">
            {!successMessage &&
                <h2>Which Goal would you like to transfer to?</h2>
            }
            {goal && 
            goal.map(goal =>
                <div key={goal.savingsGoalUid}>
                    <h3>{goal.name}</h3>
                    <p>Current Amount Saved</p>
                    <p>{`£${minorUnitsToMajor(goal.totalSaved.minorUnits)}`}</p>
                    <Button className="button" label={`Make Transfer To ${goal.name}`} disabled={!goal} onClick={() => onClick(goal.savingsGoalUid)} />
                </div>)
            }
            {transferAmount && 
                <div>
                    <h3>Transfer Round Up Amount</h3>
                    <p>{`£${transferAmount}`}</p>
                </div>
            }
            {successMessage &&
                <div>
                    <p>{successMessage}</p>
                    <Link to="/">
                        <Button label="Back To Transactions" />
                    </Link>
                </div>
            }
        </div>
    )
}
