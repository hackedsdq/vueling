import React, { useState, useContext } from "react";
import { ReactComponent as CompanyLogo } from "../../assets/svg/vueling.svg";
import { ReactComponent as DarkModeButton } from "../../assets/svg/dark_mode.svg";
import { ReactComponent as MenuBar } from "../../assets/svg/menu.svg";

import "./style.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";

const mountDrawerStyle = {
  transform: "translateX(0%)",
  transition: "ease 2s",
};

const unmountDrawerStyle = {
  transform: "translateX(-100%)",
  transition: "ease 1s",
};

const mountMenuBarButtonStyle = {
  transform: "rotate(180deg)",
};

const unmountMenuBarButtonStyle = {
  transform: "rotate(0deg)",
};

export default function Navbar() {
  let [drawerState, setDrawerState] = useState(false);

  return (
    <div className="nav-bar">
      <div
        onClick={() => setDrawerState(!drawerState)}
        className="nav-bar__menu-bar-button"
      >
        <MenuBar />
      </div>
      <Link to="/" className="nav-bar__logo">
        <CompanyLogo />
      </Link>

      <div
        className="nav-bar__list-container"
        style={
          drawerState && window.matchMedia("(max-width: 540px)").matches
            ? mountDrawerStyle
            : !drawerState && window.matchMedia("(max-width: 540px)").matches
            ? unmountDrawerStyle
            : {}
        }
      >
        <ul className="nav-bar__list-items">
          <li className="nav-bar__list-item">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <p>Home</p>
            </Link>
          </li>
          <li className="nav-bar__list-item">
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p>Products</p>
            </Link>
          </li>
          <li className="nav-bar__list-item">
            <Link
              to="/contact-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p>ContactUs</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
