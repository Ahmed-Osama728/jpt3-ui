import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assests/logo.svg';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => {
    return (
      <>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#wgpt">What is GPT?</a>
        </p>
        <p>
          <a href="#possibility">Open AI</a>
        </p>
        <p>
          <a href="#features">Case Studies</a>
        </p>
        <p>
          <a href="#blog">Library</a>
        </p>
      </>
    );
  };

  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__links-container">
          <Menu className="navbar__links-container" />
        </div>
        <div className="navbar__links-sign">
          <p>
            <a href="#signIn">Sign In</a>
          </p>
          <button type="button">Sign Up</button>
        </div>
        <div className="navabr__links-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <div className="navbar__links-menu_container scale-up-center">
              <div className="navbar__links-menu_container-links">
                <Menu className="navbar__links-menu_container-links" />
                <div className="navbar__links-menu_container-sign">
                  <p>
                    <a href="#signIn">Sign In</a>
                  </p>
                  <button type="button">Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
