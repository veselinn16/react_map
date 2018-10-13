import React from 'react';
import Footer from './Footer.js';

const Sidebar = props => {
  const filterLocations = (event) => {
    props.filterLocations(event.target.value)    
  }

  const selectMarker = event => {
    props.selectMarker(event.target.innerText)
  }

  return (
    <div className='sidebar sidebar__invisible'>
      <div className="locations">
        <h2 className="locations__heading">Locations</h2>
        <ul className="locations__list">
          {props.markers.map(marker => {
            return <li className="locations__list--location" tabIndex="0" onKeyPress={selectMarker} key={marker.id} onClick={selectMarker}>
                {marker.title}
             </li>              
          })}
        </ul>
      </div>
      <div className="filter__section">
        <h2 className="filter__section--heading">Locations Filter</h2>
        <input type="text" className="filter__section--input" placeholder="filter locations..." role="search" id="filter" onChange={filterLocations}/>
        <label htmlFor="filter" className="filter__section--label">filter Locations</label>
      </div>
      <Footer />
    </div>
  )
}

export default Sidebar;