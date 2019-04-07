import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { getTransactions, getAccountDetails, setTransferAmount } from './Transactions.redux'
import { selectAllTransactions, selectAllOutgoingTransactions, selectAllInboundTransactions, selectNonRoundUpTransactions } from '../../redux/selectors'


import { Transactions } from './Transactions'

class TransactionsPage extends Component {
    state = {
        roundUp: 0
    }
 
    componentDidUpdate = (prevProps) => {
        if(this.props.transactions !== prevProps.transactions) {
            this.displayRoundUp(this.props.cleanTransactions)
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
        const { initTransfer, transactions } = this.props
        const { roundUp } = this.state
        const dirtyTransactions = []
        transactions.map(transaction => dirtyTransactions.push(transaction.id))
        const payload = {
            amount: roundUp,
            dirtyTransactions: dirtyTransactions
        }
        initTransfer(payload)
    }

  render() {
    const { transactions } = this.props
    const { roundUp } = this.state
    const hasTransactions = transactions.length >= 1
    const isGoalButtonDisabled = roundUp === 0 
    return (
        <Transactions 
            transactions={transactions}
            handleSubmit={this.handleSubmit}
            displayRoundUp={roundUp}
            navigateToGoal={this.onClickNavigateToGoal}
            hasTransactions={hasTransactions}
            isGoalButtonDisabled={isGoalButtonDisabled}
        />
    )
  }
}

const mapStateToProps = state => {
    const hasDirtyTransactions = !!state.goals.dirtyTransactions > 0
    return {
        cleanTransactions: hasDirtyTransactions && selectNonRoundUpTransactions(state), 
        transactions: selectAllTransactions(state),
        outboundTransactions: selectAllOutgoingTransactions(state), 
        inboundTransactions: selectAllInboundTransactions(state), 
    }
}
  
  const mapDispatchToProps = dispatch => ({
    getTransactions: dateRange => dispatch(getTransactions(dateRange)),
    getAccountDetails: () => dispatch(getAccountDetails()),
    initTransfer: payload => dispatch(setTransferAmount(payload))
  })

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage);

