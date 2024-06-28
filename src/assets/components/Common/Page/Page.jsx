import React from 'react'
import './Page.css'
import Header from '../Header/Header'

function Page({ heading, subHeading }) {
  return (
    <div>
      <Header heading={heading} subHeading={subHeading} />
    </div>
  )
}

export default Page
