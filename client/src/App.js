import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import { getTransactions, getAccountDetails } from './redux/actions';
import { TransactionItem } from './components/TransactionItem'
import './App.css';
import { selectAllTransactions, selectAllOutgoingTransactions, selectAllInboundTransactions, selectAccountUid } from './redux/selectors';


class App extends Component {

  componentDidMount() {
    const dateRange = { from: moment("2019-01-05").format("YYYY-MM-DD"), to: moment("2019-01-05").format("YYYY-MM-DD") }
    this.props.getTransactions(dateRange)
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
  console.log("transactions", this.props.transactions)

//   amount: -4.77
// balance: 2235.15
// created: "2019-04-04T14:20:17.970Z"
// currency: "GBP"
// direction: "OUTBOUND"
// id: "4d1c613b-0825-57d9-0448-c2b5631ee2d4"
// narrative: "External Payment"
// source: "FASTER_PAYMENTS_OUT"
    return (
      <div className="App">
        <header className="App-header">
        {/* {this.props.inboundTransactions.map(transaction => <p>{transaction.amount}</p>)} */}
        {this.props.transactions.map(transaction => <TransactionItem amount={transaction.amount} balance={transaction.balance} />)}
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
  getTransactions: (dateRange) => dispatch(getTransactions(dateRange)),
  getAccountDetails: () => dispatch(getAccountDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);