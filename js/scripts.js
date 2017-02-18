var map;

// Create a new blank array for all the listing markers.
var markers = [];

// This global polygon variable is to ensure only ONE polygon is rendered.
var polygon = null;

function initMap() {

  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styles = [
    {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [
        { color:"#e9e5dc" }
      ]
    },{
      featureType: "landscape.natural",
      elementType: "geometry.fill",
      stylers: [
        {"visibility":"on"},
        {"color":"#b8cb93"}
      ]
    },{
      featureType: "poi",
      elementType: "all",
      stylers: [
        {"visibility": "off"}
      ]
    },{
      featureType: "poi.business",
      elementType: "all",
      stylers: [
        {"visibility": "simplified"}
      ]
    },{
      featureType: "poi.medical",
      elementType: "all",
      stylers: [
        {"visibility": "on"}
      ]
    },{
      featureType: "poi.park",
      elementType: "all",
      stylers: [
        {"visibility": "on"}
      ]
    },{
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {"color": "#ccdca1"}
      ]
    },{
      featureType: "poi.sports_complex",
      elementType: "all",
      stylers: [
        {"visibility": "on"}
      ]
    },{
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {"hue":"#ff0000"},
        {"saturation":-100},
        {"lightness":99}
      ]
    },{
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {"color":"#808080"},
        {"lightness":54},
        {"visibility":"off"}
      ]
    },{
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {"color":"#767676"}
      ]
    },{
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {"color":"#ffffff"}
      ]
    },{
      featureType: "water",
      elementType: "all",
      stylers: [
        {"saturation":43},
        {"lightness":-11},
        {"color":"#89cada"}
      ]
    }
  ];

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7413549, lng: -73.9980244},
    zoom: 13,
    styles: styles
  });

  // These are some real estate listings that will be shown to the user.
  // Normally these would be stored in a database instead.

  var locations = [
    {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
    {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
    {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
    {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
    {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
    {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
  ];

  var largeInfoWindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();
  // This group uses the location array to create an array of marker on intialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    // Create a marker per location and put into markers array.
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i
    });
    // Push the marker to our array of markers.
    markers.push(marker);
    // Extend the boundaries of the map for each marker
    bounds.extend(marker.position);
    // Create an onclick event to open an infowindow at each marker.
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfoWindow);
    });
  }

  document.getElementById('show-listings').addEventListener('click', showListings);
  document.getElementById('hide-listings').addEventListener('click', hideListings);

  // This function populates the infowindow when the marker is clicked.
  function populateInfoWindow(marker, infowindow) {
    if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent('<div>' + marker.title + '</div>');
      infowindow.open(map, marker);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker(null);
      });
    }
  }

  // This function will loop through the markers array and display them all.
  function showListings() {
    var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map so each marker can be displayed.
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
  }

  // This function will loop through the listings and hide them all.
  function hideListings() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  }
}
