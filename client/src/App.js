import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import { getTransactions, getAccountDetails } from './redux/actions';
import { TransactionItem } from './components/TransactionItem';
import { Button } from './components/Button';
import { DateRangePicker } from './components/DateRangePicker';
import './App.css';
import { selectAllTransactions, selectAllOutgoingTransactions, selectAllInboundTransactions, selectAccountUid } from './redux/selectors';
import { formatDob } from './util/text-formatter'


class App extends Component {
  state = {
    fromDate: '', 
    toDate: '',
  }

  componentDidMount() {
    this.props.getAccountDetails()
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { getTransactions } = this.props
    const { fromDate, toDate } = this.state
    console.log('fromDate', fromDate)
    console.log('toDate', toDate)
    const dateRange = { 
      from: moment(fromDate).format('YYYY-MM-DD'), 
      to: moment(toDate).format('YYYY-MM-DD'),
    }
    getTransactions(dateRange)
  };

  displayRoundUp = transactions => {
    let roundUpAmount = 0
    transactions.map(transaction => roundUpAmount = roundUpAmount + Math.ceil(Math.abs(transaction.amount)) + transaction.amount)
    return `£${roundUpAmount.toFixed(2)}`
  }

  onCangeFromDate = e => {
    const formattedDob = formatDob(e.target.value)
    this.setState({ fromDate: formattedDob})
  }
  
  onCangeToDate = e => {
    const formattedDob = formatDob(e.target.value)
    this.setState({ toDate: formattedDob })
  }

render() {
    return <header className="App-header"/>
  }
}

const mapStateToProps = (state) => ({
  transactions: selectAllTransactions(state),
  outboundTransactions: selectAllOutgoingTransactions(state), 
  inboundTransactions: selectAllInboundTransactions(state), 
})

const mapDispatchToProps = (dispatch) => ({
  getTransactions: dateRange => dispatch(getTransactions(dateRange)),
  getAccountDetails: () => dispatch(getAccountDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);