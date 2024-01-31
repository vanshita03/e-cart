import React, { useState, useEffect } from "react";

import "./Navbar.css";
import Badge from "@mui/material/Badge";
import logo from "../Assest/logo.png";
import { Link, NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import Allproduct from "../Assest/Allproduct";
import { useDispatch, useSelector } from "react-redux";
import { remove, dec, act } from "../../Action/Action";
import { styled } from "@mui/material/styles";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";

const Navbar = ({ search, setsearch, change, check, theme }) => {
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  const label = { inputProps: { "aria-label": "Color switch demo" } };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  function del(e) {
    dispatch(remove(e));
  }
  function desc(b) {
    dispatch(dec(b))
  }
  function send(a) {
    dispatch(act(a))
  }
  const [price, setprice] = useState(0);

  function Total() {
    let price = 0;
    getdata.map(function (val) {
      price = val.proprice + price;
      setprice(price);
    });
  }
  useEffect(() => {
    Total();
  }, [Total]);
  const getdata = useSelector((state) => state.Reducer.cart);
  console.log(getdata);

  return (
    <div className={theme.palette.mode === "dark" ? "navbar1" : "navbar"}>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <label for="same" className="label">
        <i className="fa-solid fa-bars"></i>
      </label>
      <input className="checkbox" type="checkbox" id="same" />

      <ul className="nav-menu">
        <li className="nav-menu1">
          <NavLink to="/Hero">shop</NavLink>
        </li>
        <li className="nav-menu1">
          <NavLink to="/Mens">Men</NavLink>
        </li>
        <li className="nav-menu1">
          <NavLink to="/Allproduct"> Women</NavLink>
        </li>
        <li className="nav-menu1">
          <Link to="/Kids">kids</Link>
        </li>
      </ul>
      <div className="nav-info">
        <div className="seb">
          <div className="search">
            <input
              type="search"
              placeholder=""
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="switch">
            <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ m: 1 }}
                  defaultChecked
                  checked={check}
                  onChange={change}
                />
              }
            />
          </div>
        </div>
        <div className="nav-login-cart">
          <Link to={"/Loginn"}>
            <button className="btnlogin">Login</button>
          </Link>
          <div className="menu-shop">
            <Badge badgeContent={getdata.length} color="primary">
              <i
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="fa-solid fa-cart-shopping"
              ></i>
            </Badge>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div className="menu-li">
                {getdata.length ? (
                  <div className="car1">
                    {getdata.map(function (val) {
                      return (
                        <div className="d" key={val.id}>
                          <div className="car-img">
                            <Link to={`/Shopdetails/${val.id}`}>
                              <img src={val.proimg} alt="" />
                            </Link>
                          </div>
                          <div className="car-details">
                            <h3> Name:{val.proname}</h3>
                            <div className="box">
                              <div className="box1"> <span onClick={val.proquantity <= 1 ? () => del(val.id) : () => desc(val)}>-</span></div>
                              <div className="box2"><span>{val.proquantity}</span></div>
                              <div className="box3"><span onClick={() => send(val)}>+</span></div>
                            </div>
                            <h3>price:{val.proprice}</h3>
                          </div>
                          <div>
                            <i
                              onClick={() => del(val.id)}
                              className="fa-solid fa-trash"
                            ></i>
                          </div>
                        </div>
                      );
                    })}
                    <div className="total">
                      <h3>Total:{price}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="car2">
                    <div className="emptyimg">
                      <i class="fa-solid fa-xmark" onClick={handleClose}></i>
                      <img src="data:image/jpeg;base64,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" />
                      <h1>card is empty</h1>
                    </div>
                  </div>
                )}
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
