import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  render() {
    const MapComponent = withGoogleMap(props => (
      <GoogleMap defaultCenter={{ lat: 42.144953, lng: 24.746555 }} defaultZoom={ 16 }>
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