import React from "react";
import '../styles/Header.css';
import logo from '../img/Logo.png';

function Header () {
    return(
        <header>
        <div className="header-logo">
          <img src={logo} alt="Logo" title="Logo" />
          <p>Code Ninjas</p>
        </div>

      </header>
    );
}

export default Header;