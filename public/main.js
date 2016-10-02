var map;
function initMap() {
  var current = {lat: 13.0849863, lng: 80.210193}

  var options = {
    center: current,
      zoom: 18
  };


  map = new google.maps.Map(document.getElementById('map'), options);

  // Specify location, radius and place types for your Places API search.
  var request = {
    location: current ,
    radius: '500',
    types: ['cafe']
  };


  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, placesCallback);

}

function placesCallback(results, status) {
  // for( var i = 0 ; i < results.length ; ++i){
  //   console.log(results[i].name);
  // }
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      console.log( place.name );
      $('#placeTable tbody').append('<tr><td> ' + place.name + ' </td></tr>');
      // If the request succeeds, draw the place location on
      // the map as a marker, and register an event to handle a
      // click on the marker.
      // var marker = new google.maps.Marker({
      //   map: map,
      //   position: place.geometry.location
      // });
    }
  }
};
