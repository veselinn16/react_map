import React, { Component } from 'react';

class LocationsList extends Component {
  componentWillReceiveProps() {
    console.log(this.props.markers.title)
  }

  render() {
    return (
    <div className="sidebar">
      <h1 className="main__heading">Welcome to Plovdiv</h1>
      <div className="locations">
        <h2 className="locations__heading">Locations</h2>
        <ul className="locations__list">
          {this.props.markers.map(marker => {
            return <li className="locations__list--location" key={marker.id}>
                {marker.title}
              </li>;
          })}
        </ul>
      </div>
      {/* <div className="filter__section">
        <input type="text" className="filter__section--input" placeholder="Filter Locations" id="filter"/>
        <label htmlFor="filter" className="filter__section--label">Filter Locations</label>
      </div> */}
    </div>
    )
  }
}

export default LocationsList