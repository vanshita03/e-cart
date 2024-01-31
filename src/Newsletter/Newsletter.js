import React from 'react'
import "./Newsletter.css"
const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on your Email</h1>
      <h3>Subscribe to our newsletter and stay update</h3>
      <div>
        <input type="email" placeholder='your email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
