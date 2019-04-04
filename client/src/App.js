import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getTransactions } from './redux/actions';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    response: [],
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    this.props.getTransactions()
    console.log('get Transactions', this.props.getTransactions())
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
    console.log()
    const body = await response.text();
    this.setState({ responseToPost: body });
  };
render() {
  console.log('transactions', this.props.transactions)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>{this.state.response.map(transaction => <p key={transaction.id}>Amount: {transaction.amount}</p>)}</p>
        <p>{JSON.stringify(this.props.transactions)}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions
})

const mapDispatchToProps = (dispatch) => ({
  getTransactions: () => dispatch(getTransactions())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);