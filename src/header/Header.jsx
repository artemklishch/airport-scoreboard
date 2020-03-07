import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className="header__logo">
        <h1 className='header__logo_city'>Kyiv</h1>
        <h5 className='header__logo_name'>Sikorsky Airport</h5>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__navigation">
          <li className="header__nav__navigation_item">For passengers</li>
          <li className="header__nav__navigation_item">IEV Services</li>
          <li className="header__nav__navigation_item">VIP</li>
          <li className="header__nav__navigation_item">Corporate</li>
          <li className="header__nav__navigation_item">EN</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;