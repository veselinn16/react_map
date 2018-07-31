import React, { Component } from 'react';

class LocationsList extends Component {
  filterLocations = (event) => {
    this.props.filterLocations(event.target.value)
    
  }

  componentWillReceiveProps() {
    let locs = [];
    let locas = document.getElementsByClassName("locations__list--location");
    for (let loc of locas) {
      let text = loc.innerText;
      locs.push(text);
    }
    console.log(locs);
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
      <div className="filter__section">
        <input type="text" className="filter__section--input" placeholder="Filter Locations" id="filter" onChange={this.filterLocations}/>
        <label htmlFor="filter" className="filter__section--label">Filter Locations</label>
      </div>
    </div>
    )
  }
}

export default LocationsList