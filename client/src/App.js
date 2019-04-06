import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccountDetails } from './pages/Transactions/transactions.redux';
import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.getAccountDetails()
  }

  render() {
    return <header className="App-header"/>
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAccountDetails: () => dispatch(getAccountDetails())
})

export default connect(null, mapDispatchToProps)(App);