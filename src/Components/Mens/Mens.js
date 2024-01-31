import React,{useState} from 'react'
import "./Mens.css"
import Newcollect from '../Assest/Newcollect'
import { useDispatch ,useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
import { act } from '../../Action/Action'
const Mens = () => {
  const [data,setdata]= useState(Newcollect)
  const getdata = useSelector((state)=>state.Reducer.cart)
  console.log(getdata)
  const dispatch = useDispatch()
  function Send(a){
    dispatch(act(a))
  }
  return (
    <div className='men'>
      <div className='mens-css'>
      <div className='mens-right'>
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqL-LVM1rs0KP6yI-dhw-vwA0jkP0uhsjxA&usqp=CAU" alt="" />
      </div>
      <div className="mens-left">
        <h1>FLAT 50% OFF</h1>
        <h2><span>12</span> HOURS <span>20</span> Mins</h2>
        <a href="https://www.selectedhomme.in/"><button>Explore now</button></a>
        
      </div>
      <div className='mens-middle'>
      {
            data.map(function (val) {
              return(
                <div className="New" key={val.id}>
                    
                  <div className="imgss">
                    <img src={val.proimg} alt="" />
                  </div>
                  <div className="Newdetails">
                    <h3> Name:{val.proname}</h3>
                  <h4>Quantity:{val.proquantity}</h4>
                    <h3>price:{val.proprice}</h3>
                  </div>
                  <div className="probutton">
                    <button onClick={()=>Send(val)} >Add To Cart</button>
                  </div>
                </div>
              )
            })
          }
      </div>
      <div className='foot-last'>
        <Footer />
      </div>
      </div>
    </div>
  )
}

export default Mens