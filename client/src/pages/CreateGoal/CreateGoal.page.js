import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CreateGoalView } from './CreateGoal'
import { createGoal, getGoals } from './CreateGoal.redux'
import { selectAccountUid, selectTransferAmount, selectGoals } from '../../redux/selectors'



class CreateGoal extends Component {
  state = {
      name: '',
      currency: 'GBP',
  }

  componentDidMount = async () => {
    const { getGoals, account } = this.props
    try {
      await getGoals(account.accountUid)
    } catch (err){
      console.log(err)
    }
  }

  createGoal = async () => {
    const { createGoal, account } = this.props
    const { name } = this.state
    const payload = {
      name,
      accountUid: account.accountUid
    }
    try {
      await createGoal(payload)
    } catch (err) {
      console.log(err)
    }
  }

  onChangeName = e => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { transferAmount, goals } = this.props 
    const hasGoals = goals && goals.length > 1
    const createGoalButtonDisabled = !this.state.name
    return (
      <div>
        <CreateGoalView 
          onChangeName={this.onChangeName} 
          transferAmount={transferAmount} 
          createGoal={this.createGoal}  
          hasGoals={hasGoals}
          createGoalButtonDisabled={createGoalButtonDisabled}
        />
      </div>
    )
  } 
}

const mapStateToProps = state => ({
  account: selectAccountUid(state),
  transferAmount: selectTransferAmount(state), 
  goals: selectGoals(state), 
})

const mapDispatchToProps = dispatch => ({
  createGoal: payload => dispatch(createGoal(payload)),
  getGoals: payload => dispatch(getGoals(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGoal);