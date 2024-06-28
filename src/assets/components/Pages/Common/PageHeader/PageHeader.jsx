import React from 'react'
import './PageHeader.css'
import { Link } from 'react-router-dom'
function PageHeader({PageName}) {
  return (
    <div className="page-header">
        <strong>{<Link className='page-header-link' to="/home">{'Home '}</Link>} <i class="fas fa-angle-right"></i>{` ${PageName}`}</strong>
    </div>
  )
}

export default PageHeader
