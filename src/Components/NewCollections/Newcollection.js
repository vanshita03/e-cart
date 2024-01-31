import React, { useState } from "react";
import Newcollect from "../Assest/Newcollect";
import "./Newcollection.css";
import { useDispatch, useSelector } from "react-redux";
import { act } from "../../Action/Action";
import { useEffect } from "react";
const Newcollection = ({ search }) => {
  const [data, setdata] = useState(Newcollect);
  const getdata = useSelector((state) => state.Reducer.cart);
  console.log(getdata);
  const dispatch = useDispatch();
  const [nofile, setfile] = useState(3);
  const slice = data.slice(0, nofile);
  function Send(a) {
    dispatch(act(a));
  }
  // function unvisible() {
  //   setfile(!nofile + 3);
  // }
  // function visible() {
  //   setfile(nofile + 6);
  //   console.log(slice);
  // }

  function visible() {
    if (nofile <= 3) {
      setfile(nofile + 6);
    } else {
      setfile(!nofile + 3);
    }
  }

  let filterdata = slice.filter((val) =>
    val.proname.toLowerCase().includes(search)
  );

  return (
    <div className="mens">
      <h1>popular in mens</h1>
      {nofile ? (
        <div className="new">
          {filterdata.map(function (val) {
            return (
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
                  <button onClick={() => Send(val)}>Add To Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="more">
        <button onClick={visible}>show</button>
      </div>
    </div>
  );
};

export default Newcollection;
