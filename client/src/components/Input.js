import React from 'react'
import './styles/Input.css'

export const  Input = (props) => {
  return <input onChange={props.onChange} className="custom-input"/>
}
