import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className="header__logo">
        <h1 className='header__logo_city'>Kyiv</h1>
        <h5 className='header__logo_name'>Sikorsky Airport</h5>
      </Link>
      <nav className="header__nav">
        <ul className="header__nav_navigation">
          <li className="header__nav_navigation_item">For passengers</li>
          <li className="header__nav_navigation_item">IEV Services</li>
          <li className="header__nav_navigation_item">VIP</li>
          <li className="header__nav_navigation_item">Corporate</li>
          <li className="header__nav_navigation_item">EN</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;