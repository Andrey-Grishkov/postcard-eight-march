import React from "react";
import './Header.css';
import HeaderRose from '../../images/headerRose.png'

function Header() {
  return (
    <header className="header">
      <img src={HeaderRose} className='header__image'/>
    </header>
  );
}

export default Header;
