import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({currentUser, logout, openModal}) => {

  const doctorIsIn = () => (
    <div className="header-container">
      <Link to="/" className="header-link">
        <i className="fab fa-product-hunt"></i>
      </Link>
      <div className="header-not-link">
        <div className="header-search-bar">
          <i className="fas fa-search"></i>
          <p>Discover your next favorite thing ...</p>
         </div>
        <div className="header-places-not-here">Ask Ship Makers Jobs Events ... </div>
        <div className="header-div-session-access">
          <div className="header-div-logout">
            <h1>{currentUser.username}</h1>
            <button className="button" onClick={logout}>logout</button>
          </div>
        </div>
      </div>
    </div>
  );

  const doctorIsOut = () => (
    <div className="header-container">

      <Link to="/" className="header-link">
        <i className="fab fa-product-hunt"></i>
      </Link>

      <div className="header-not-link">

        <div className="header-search-bar">
          <i className="fas fa-search"></i>
          <p>Discover your next favorite thing ...</p>
        </div>

        <div className="header-places-not-here">Ask Ship Makers Jobs Events ... </div>

        <div className="header-div-session-access">
          <div className="header-div-signup-login">
            <button className="header-login"onClick={() => openModal('login')}>LOG IN</button>
            <button className="header-signup" onClick={() => openModal('signup')}>SIGN UP</button>
          </div>
        </div>

      </div>

    </div>
  );

    return currentUser ? doctorIsIn() : doctorIsOut();
};

export default NavBar;