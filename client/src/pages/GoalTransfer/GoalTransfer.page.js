import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'

import { GoalTransfer } from './GoalTransfer'
import { transferToGoal } from './GoalTransfer.redux'
import { selectAccountUid, selectGoals, selectTransferAmount } from '../../redux/selectors';
import { majorUnitsToMinor } from '../../util/text-formatter';

class GoalTransferPage extends Component {  

  transferToGoal = () => {
    const { account, goal, transferToGoal, transferAmount } = this.props
    const transferUid = uuid()
    const minorUnitsAmount = majorUnitsToMinor(transferAmount)
    const payload = {
      accountUid: account.accountUid, 
      savingsGoalUid: goal[0].savingsGoalUid, 
      transferUid: transferUid,
      amount: minorUnitsAmount
    }
    transferToGoal(payload)
  }

  render() {
    const { goal, transferAmount } = this.props
    return (
      <div>
        <GoalTransfer goal={goal} transferAmount={transferAmount} onClick={this.transferToGoal} />
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
  goal: selectGoals(state),
  transferAmount: selectTransferAmount(state), 
  account: selectAccountUid(state)
})

const mapDispatchToProps = dispatch => ({
  transferToGoal: payload => dispatch(transferToGoal(payload)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalTransferPage)
