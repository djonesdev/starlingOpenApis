import React from 'react'
import './styles/DateRangePicker.css'

export const DateRangePicker = (props) => {
  return (
    <div className="container">
      <div>
        <label className="label">From</label>
        <input 
          className="date-input" 
          placeholder="From Date (DD-MM-YYYY)" 
          onChange={props.onChangeFromDate} 
          value={props.fromDateValue} 
          label="From"
        />
      </div>
      <div className="input">
        <label className="label">To</label>
        <input 
          className="date-input" 
          placeholder="To Date (DD-MM-YYYY)" 
          onChange={props.onChangeToDate} 
          value={props.toDateValue} 
        />
      </div>
    </div>
  )
}
