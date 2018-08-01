import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import LocationsList from './components/LocationsList.js';

class App extends Component {
  state = {
    styles: [
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          {
            visibility: "on"
          },
          {
            lightness: 33
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2e5d4"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#c5dac6"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
          {
            visibility: "on"
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#c5c6c6"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#e4d7c6"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#fbfaf7"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#acbcc9"
          }
        ]
      }
    ],

    locations: [
      { lat: 42.148191, lng: 24.752817, name: "Old Town Plovdiv", id: 1 },
      { lat: 42.140469, lng: 24.74578, name: "Singing Fountains", id: 2 },
      { lat: 42.143726, lng: 24.750003, name: "Hemingway", id: 3 },
      {
        lat: 42.147669,
        lng: 24.748052,
        name: "Ancient Stadium of Philipopolis",
        id: 4
      },
      {
        lat: 42.146886,
        lng: 24.751069,
        name: "Ancient Theater of Philipopolis",
        id: 5
      }
    ],
    map: null,
    markers: [],
    filterMarkers: []
  };

  loadDataFromAPI = () => {
    const request = require("request");

    request(
      {
        url: "https://api.foursquare.com/v2/venues/explore",
        method: "GET",
        qs: {
          client_id: "C1WCYSQEYPAVVDEMKM11EJD0WNWGVQIL4XPRCCZXHOLQOKWS",
          client_secret: "FDOGXOZBTZYYCNYDS2E2CHCFA5EPPFTTQHQQWAW4R5VAVH2C",
          ll: "42.143726,24.750003",
          query: "",
          v: "20180323",
          limit: 1
        }
      },
      function(err, res, body) {
        if (err) {
          console.error(err);
        } else {
          let response = body;
          let data = JSON.parse(response);
          console.log(
            // the response
            data,
            // name of city
            data.response.headerFullLocation,
            // name of location
            data.response.groups[0].items[0].venue.name,
            // address of location
            data.response.groups[0].items[0].venue.location.address,
            // type of location
            data.response.groups[0].items[0].venue.categories[0].name,
            // url of image to put in src tag
            `${
              data.response.groups[0].items[0].venue.categories[0].icon.prefix
            }${
              data.response.groups[0].items[0].venue.categories[0].icon.suffix
            }`
          );
        }
      }
    );
  }

  loadMap = () => {
    console.log("loadMap() is running");
    // render map
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 42.144953, lng: 24.746555 },
      zoom: 16,
      styles: this.state.styles
    });

    // set state map variable to the newly-created map for later use
    this.setState({ map: map });

    // map the state locations array to create markers with infoWindows and event listeners and push them to the state markers and filterMarkers variables
    this.state.locations.map(location => {
      let marker = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name,
        animation: window.google.maps.Animation.DROP,
        id: location.id
      });

      let infoWindow = new window.google.maps.InfoWindow({
        content: marker.title
      });

      let click = 1;
      marker.addListener("click", () => {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
        if (click % 2 !== 0) {
          infoWindow.open(map, marker);
        } else {
          infoWindow.close();
        }
        click += 1;
      });

      this.setState(prevState => ({
        markers: [...prevState.markers, marker],
        filterMarkers: [...prevState.filterMarkers, marker]
      }));
    });
    this.loadDataFromAPI();
  };

  filterLocations = query => {
    console.log("filterLocations() is running");
    let filteredLocations = [];

    this.state.filterMarkers.map(marker => {
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
        <LocationsList
          markers={this.state.markers}
          filterLocations={this.filterLocations}
          selectMarker={this.selectMarker}
        />
        <Map id="map" loadMap={this.loadMap} />
      </div>
    );
  }
}

export default App;
