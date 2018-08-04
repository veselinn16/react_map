import React from 'react';

const LocationsList = (props) => {
  const filterLocations = (event) => {
    props.filterLocations(event.target.value)    
  }

  const selectMarker = (event) => {
    props.selectMarker(event.target.innerText)
  }

  return (
    <div className='sidebar'>
      <div className="locations">
        <h2 className="locations__heading">Locations</h2>
        <ul className="locations__list">
          {props.markers.map(marker => {
            return <li className="locations__list--location" tabIndex="0" key={marker.id} onClick={selectMarker}>
                {marker.title}
              </li>;
          })}
        </ul>
      </div>
      <h2 className="filter__section--heading">Filter Locations</h2>
      <div className="filter__section">
        <input type="text" className="filter__section--input" placeholder="Filter Locations" role="search" id="filter" onChange={filterLocations}/>
        <label htmlFor="filter" className="filter__section--label">Filter Locations</label>
      </div>
    </div>
  )
}

export default LocationsList