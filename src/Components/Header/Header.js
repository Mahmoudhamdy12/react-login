import React from 'react'
import './Header.css'


export default function Header(props) {
  return (
    <div className='header'>
        <h1>Coders Academy</h1>
        <p>Hello {props.isChanged && props.name} </p>
    </div>
  )
}
