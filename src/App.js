import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Map from './components/Map.js';
import LocationsList from './components/LocationsList.js';
import { mapStyles } from './mapStyles.js';

const locations = [
  { lat: 42.1495163, lng: 24.7522388, name: "Nebet Tepe", id: 1 },
  { lat: 42.140469, lng: 24.74578, name: "Singing Fountains", id: 2 },
  { lat: 42.1501993, lng: 24.7455469, name: "Basquiat Café & Boutique", id: 3 },
  { lat: 42.1474261, lng: 24.7461507, name: "Ancient Stadium of Philipopolis", id: 4 },
  { lat: 42.146886, lng: 24.751069, name: "Ancient Theater of Philipopolis", id: 5 }
]

const styles = mapStyles

class App extends Component {
  state = {
    markers: [],
    filterMarkers: [],
    isSidebarVisible: true
  }

  setMarkers = (marker) => {
    this.setState(prevState => ({
      markers: [...prevState.markers, marker],
      filterMarkers: [...prevState.filterMarkers, marker]
    }));
  }

  showSidebar = () => {
    const stateOfSidebar = this.state.isSidebarVisible

    if (stateOfSidebar) {
      this.setState({isSidebarVisible: false})
    } else {
      this.setState({ isSidebarVisible: true })
    }

    const sidebar = document.getElementsByClassName('sidebar');
    sidebar[0].classList.toggle(this.props.isVisible ? '' : 'sidebar__invisible');
  }

  filterLocations = query => {
    console.log("filterLocations() is running");
    let filteredLocations = [];

    this.state.filterMarkers.forEach(marker => {
      if (marker.title.toLowerCase().includes(query.toLowerCase())) {
        filteredLocations.push(marker);
        marker.setVisible(true);
      } else {
        marker.setVisible(false);
      }
    });

    this.setState({ markers: filteredLocations });
  };

  selectMarker = location => {
    for (let marker of this.state.markers) {
      marker.title === location &&
        window.google.maps.event.trigger(marker, "click");
    }
  };

  render() {
    const {isSidebarVisible} = this.state
    return (
      <div className="App">
        <Header showSidebar={this.showSidebar}></Header>
        <div className="wrapper">
          <LocationsList
            markers={this.state.markers}
            filterLocations={this.filterLocations}
            selectMarker={this.selectMarker}
          />
          <Map id="map" isSidebarVisible={isSidebarVisible} locations={locations} styles={styles} setMarkers={this.setMarkers}/>
        </div>
      </div>
    );
  }
}

export default App;
