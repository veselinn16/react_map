function gm_authFailure() {
  alert("There was a problem loading Google maps!");

  // Empty locations from locations list if there is no map
  let locationsList = document.getElementsByClassName('locations__list')
  let locations = locationsList[0].children
  for(let location of locations) {
    location.hidden = true
  }
}
