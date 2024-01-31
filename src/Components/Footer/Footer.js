import React from 'react'
import "./Footer.css"
import logo from '../Assest/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
      <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-icons">
        <div className="ins">
        <i class="fa-brands fa-instagram"></i>
        </div>
        <div className="pinrest">
        <i class="fa-brands fa-pinterest"></i>
        </div>
        <div className="whatsapp">
        <i class="fa-brands fa-whatsapp"></i>
        </div>
      
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
