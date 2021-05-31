import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (

      <div
        className="navbar navbar-default navbar-static-top"
        role="navigation"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>
            <a href="index.html" className="navbar-brand">
              Neuron
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     

  );
};

export default Header;
