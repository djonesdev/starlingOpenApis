import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components';

export const CreateGoalView = (props) => {
  const { createGoal, onChangeName, transferAmount } = props
  return (
    <>
      <h3>From here you can create a pot for a savings goal</h3>
      <h3>All you need to do is provide a name, we'll handle the rest!</h3>
      <h3>Amount To Transfer</h3>
      <h3>{`£${transferAmount}`}</h3>
      <input onChange={onChangeName} />
      <Link to="/transfer-to-goal">
        <Button className="button" onClick={createGoal} label="Create Goal"/>
      </Link>
    </>
  )
}
