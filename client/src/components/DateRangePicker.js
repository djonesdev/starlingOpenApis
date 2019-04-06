import React from 'react'
import './styles/DateRangePicker.css'

export const DateRangePicker = (props) => {
  return (
    <div className="container">
        <input 
            className="date-input" 
            placeholder="From Date (YYYY-MM-DD)" 
            onChange={props.onChangeFromDate} 
            value={props.fromDateValue} 
        />
        <input 
            className="date-input" 
            placeholder="To Date (YYYY-MM-DD)" 
            onChange={props.onChangeToDate} 
            value={props.toDateValue} 
        />
    </div>
  )
}
