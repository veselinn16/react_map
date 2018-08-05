import React, { Component } from 'react'

class Map extends Component {
  loadMap = () => {
    const locations = this.props.locations
    const styles = this.props.styles
    // render map
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 42.145560, lng: 24.748399 },
      zoom: 16,
      styles: styles
    })

    // map the state locations array to create markers with infoWindows and event listeners and push them to the state markers and filterMarkers variables
    locations.forEach(location => {
      fetch(`https://api.foursquare.com/v2/venues/explore?client_id=C1WCYSQEYPAVVDEMKM11EJD0WNWGVQIL4XPRCCZXHOLQOKWS&client_secret=FDOGXOZBTZYYCNYDS2E2CHCFA5EPPFTTQHQQWAW4R5VAVH2C&v=20180323&ll=${location.lat},${location.lng}&limit=1`).then(response => {
        // ALERT THAT THE REQUEST WAS UNSUCCESSFUL
        if (response.status !== 200) {
          alert('Failed request')
        } else {
          response.json().then(data => {
            let marker = new window.google.maps.Marker({
              position: { lat: location.lat, lng: location.lng },
              map: map,
              title: location.name,
              animation: window.google.maps.Animation.DROP,
              id: location.id
            });

            let contentString = `<div class="infoWindow"><h2 class="infoWindow__heading">${data.response.groups[0].items[0].venue.name}</h2>
            <p class="infoWindow__description">${data.response.groups[0].items[0].venue.categories[0].name} in ${data.response.headerFullLocation}</p>
            <p class="infoWindow__address">${data.response.groups[0].items[0].venue.location.address}</p>
            <img class="infoWindow__image" src='powered-by-foursquare-blue.png' alt='Attribution image'/></div>`;

            let infoWindow = new window.google.maps.InfoWindow({
              content: contentString
            })

            let click = 1;
            marker.addListener('click', () => {
              if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
              } else {
                marker.setAnimation(window.google.maps.Animation.BOUNCE)
              }
              if (click % 2 !== 0) {
                infoWindow.open(map, marker);
              } else {
                infoWindow.close()
              }
              click += 1;
            });
            this.props.setMarkers(marker)
          })
        }
      })
      // .catch(err => {
      //   alert(err)
      // })
    })
  }
  componentDidMount() {
    this.loadMap()
  }

  render() {
    return(
      <div id={this.props.id} className={this.props.isSidebarVisible ? '' : 'map__big'} aria-label="location" role="application"/>
    )
  }
}

export default Map;