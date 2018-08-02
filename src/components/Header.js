import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <label htmlFor="header__menu-toggle" className="header__menu__button">
        <span className="header__menu__icon">&nbsp;</span>
      </label>
      <h1 className="header__heading">Welcome to Plovdiv</h1>
    </header>
  )
}

export default Header