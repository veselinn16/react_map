import React, { Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        {/* <label tabIndex="0" htmlFor="header__menu-toggle" className="header__menu__button" onClick={this.props.showSidebar}>
          <span className="header__menu__icon">&nbsp;</span>
        </label> */}
        <div class="header__btn">
          <div class="header__wrapper-menu" onClick={this.props.showSidebar}>
            <div class="line__menu line__menu-half line__menu-start"></div>
            <div class="line__menu"></div>
            <div class="line__menu line__menu-half line__menu-end"></div>
          </div>
        </div>
        <h1 className="header__heading">Welcome to Plovdiv</h1>
      </header>
    )
  }
}

export default Header