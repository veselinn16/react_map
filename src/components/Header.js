import React, { Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <label tabIndex="0" htmlFor="header__menu-toggle" className="header__menu__button" onClick={this.props.showSidebar}>
          <span className="header__menu__icon">&nbsp;</span>
        </label>
        <h1 className="header__heading">Welcome to Plovdiv</h1>
      </header>
    )
  }
}

export default Header