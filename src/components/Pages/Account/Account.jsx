import React, { useState } from 'react'
import './Account.css'
import PageHeader from '../Common/PageHeader/PageHeader'
import { Link } from 'react-router-dom'

function Account() {
  const [input,setInput] = useState({
    name:'',
    email:'',
    password:''
  })
  const [login,setLogin]=useState(!false)
  function valueChange(e){
    const {name, value} = e.target
    setInput(prev => ({...prev, [name]: value}))
  }

  return (
    <div className='container'>
      <PageHeader PageName="Account" />
      <div className="account-container">
        <div className="account-left">
            <div className="account-left-content">
            <h1>Discover Your Next Favorite Thing </h1>
            <h2>Unbox Happiness Daily</h2>     
            <h3>Join now forExclusive Deals and Endless Surprises.</h3>

            </div>
            <div className="account-left-image">
                <img src="https://freepngimg.com/thumb/categories/1342.png" alt="" />
            </div>
            <Link to={"/"}> <button className='btn'>Explore Your Favorite Products</button></Link>
        </div>
        <div className="account-right">
          <form action="">
            <h1>{login?"Login":"Sign Up"}</h1>
            <div className="account-right-inputs">
              {!login && <label htmlFor="name">Name</label>}
              {!login && <input value={input.name} onChange={valueChange} type="text" name="name" placeholder='enter name' required />}
              <label htmlFor="email">Email</label>
              <input value={input.email} onChange={valueChange} type="email" name="email" placeholder='enter email' required />
              <label htmlFor="password">Password</label>
              <input value={input.password} onChange={valueChange} type="password" name="password" minLength={8} placeholder='enter password' required />
            </div>
            <button className="btn">{login?"Login":"Sign Up"}</button>
            <p>{login?"Don't have an account?":"Already have an account?"} <a onClick={login?()=>setLogin(false):()=>setLogin(true)} > {login?"Sign Up":"Login"  }  </a></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Account
