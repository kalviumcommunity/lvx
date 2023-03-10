import React from "react";
import "./navbar.css";
import Logo from "./LVX.svg";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to='/'>
        <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className="searchbar">
          <input
            type="text"
            className="input"
            placeholder="search for any product"
          />
          <div className="icon">
            <FiSearch size={30} />
          </div>
        </div>
        <div className="login">LOGIN</div>
        <Link to='/sell'>
        <div className="sell" >SELL</div>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
