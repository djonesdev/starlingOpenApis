import React from 'react'
import './styles/Button.css'

export const Button = (props) => {
  return (
    <div>
      <button 
        className="custom-button" 
        disabled={props.disabled} 
        onClick={props.onClick}
      > 
        {props.label}
      </button>
    </div>
  )
}
