import React from 'react';
// import img from "../x3.png";

const LocationsList = (props) => {
  const filterLocations = (event) => {
    props.filterLocations(event.target.value)    
  }

  const selectMarker = (event) => {
    props.selectMarker(event.target.innerText)
  }

  return (
    <div className='sidebar sidebar__invisible'>
      <div className="locations">
        <h2 className="locations__heading">Locations</h2>
        <ul className="locations__list">
          {props.markers.map(marker => {
            return <li className="locations__list--location" tabIndex="0" onKeyPress={selectMarker} key={marker.id} onClick={selectMarker}>
                {/* {marker.title} */}
             </li>              
          })}
          <li className="locations__list--location">Nebet Tepe</li>
          <li className="locations__list--location">Singing Fountains</li>
          <li className="locations__list--location">Basquiat Café & Boutique</li>
          <li className="locations__list--location">Ancient Stadium of Philipopolis</li>
          <li className="locations__list--location">Ancient Stadium of Philipopolis</li>
        </ul>
      </div>
      <h2 className="filter__section--heading">Locations Filter</h2>
      <div className="filter__section">
        <input type="text" className="filter__section--input" placeholder="filter locations..." role="search" id="filter" onChange={filterLocations}/>
        <label htmlFor="filter" className="filter__section--label">Filter Locations</label>
      </div>
      <footer className="footer">Copyright &copy; 2018 Veselin Tonev. <br/>
        All rights reserved.
      </footer>
    </div>
  )
}

export default LocationsList