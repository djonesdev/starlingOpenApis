import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { getTransactions, getAccountDetails } from '../../redux/actions'
import { selectAllTransactions, selectAllOutgoingTransactions, selectAllInboundTransactions } from '../../redux/selectors'


import { Transactions } from './transactions'
import { formatDob } from '../../util/text-formatter'

class TransactionsPage extends Component {
    state = {
        fromDate: '', 
        toDate: '',
    }

    onCangeFromDate = e => {
        const formattedDob = formatDob(e.target.value)
        this.setState({ fromDate: formattedDob})
    }
      
    onCangeToDate = e => {
        const formattedDob = formatDob(e.target.value)
        this.setState({ toDate: formattedDob })
    }

    displayRoundUp = transactions => {
        let roundUpAmount = 0
        transactions.map(transaction => roundUpAmount = roundUpAmount + Math.ceil(Math.abs(transaction.amount)) + transaction.amount)
        return `£${roundUpAmount.toFixed(2)}`
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { getTransactions } = this.props
        const { fromDate, toDate } = this.state
        const dateRange = { 
          from: moment(fromDate).format('YYYY-MM-DD'), 
          to: moment(toDate).format('YYYY-MM-DD'),
        }
        getTransactions(dateRange)
    };

  render() {
    const { toDate, fromDate } = this.state
    const { transactions, outboundTransactions } = this.props
    const roundUpAmount = this.displayRoundUp(outboundTransactions)
    return (
        <Transactions 
            onChangeToDate={this.onCangeToDate}
            onChangeFromDate={this.onCangeFromDate}
            fromDateValue={fromDate}
            toDateValue={toDate}
            transactions={transactions}
            handleSubmit={this.handleSubmit}
            displayRoundUp={roundUpAmount}
        />
    )
  }
}

const mapStateToProps = (state) => ({
    transactions: selectAllTransactions(state),
    outboundTransactions: selectAllOutgoingTransactions(state), 
    inboundTransactions: selectAllInboundTransactions(state), 
  })
  
  const mapDispatchToProps = (dispatch) => ({
    getTransactions: (dateRange) => dispatch(getTransactions(dateRange)),
    getAccountDetails: () => dispatch(getAccountDetails())
  })

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage);

