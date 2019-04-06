import React from 'react'
import { Button } from '../../components';
import './GoalTransfer.css'

export const GoalTransfer = (props) => {
    const { onClick, goal, transferAmount } = props
    return (
        <div className="container">
            {goal && 
                <div>
                    <h2>Transfering To</h2>
                    <h3>{goal[0].name}</h3>
                </div>
            }
            <h3>Transfer Round Up Amount</h3>
            <p>{`£${transferAmount}`}</p>
            <Button className="button" label='Make Transfer' onClick={onClick} />
        </div>
    )
}
