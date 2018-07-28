import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import LocationsList from './components/LocationsList.js';

class App extends Component {
  state = {
    map: null,
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
      { lat: 42.146252, lng: 24.748833, name: 'City Artistic Gallery', id: 1 },
      { lat: 42.140500, lng: 24.745694, name: 'Singing Fountains', id: 2 },
      { lat: 42.143704, lng: 24.749983, name: 'Hemingway', id: 3 },
      { lat: 42.147811, lng: 24.747950, name: 'Ancient Stadium of Philipopolis', id: 4 },
      { lat: 42.143623, lng: 24.750512, name: 'Roman Odeon of Philipopolis', id: 5 }
    ],
    markers: []
  }

  populateInfoWindow(marker, infowindow) {
    if(infowindow.marker !== marker) {
      debugger;
      infowindow.marker = marker;
      infowindow.setContent('<div>' + marker.name + '</div>');
      infowindow.open(this.state.map, marker);
      infowindow.addListener('closeclick', () => {
        infowindow.setMarker(null);
      })
    }
  }

  render() {
    return (
      <div className="App">
        <LocationsList locations={this.state.locations} />
        <Map id="map" options={{
          center: { lat: 42.144953, lng: 24.746555 },
          zoom: 16,
          styles: this.state.styles
        }} onMapLoad={ map => {
          let largeInfoWindow = new window.google.maps.InfoWindow();

          this.state.locations.map( location => {
            let marker = new window.google.maps.Marker({
              position: { lat: location.lat, lng: location.lng },
              map: map,
              title: location.name,
              animation: window.google.maps.Animation.DROP,
              id: location.id
            });
            this.setState({ map });

            this.state.markers.push(marker)
            marker.addListener('click', () => {
              this.populateInfoWindow(this, largeInfoWindow);
            })
          })
        }} />
      </div>
    );
  }
}

export default App;
