import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions, getAccountDetails } from './redux/actions';
import { TransactionItem } from './components/TransactionItem'
import { Card } from './components/Card'
import './App.css';
import { selectAllTransactions, selectAllOutgoingTransactions, selectAllInboundTransactions, selectAccountUid } from './redux/selectors';


class App extends Component {
  state = {
    response: [],
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.props.getAccountDetails()
  }


  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/sandbox/transactions', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  displayRoundUp = transactionAmounts => {
    let roundUpAmount = 0
    transactionAmounts.map(transaction => roundUpAmount = roundUpAmount + Math.ceil(Math.abs(transaction.amount)) + transaction.amount)
    return roundUpAmount
  }

render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>{this.props.inboundTransactions.map(transaction => <p>{transaction.amount}</p>)}</p>
        <TransactionItem/>
        </header>
        <h3>Your total round up for this month</h3>
        <p>{this.displayRoundUp(this.props.outboundTransactions)}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: selectAccountUid(state),
  transactions: selectAllTransactions(state),
  outboundTransactions: selectAllOutgoingTransactions(state), 
  inboundTransactions: selectAllInboundTransactions(state), 
})

const mapDispatchToProps = (dispatch) => ({
  getTransactions: () => dispatch(getTransactions()),
  getAccountDetails: () => dispatch(getAccountDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);