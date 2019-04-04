import React from 'react'

export const CreateGoalView = (props) => {
  return (
    <>
    <div>
      <h3>From here you can create a pot for a savings goal</h3>
      <h3>All you need to do is provide a name, we'll handle the rest!</h3>
      <h2>Goal name</h2>
      <input onChange={props.onChangeName} />
      <button onClick={props.createGoal}>Create a goal</button>
    </div>
    </>
  )
}
