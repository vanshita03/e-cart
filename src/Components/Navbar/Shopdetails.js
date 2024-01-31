import React, {useEffect, useState} from 'react'
import "./Shopdetails.css"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { remove,dec,act } from "../../Action/Action";
const Shopdetails = () => {
    

    const [data,setdata]= useState([])
    console.log(data)
    const {id} = useParams()
 console.log(id)
 const dispatch = useDispatch();
  function del(e) {
    dispatch(remove(e));
  }
function desc(b){
  dispatch(dec(b))
}
function send(a){
  dispatch(act(a))
}
function compare() {
    const comparedata = getdata.filter((val) => {return val.id == id})
    setdata(comparedata)
}
useEffect(()=> {
    compare()
},[id])
    const getdata = useSelector((state) => state.Reducer.cart)
    console.log(getdata)
  return (
    <div className='shop-cart'>
{
            data.map(function (val) {
              return(
                <div className="shop-buy" key={val.id}>
                    
                  <div className="shop-imgss">
                    <img src={val.proimg} alt="" />
                  </div>
                  <div className="shop-details">
                    <h3> Name:{val.proname}</h3>
                    <div className="incr-decr">
                    <button  onClick={val.proquantity <=1 ? () => del(val.id) : ()=> desc(val)}>-</button> <h4>Quantity:{val.proquantity}</h4>
                   <button  onClick={()=>send(val)}>+</button>
                    </div>
                 
                    <h3>price:{val.proprice}</h3>
                    <h5>Select Size:-</h5>
                    <div className="shop-size">
                    <div className='size'>S</div>
                    <div className='size'>M</div>
                    <div className='size'>L</div>
                    <div className='size'>XL</div>
                    <div className='size'>XXL</div>
                  </div>
                  <button> Buy Now </button>
                  </div>
                  
               
                </div>
              )
            })
          }
      
    </div>
  )
}

export default Shopdetails
