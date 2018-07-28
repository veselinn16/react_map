import React, { Component } from 'react';

class LocationsList extends Component {
  componentDidMount() {
    this.props.locations.map(location => {
      console.log(location.name)
    })
  }

  render() {
    return (
    <div className="sidebar">
      <h1 className="main__heading">Welcome to Plovdiv</h1>
      <div className="locations">
        <h2 className="locations__heading">Locations</h2>
        <ul className="locations__list">
          {this.props.locations.map(location => {
            return <li className="locations__list--location" key={location.id}>
                {location.name}
              </li>;
          })}
        </ul>
      </div>
    </div>
    )
  }
}

export default LocationsList