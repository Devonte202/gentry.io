let map;
let heatmap;

function locationData() {
  return [
    { location: new google.maps.LatLng(37.782, -122.447), weight: 4 },
    { location: new google.maps.LatLng(37.782, -122.445), weight: 5 },
    { location: new google.maps.LatLng(37.782, -122.443), weight: 3 },
    { location: new google.maps.LatLng(37.782, -122.441), weight: 6 },
    { location: new google.maps.LatLng(37.782, -122.439), weight: 4 },
    { location: new google.maps.LatLng(37.782, -122.437), weight: 2 },
    { location: new google.maps.LatLng(37.782, -122.435), weight: 8 },
    { location: new google.maps.LatLng(37.785, -122.447), weight: 3 },
    { location: new google.maps.LatLng(37.785, -122.445), weight: 9 },
    { location: new google.maps.LatLng(37.785, -122.443), weight: 5 },
    new google.maps.LatLng(37.785, -122.441),
    new google.maps.LatLng(37.785, -122.439),
    new google.maps.LatLng(37.785, -122.437),
    new google.maps.LatLng(37.785, -122.435)
  ]
}

function initMap() {
  let sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);
  map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 11,
      center: sanFrancisco,
      mapTypeId: 'satellite'
    });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: locationData,
    map: map
  });
  heatmap.setMap(map)
}
