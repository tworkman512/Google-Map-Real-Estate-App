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
}, {
featureType: "poi.park",
elementType: "geometry.fill",
stylers: [
  {"color": "#ccdca1"}
]
}, {
featureType: "poi.sports_complex",
elementType: "all",
stylers: [
  {"visibility": "on"}
]
}, {
featureType: "road",
elementType: "geometry.fill",
stylers: [
  {"hue":"#ff0000"},
  {"saturation":-100},
  {"lightness":99}
]
}, {
featureType: "road",
elementType: "geometry.stroke",
stylers: [
  {"color":"#808080"},
  {"lightness":54},
  {"visibility":"off"}
]
}, {
featureType: "road",
elementType: "labels.text.fill",
stylers: [
  {"color":"#767676"}
]
}, {
featureType: "road",
elementType: "labels.text.stroke",
stylers: [
  {"color":"#ffffff"}
]
}, {
featureType: "water",
elementType: "all",
stylers: [
  {"saturation":43},
  {"lightness":-11},
  {"color":"#89cada"}
]
}
];
