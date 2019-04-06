import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CreateGoalView } from './CreateGoal'
import { createGoal } from './CreateGoal.redux'
import GoalsApi from '../../services/goals.api'
import { selectAccountUid, selectGoals, selectTransferAmount } from '../../redux/selectors'



class CreateGoal extends Component {
  state = {
      name: '',
      currency: 'GBP',
  }

  createGoal = async e => {
    const { createGoal, account } = this.props
    const { name } = this.state
    const payload = {
      name,
      accountUid: account.accountUid
    }
    await createGoal(payload)
  };

  onChangeName = e => {
    this.setState({ name: e.target.value })
  }

  deleteGoal = () => {
    GoalsApi.deleteGoal()
  }

render() {
  const { transferAmount } = this.props 
    return (
      <div>
        <button onClick={this.deleteGoal}></button>
        <CreateGoalView onChangeName={this.onChangeName} transferAmount={transferAmount} createGoal={this.createGoal}/>
        {this.props.goals && <p>{this.props.goals}</p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  account: selectAccountUid(state),
  transferAmount: selectTransferAmount(state), 
  goals: selectGoals(state),
  state
})

const mapDispatchToProps = dispatch => ({
  createGoal: payload => dispatch(createGoal(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGoal);