import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className="subscribe">
        <h4>Subscribe for latest offfer</h4>
        <input type="email" placeholder='Enter your email' />
        <button>Subscribe</button>
        <p>See our <a href="#"> terms and conditions</a></p>
      </div>
      <div className="store">
        <strong>Store</strong>
        <ul>
            <li>Home</li>
            <li>Headphones</li>
            <li>Watches</li>
            <li>Laptops</li>
            <li>Phones</li>
        </ul>
      </div>
      <div className="contact">
      <strong>Contact Us</strong>
        <p>+9231234567890</p>
        <p>muhammadanas.tech@gmail.com</p>
       <div className='social-icons'>
        <i className="fab fa-facebook fa-2x"></i>
        <i className="fab fa-twitter fa-2x"></i>
        <i className="fab fa-instagram fa-2x"></i>
     </div>
      </div>
      <div className="message-container">
        <strong>Send Your feedback</strong>
        <input type="email" name="email" id="email" placeholder='Enter your email' />
        <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message'></textarea>
        <button className="btn">Send <i className="fas fa-paper-plane"></i></button>
      </div>
    </div>
  )
}

export default Footer
