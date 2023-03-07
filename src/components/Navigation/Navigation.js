import React from "react";
import './Navigation.css';

function Navigation() {
  return (
      <nav className='navigation'>
        <ul className='links'>
          <li className='links__link-container '>
            <a className='links__link links__link_first' href='/about-team'>
            </a>
          </li>
          <li className='links__link-container'>
            <a className='links__link links__link_second' href='/about-team'>
            </a>
          </li>
          <li className='links__link-container'>
            <a className='links__link links__link_third' href='/about-team'>
            </a>
          </li>
        </ul>
      </nav>
  );
}

export default Navigation;
