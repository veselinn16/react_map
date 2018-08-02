import React, { Component } from 'react';

class LocationsList extends Component {
  filterLocations = (event) => {
    this.props.filterLocations(event.target.value)    
  }

  selectMarker = (event) => {
    this.props.selectMarker(event.target.innerText)
  }

  render() {
    return (
    <div className="sidebar">
      <div className="locations">
        <h2 className="locations__heading">Locations</h2>
        <ul className="locations__list">
          {this.props.markers.map(marker => {
            return <li className="locations__list--location" key={marker.id} onClick={this.selectMarker}>
                {marker.title}
              </li>;
          })}
        </ul>
      </div>
      <h2 className="filter__section--heading">Filter Locations</h2>
      <div className="filter__section">
        <input type="text" className="filter__section--input" placeholder="Filter Locations" role="search" id="filter" onChange={this.filterLocations}/>
        <label htmlFor="filter" className="filter__section--label">Filter Locations</label>
      </div>
    </div>
    )
  }
}

export default LocationsList