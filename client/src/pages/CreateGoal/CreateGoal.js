import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components';

export const CreateGoalView = (props) => {
  return (
    <>
      <div>
        <h3>From here you can create a pot for a savings goal</h3>
        <h3>All you need to do is provide a name, we'll handle the rest!</h3>
        <h2>Goal name</h2>
        <input onChange={props.onChangeName} />
        <Link to="/transfer-to-goal">
          <Button onClick={props.createGoal} label="Create Goal"/>
        </Link>
      </div>
    </>
  )
}
