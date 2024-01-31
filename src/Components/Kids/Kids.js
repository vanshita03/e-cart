import React, { useState } from "react";
import "./Kids.css";
import Kidsdata from "../Assest/Kidsdata";
import Footer from "../Footer/Footer";
const Kids = () => {
  const [data, setdata] = useState(Kidsdata);
  // console.log(data)

  return (
    <div className="kids">
      <div className="kids-css">
        <div className="kids-right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmST-MJvcTVhi3QmJlwhgCggOjiim7XIZgw&usqp=CAU"
            alt=""
          />
        </div>
        <div className="Kids-left">
          <h1>FLAT 50% OFF</h1>
          <h2>
            <span>12</span> HOURS <span>20</span> Mins
          </h2>
          <a href="https://www.pantaloons.com/shop/kids">
            <button>Explore now</button>
          </a>
        </div>
      </div>
      <div className="kids-shop">
        {data.map(function (val) {
          return (
            <div className="kidsfun" key={val.id}>
              <div className="kidsimg">
                <img src={val.kimg} alt="" />
              </div>
              <div className="kids-details">
                <h3>{val.kname}</h3>
                <h3>{val.kprice}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="kids-foot">
        <Footer />
      </div>
    </div>
  );
};

export default Kids;
