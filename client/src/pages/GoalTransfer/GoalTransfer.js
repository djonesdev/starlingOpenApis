import React from 'react'
import { Button } from '../../components';
import './GoalTransfer.css'

export const GoalTransfer = (props) => {
    const { onClick } = props
    return (
        <div className="container">
            <h3>Transfer Round Up Amount</h3>
            <Button label='Make Transfer' onClick={onClick} />
        </div>
    )
}
