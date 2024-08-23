import React from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

 function Login({ show, handleClose }){
  if (!show) return null;

  return (
    <div className="modal-container" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h5 >Login</h5>
          <button className="btn close-button" onClick={handleClose}>&times;</button>
        </div>
          <form>
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" required />
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            <button type="submit" className="btn btn-login">Login</button>
              <a href="#">Forgot password?</a>
              <p>Don't have an account?
              <NavLink 
            to="/account">Sign Up</NavLink></p>
            
          </form>
        </div>
      </div>
  );
};

export default Login;
