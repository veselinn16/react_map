import React, { Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__btn">
          <div className="header__wrapper-menu" onClick={this.props.showSidebar}>
            <div className="line__menu half start"></div>
            <div className="line__menu"></div>
            <div className="line__menu half end"></div>
          </div>
        </div>
        <h1 className="header__heading">Welcome to Plovdiv</h1>
      </header>
    )
  }
}

export default Header