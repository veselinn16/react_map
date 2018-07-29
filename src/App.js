import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import LocationsList from './components/LocationsList.js';

class App extends Component {
  state = {
    styles: [
      {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": 33
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2e5d4"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c5dac6"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c5c6c6"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e4d7c6"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fbfaf7"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#acbcc9"
          }
        ]
      }
    ],
    locations: [
      { lat: 42.146255, lng: 24.74878, name: 'City Artistic Gallery', id: 1 },
      { lat: 42.140469, lng: 24.74578, name: 'Singing Fountains', id: 2 },
      { lat: 42.143726, lng: 24.750003, name: 'Hemingway', id: 3 },
      { lat: 42.147669, lng: 24.748052, name: 'Ancient Stadium of Philipopolis', id: 4 },
      { lat: 42.143653, lng: 24.75042, name: 'Roman Odeon of Philipopolis', id: 5 }
    ],
    markers: [],
    filteredMarkers: null
  }

  filterLocations = (locations) => {
    let newLocs = this.state.markers.filter(marker => marker.title.toLowerCase().includes(locations.toLowerCase()))
    this.setState({markers: newLocs})
    console.log(this.state.markers)
  }
    // this.setState({ markers: })

  render() {
    return (
      <div className="App">
        <LocationsList markers={this.state.markers} filterLocations={this.filterLocations}/>
        <Map id="map" options={{
          center: { lat: 42.144953, lng: 24.746555 },
          zoom: 16,
          styles: this.state.styles
        }} onMapLoad={ map => {

          this.state.locations.map( location => {
            let marker = new window.google.maps.Marker({
              position: { lat: location.lat, lng: location.lng },
              map: map,
              title: location.name,
              animation: window.google.maps.Animation.DROP,
              id: location.id
            });

            this.setState(prevState => ({
              markers: [...prevState.markers, marker]}))

            let infoWindow = new window.google.maps.InfoWindow({
              content: location.name
            });

            let click = 1;
            marker.addListener('click', () => {
              if(marker.getAnimation() !== null) {
                marker.setAnimation(null);
              } else {
                marker.setAnimation(window.google.maps.Animation.BOUNCE)
              }
              if(click % 2 !== 0) {
                infoWindow.open(map, marker)
              } else {
                infoWindow.close()
              }
              click += 1;
            })
          })
        }} />
      </div>
    );
  }
}

export default App;
