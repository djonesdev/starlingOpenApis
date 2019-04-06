import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import CreateGoalPage from './pages/CreateGoal/CreateGoal.page';
import GoalTransferPage from './pages/GoalTransfer/GoalTransfer.page';
import TransactionsPage from './pages/Transactions/Transactions.page';

const routing = (
    <Router>
        <Provider store={configureStore()}>
            <App />
            <Route exact path="/create-goal" component={CreateGoalPage} />
            <Route exact path="/transfer-to-goal" component={GoalTransferPage} />
            <Route exact path="/" component={TransactionsPage} />
        </Provider>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.register();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
