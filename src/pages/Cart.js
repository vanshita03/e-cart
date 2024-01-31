import React, { useState } from "react";
import Allproduct from "../Components/Assest/Allproduct";
import { act } from "../Action/Action";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const obj = {
    loop: true,
    nav: true,
    autoplay: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  function Send(a) {
    dispatch(act(a));
  }
  const dispatch = useDispatch();
  const [product, setproduct] = useState(Allproduct);
  // const [data, setdata] = useState(Allproduct);
  // console.log(data)
  const getdata = useSelector((state) => state.Reducer.cart);
  console.log(getdata);

  return (
    <div>
      <OwlCarousel className="owl-theme" {...obj}>
        <div className="item">
          <img
            src="https://mediamodifier.com/blog/wp-content/uploads/2021/07/729a9fbdbf53a8eab3bb6ddf29610407_mm-showroom-image-1024x731.jpg"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://motionarray.imgix.net/preview-1847370-e7ckYzdbGvrB4i6f-large.jpg?w=660&q=60&fit=max&auto=format"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/62020931c5502_json_image_1644300593.webp"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://img.freepik.com/free-psd/horizontal-banner-template-fashion-shopping-store_23-2148786821.jpg"
            alt=""
          />
        </div>
      </OwlCarousel>
      <div className="grid">
        {product.map(function (val) {
          return (
            <div className="card" key={val.id}>
              <div className="img">
                <img src={val.proimg} alt="" />
              </div>
              <div className="details">
                <h3>{val.proname}</h3>

                <h3>price:{val.proprice}</h3>
              </div>
              <div className="procedd-button">
                <button onClick={() => Send(val)}>Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
