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
    return (
      // <div className="App">
        <header className="App-header"/>
      //   <h3>Would you like to view your transactions?</h3>
      //   <DateRangePicker 
      //     onChangeFromDate={this.onCangeFromDate} 
      //     onChangeToDate={this.onCangeToDate} 
      //     fromDateValue={this.state.fromDate}
      //     toDateValue={this.state.toDate}
      //   />
      //   <Button onClick={this.handleSubmit} label="GET TRANSACTIONS"/>
      //   {this.props.transactions && <div className="table-container">
      //     <TransactionItem transactions={this.props.transactions} />
      //   </div>}
      //   <h3>Would you like to put your round-up into your savings goal?</h3>
      //   <h3>Your total round up for this month</h3>
      //   <p>{this.displayRoundUp(this.props.outboundTransactions)}</p>
      // </div>
    );
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