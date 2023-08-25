import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Typed from "react-typed";
import { logo } from "../assets";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const isBlogsPage = location.pathname.startsWith("/blogs");
  const typedTexts = [
    "Spark Minds",
    "Explore Ideas",
    "Unleash Cognizance",
    "Nurture Genius",
    "Awaken Insight",
    "Brainwave Ballet"
  ];

  return (
    <nav className={`navbar ${isBlogsPage ? "hide-header" : ""}`}>
      <div className="navbar-container">
        <NavLink
          to="/"
          className="logo"
          activeClassName="active"
          onClick={() => {
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="logo-image" />
          <p className="logo-text">
            <span className="workrework-text">workREwork</span>
            <br />
            <Typed strings={typedTexts} typeSpeed={80} backSpeed={40} loop />
          </p>
        </NavLink>
        {!isBlogsPage && (
          <NavLink
            to="/blogs"
            activeClassName="active"
            className="nav-link"
          >
            Blogs
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
