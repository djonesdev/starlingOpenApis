import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { getTransactions, getAccountDetails, setTransferAmount } from './transactions.redux'
import { selectAllTransactions, selectAllOutgoingTransactions, selectAllInboundTransactions } from '../../redux/selectors'


import { Transactions } from './transactions'

class TransactionsPage extends Component {
    state = {
        roundUp: 0
    }
 
    componentDidUpdate = (prevProps) => {
        if(this.props.transactions !== prevProps.transactions) {
            this.displayRoundUp(this.props.outboundTransactions)
        }
    }
    
    displayRoundUp = transactions => {
        let roundUpAmount = 0
        transactions.map(transaction => roundUpAmount = roundUpAmount + Math.ceil(Math.abs(transaction.amount)) + transaction.amount)
        this.setState({ roundUp: roundUpAmount.toFixed(2)})
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { getTransactions } = this.props
        const currentDay = moment().format('YYYY-MM-DD');
        const oneWeekAgo = moment().subtract(7,'d').format('YYYY-MM-DD');
        const dateRange = { 
            from: oneWeekAgo, 
            to: currentDay
        }
        getTransactions(dateRange)
    };

    onClickNavigateToGoal = e => {
        const { setTransferAmount } = this.props
        const { roundUp } = this.state
        setTransferAmount(roundUp)
    }

  render() {
    const { transactions } = this.props
    const { roundUp } = this.state
    return (
        <Transactions 
            transactions={transactions}
            handleSubmit={this.handleSubmit}
            displayRoundUp={roundUp}
            navigateToGoal={this.onClickNavigateToGoal}
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
    getAccountDetails: () => dispatch(getAccountDetails()),
    setTransferAmount: roundUp => dispatch(setTransferAmount(roundUp))
  })

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage);

