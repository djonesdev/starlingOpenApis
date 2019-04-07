import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'

import { GoalTransfer } from './GoalTransfer'
import { transferToGoal } from './GoalTransfer.redux'
import { selectAccountUid, selectGoals, selectTransferAmount } from '../../redux/selectors'
import { majorUnitsToMinor } from '../../util/text-formatter'

class GoalTransferPage extends Component {  
  state = {
    successMessage: ''
  }

  transferToGoal = async savingsGoalUid => {
    const { account, transferToGoal, transferAmount } = this.props
    const transferUid = uuid()
    const minorUnitsAmount = majorUnitsToMinor(transferAmount)
    const payload = {
      accountUid: account.accountUid, 
      savingsGoalUid, 
      transferUid: transferUid,
      amount: minorUnitsAmount
    }
    try {
      await transferToGoal(payload).then(this.setState({ successMessage: 'Success! Nice one smart saver!' }))
    } catch(err) {
      this.setState({ successMessage: 'Transfer Failed' })
      console.log(err)
    }
  }

  render() {
    const { goal, transferAmount } = this.props
    const { successMessage } = this.state
    return (
      <div>
        <GoalTransfer 
          goal={goal} 
          transferAmount={transferAmount} 
          onClick={this.transferToGoal} 
          successMessage={successMessage}
        />
        <p>{this.state.success}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const hasGoalState = !!state.goals.goals
  return ({
    state,
    goal: hasGoalState && selectGoals(state),
    transferAmount: selectTransferAmount(state), 
    account: selectAccountUid(state)
})}

const mapDispatchToProps = dispatch => ({
  transferToGoal: payload => dispatch(transferToGoal(payload)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalTransferPage)
