import React, { Component } from 'react';

class LocationsList extends Component {
  componentDidMount() {
    this.props.locations.map(location => {
      console.log(location.name)
    })
  }

  render() {
    return <div className="sidebar">
        <div className="locations">
          <ul className="locations__list">
            {this.props.locations.map(location => {
              return <li className="locations__list--location" key={location.id}>
                  {location.name}
                </li>;
            })}
          </ul>
        </div>
      </div>;
  }
}

export default LocationsList