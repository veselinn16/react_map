import React from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__btn">
        <div className="header__wrapper-menu" onClick={props.showSidebar}>
          <div className="line__menu half start"></div>
          <div className="line__menu"></div>
          <div className="line__menu half end"></div>
        </div>
      </div>
      <h1 className="header__heading">Welcome to Plovdiv</h1>
    </header>
  )
}

export default Header