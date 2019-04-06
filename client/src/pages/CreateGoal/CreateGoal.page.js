import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CreateGoalView } from './CreateGoal'
import { createGoal } from '../../redux/actions';
import { selectAccountUid } from '../../redux/selectors';



class CreateGoal extends Component {
  state = {
      name: '',
      currency: 'GBP',
  }

  createGoal = async e => {
    const { createGoal, account } = this.props
    e.preventDefault();
    createGoal(account.accountUid)
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

render() {
    return (
      <CreateGoalView onChangeName={this.onChangeName} createGoal={this.createGoal}/>
    )
  }
}

const mapStateToProps = state => ({
  account: selectAccountUid(state),
})

const mapDispatchToProps = dispatch => ({
  createGoal: accountUid => dispatch(createGoal(accountUid)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGoal);