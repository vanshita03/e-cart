import React, { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import "./Loginsignup.css"
const Loginsignup = () => {
const[contact,setcontact] = useState({names:"",email:""})
const handlechange =(e)=>{
  const name = e.target.name;
  const value = e.target.value;
  setcontact({...contact,[name]: value})
}
const handlesumbit = (e)=>{
  e.preventDefault()
  console.log(contact)
}

  return (
    <div className='login-sinup'>
      
      <div className="loginsignup-container">
      <div className='form'>
        <form method='post' onSubmit={handlesumbit}>
        <h1>Sign up</h1>
        <div className="loginsignup-field">
          <input type="text" name='names' onChange={handlechange} value={contact.names} placeholder='Your Name' id='user'/>
          <input type="text " name='email' onChange={handlechange} value={contact.email}  placeholder='Email Address' id='email' />
          <i class="fa-solid fa-lock"></i>
             <span onclick="test()">
          <i class="fa-solid fa-eye" id="show"></i>
          <i class="fa-solid fa-eye-slash" id="unshow"></i>
        </span>
          <input type="password" placeholder='password' />
          {/* <input type="button" value="Submit" id="login" /> */}
        </div>
        <button id='login'>Continue</button>
        <p className='loginsignup-login'>Alredy have an account?<span>Login here</span></p>
        <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>by continuning i agree to the terms of use  & privacy policy</p>
        
      </div>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Loginsignup
