// Create a new StyledMapType object, passing it an array of styles,
// and the name to be displayed on the map type control.
var styles = [
  {
    stylers: [
      { "saturation":-100 }
    ]
  },{
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      { color:"#0099dd" }
    ]
  },{
    elementType: "labels",
    stylers: [
      {"visibility":"off"}
    ]
  },{
    featureType:"poi.park",
    elementType:"geometry.fill",
    stylers: [
      {"color":"#aadd55"}
    ]
},{
  featureType:"road.highway",
  elementType:"labels",
  stylers: [
    {"visibility":"on"}
  ]
},{
  featureType:"road.arterial",
  elementType:"labels.text",
  stylers: [
    {"visibility":"on"}
  ]
},{
featureType:"road.local",
elementType:"labels.text",
stylers: [
  {"visibility":"on"}
]
}
];
