import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    response: [],
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    // const response = await fetch('https://api-sandbox.starlingbank.com/api/v1/transactions');
    // const body = await response.json();
    // console.log(body)
    // if (response.status !== 200) throw Error(body.message);
    // return body;
    axios.get('https://api-sandbox.starlingbank.com/api/v1/transactions',{
          method: 'GET', 
          timeout: 4000, 
          headers: { Authorization: "Bearer Y5G2lM4uSbJefiNgFllnPTCdCWxvVPUn7VC0axYWpL3cbLYy1DZ9BN8fb9xbeUtM", "accessToken": 'Y5G2lM4uSbJefiNgFllnPTCdCWxvVPUn7VC0axYWpL3cbLYy1DZ9BN8fb9xbeUtM' }
      }).then(response => this.setState({response: response.data._embedded.transactions}))
  };
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
  console.log(this.state.response)
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
export default App;