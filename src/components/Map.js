import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  render() {
    const customMapStyles = [
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
    ]

    const MapComponent = withGoogleMap(props => (
      <GoogleMap defaultCenter={{ lat: 42.144953, lng: 24.746555 }} defaultZoom={ 16 } defaultOptions={{ styles: customMapStyles }}>
        { props.isMarkerShown && <Marker position={{ lat: 42.146252, lng: 24.748833 }} /> }
        { props.isMarkerShown && <Marker position={{ lat: 42.140500, lng: 24.745694 }} />}
        { props.isMarkerShown && <Marker position={{ lat: 42.143704, lng: 24.749983 }} />}
        { props.isMarkerShown && <Marker position={{ lat: 42.147811, lng: 24.747950 }} />}
        { props.isMarkerShown && <Marker position={{ lat: 42.143623, lng: 24.750512 }} />}
      </GoogleMap>
    ));

    return (
      <div id='map'>
        <MapComponent isMarkerShown containerElement={ <div style={{ height: `100%`, width: `100%` }}/> } mapElement={ <div style={{ height: `100%` }}/> }/>
      </div>
    );
  }
};

export default Map;