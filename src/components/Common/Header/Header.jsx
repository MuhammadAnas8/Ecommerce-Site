import React from 'react'
import './Header.css'

function Header({heading,subHeading}) {
  return (
    <div className='header'>
      <h3 className='heading'>{heading}</h3>
      <h2 className='sub-heading'>{subHeading}</h2>
    </div>
  )
}

export default Header
