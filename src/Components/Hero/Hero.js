import React, { useState } from "react";
import "./Hero.css";
import Items from "../Items/Items";
import Popular from "../Assest/Popular";
import Offers from "../Offers/Offers";
import Newcollection from "../NewCollections/Newcollection";
import Footer from "../Footer/Footer";
const Hero = ({ search ,check, change, theme }) => {
  const [data, setdata] = useState(Popular);
  console.log(data);

  let filterdata = data.filter((val) =>
    val.pname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={theme.palette.mode === "dark" ? "itpop" : "itpop1"}>
      <div className="hero">
        <div className="hero-left">
          <h3>New ARRIVALS ONLY</h3>
          <h5>New Collections for everyone</h5>
          {/* <p>New Collection for everyone</p> */}
        </div>
        <div className="hero-right">  
        <a href="https://www.nicobar.com/collections/men-collections"> <button>Latest Collection</button></a>
         
        </div>
        <div className="hero-right-img">
          <img className="right-img"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>



      <div className="he">
        <h1>Popular In Womens</h1>
        <div className="head">
          {
          filterdata.map(function (val) {
            return (
              <div className="pop" key={val.id}>
                <div className="img">
                  <img src={val.img} alt="" />
                </div>
                <div className="details">
                  <h3>{val.pname}</h3>
                  <h3>{val.price}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mens">
        <Newcollection search={search} />
      </div>
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive </h1>
          <div className="excluse">
            <h3>Offers For You</h3>
          </div>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check Now</button>
        </div>
        <div className="offers-right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhSjeah15uxXDpWqR4LXox35zAa9lGtWWGw&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
