import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CreateGoalView } from './CreateGoal'
import { createGoal, getGoals } from './CreateGoal.redux'
import { selectAccountUid, selectTransferAmount } from '../../redux/selectors'



class CreateGoal extends Component {
  state = {
      name: '',
      currency: 'GBP',
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

  navigateToTransfer = async () => {
    const { getGoals, account } = this.props
    try {
      await getGoals(account.accountUid)
    } catch (err){
      console.log(err)
    }
  }

  onChangeName = e => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { transferAmount } = this.props 
    return (
      <div>
        <CreateGoalView 
          onChangeName={this.onChangeName} 
          transferAmount={transferAmount} 
          createGoal={this.createGoal}
          navigateToTransfer={this.navigateToTransfer}
        />
      </div>
    )
  } 
}

const mapStateToProps = state => ({
  account: selectAccountUid(state),
  transferAmount: selectTransferAmount(state), 
})

const mapDispatchToProps = dispatch => ({
  createGoal: payload => dispatch(createGoal(payload)),
  getGoals: payload => dispatch(getGoals(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGoal);