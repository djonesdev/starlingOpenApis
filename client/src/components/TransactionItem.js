import React from 'react'
import moment from 'moment'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './styles/TransactionItem.styles.css'

export const TransactionItem = (props) => {
  
    return (
      <Table id="transaction-table">
        <TableHead align="center">
          <TableRow>
            <TableCell>Narrative</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center"> Balance</TableCell>
            <TableCell align="center">Amount Paid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.transactions.map(transaction => (
            <TableRow key={transaction.id}>
              <TableCell component="th" scope="row">
                {transaction.narrative}
              </TableCell>
              <TableCell align="center">{moment(transaction.created).format('DD-MM-YYYY')}</TableCell>
              <TableCell align="center">{transaction.balance}</TableCell>
              <TableCell align="center">{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
