import React from "react";
import './NavigationItem.css';
import {Link} from "react-router-dom";

function NavigationItem({handleClickNavigation, flag, classImg}) {

  console.log(classImg, 'foto');

  function handleClick() {
    handleClickNavigation(flag);
  }

  return (
        <li className='links__link-container'>
          <Link className={`links__link ${classImg}`} to='/about-team' onClick={handleClick}>
          </Link>
        </li>
  );
}

export default NavigationItem;
