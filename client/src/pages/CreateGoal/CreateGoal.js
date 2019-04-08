import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '../../components';

export const CreateGoalView = (props) => {
  const { createGoal, onChangeName, transferAmount, hasGoals, createGoalButtonDisabled } = props
  return (
    <div className="page-container">
      <h3>From here you can create a savings goal</h3>
      <h3>All you need to do is provide a name, we'll handle the rest!</h3>
      <h3>Amount To Transfer</h3>
      <h3>{`£${transferAmount}`}</h3>
      <Input onChange={onChangeName} />
      <Link to="/transfer-to-goal">
        <Button 
          className="button" 
          id="create-goal" 
          onClick={createGoal} 
          label="Create Goal"
          disabled={createGoalButtonDisabled}
        />
      </Link>
      {hasGoals &&
      <div>
        <h3>Or send your transfer to a exsisting goal</h3>
        <Link to="/transfer-to-goal">
          <Button className="button" id="navigate-to-transactions" label="Transfer To Existing Goal"/>
        </Link>
      </div>
      }
    </div>
  )
}
