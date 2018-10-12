import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import Sidebar from './components/Sidebar';

const locations = [
  { lat: 42.1495163, lng: 24.7522388, name: "Nebet Tepe", id: 1 },
  { lat: 42.140469, lng: 24.74578, name: "Singing Fountains", id: 2 },
  { lat: 42.1501993, lng: 24.7455469, name: "Fresh Pasta", id: 3 },
  { lat: 42.1474261, lng: 24.7461507, name: "Ancient Stadium of Philipopolis", id: 4 },
  { lat: 42.146886, lng: 24.751069, name: "Ancient Theater of Philipopolis", id: 5 }
]

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

    const menuBtn = document.querySelector('.header__wrapper-menu');
    menuBtn.classList.toggle('open');

    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle(this.props.isVisible ? '' : 'sidebar__invisible');
    
    const map = document.getElementById('map');
    map.classList.toggle('map__big');
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
    return (
      <div className="App">
        <Header showSidebar={this.showSidebar}></Header>
        <div className="wrapper">
          <Sidebar
            markers={this.state.markers}
            filterLocations={this.filterLocations}
            selectMarker={this.selectMarker}
          />
          <Map id="map" isSidebarVisible={this.state.isSidebarVisible} locations={locations} setMarkers={this.setMarkers}/>
        </div>
      </div>
    );
  }
}

export default App;
