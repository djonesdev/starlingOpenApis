import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoalTransfer } from './GoalTransfer'
import { transferToGoal, getGoals } from '../../redux/actions'
import { selectAccountUid } from '../../redux/selectors';

class GoalTransferPage extends Component {
  async componentDidMount() {
    const { accountUid, getGoals } = this.props
    getGoals(accountUid)
  }

  render() {
    const { transferToGoal } = this.props
    console.log("state", this.props.accountUid)
    return (
      <div>
        <GoalTransfer goal={'hey'} onClick={transferToGoal} />
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
  goal: state,
  accountUid: selectAccountUid(state)
})

const mapDispatchToProps = dispatch => ({
  transferToGoal: () => dispatch(transferToGoal()), 
  getGoals: accountUid => dispatch(getGoals(accountUid))
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalTransferPage)
