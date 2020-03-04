let map;
let heatMap;
let coords;

function getCsvData() {
  fetch('https://jwv66x6591.execute-api.us-east-2.amazonaws.com/gentryFunction').then(response => response.json()).then(data => {
    console.log(data)
    for (let i = 0; i < coords.length; i++) {
      let found = coords.find(neighborhood => neighborhood.id === data[0].place)
      console.log(found)
      if (found) {
        found.weight = data[0].weight
      }
      console.log(coords[i])
    }
  })
}

function initMap() {
  coords = [
    //Astoria
    { id: 'Astoria', location: new google.maps.LatLng(40.764458, -73.923734), weight: 3 },
    //Bayside
    { id: 'Bayside', location: new google.maps.LatLng(40.758640, -73.765632), weight: 3 },
    //Little Neck
    { id: 'Little Neck', location: new google.maps.LatLng(40.761262, -73.732781), weight: 3 },
    //Elmhurst
    { id: 'Elmhurst', location: new google.maps.LatLng(40.737911, -73.880748), weight: 3 },
    //Flushing
    { id: 'Flushing', location: new google.maps.LatLng(40.767604, -73.833591), weight: 3 },
    //Hillcrest
    { id: 'Hillcrest', location: new google.maps.LatLng(40.723031, -73.800052), weight: 3 },
    //Jackson Heights
    { id: 'Jackson Heights', location: new google.maps.LatLng(40.755714, -73.883402), weight: 3 },
    //Jamaica
    { id: 'Jamaica', location: new google.maps.LatLng(40.702634, -73.789428), weight: 3 },
    //Middle Village
    { id: 'Middle Village', location: new google.maps.LatLng(40.717597, -73.875434), weight: 3 },
    //North Shore, Ridgewood
    { id: 'North Shore', location: new google.maps.LatLng(40.704325, -73.902361), weight: 3 },
    //Ozone Park, Woodhaven
    { id: 'Ozone Park', location: new google.maps.LatLng(40.686001, -73.853357), weight: 3 },
    //Queens Village
    { id: 'Queens Village', location: new google.maps.LatLng(40.715820, -73.741759), weight: 3 },
    //Rego Park / Forest Hills
    { id: 'Rego Park', location: new google.maps.LatLng(40.722775, -73.854392), weight: 3 },
    //Rockaways
    { id: 'Rockaways', location: new google.maps.LatLng(40.591993, -73.797852), weight: 3 },
    //South Shore
    { id: 'South Shore', location: new google.maps.LatLng(40.699761, -73.901949), weight: 3 },
    //Sunnyside
    { id: 'Sunnyside', location: new google.maps.LatLng(40.743404, -73.919770), weight: 3 },
    //Bay Ridge
    { id: 'Bay Ridge', location: new google.maps.LatLng(40.626362, -74.030270), weight: 3 },
    //BedSty
    { id: 'Bedford Stuyvesant', location: new google.maps.LatLng(40.687190, -73.942982), weight: 3 },
    //Bensonhurst
    { id: 'Bensonhurst', location: new google.maps.LatLng(40.613878, -73.993132), weight: 4 },
    //Borough Park
    { id: 'Borough Park', location: new google.maps.LatLng(40.635057, -73.992629), weight: 4 },
    //Brooklyn Heights
    { id: 'Brooklyn Heights', location: new google.maps.LatLng(40.695934, -73.995853), weight: 4 },
    //Brownsville
    { id: 'Brownsville', location: new google.maps.LatLng(40.665197, -73.913388), weight: 4 },
    //Bushwick
    { id: 'Bushwick', location: new google.maps.LatLng(40.695880, -73.917216), weight: 4 },
    //Coney Island
    { id: 'Coney Island', location: new google.maps.LatLng(40.578324, -73.970881), weight: 4 },
    //East Flatbush
    { id: 'East Flatbush', location: new google.maps.LatLng(40.648396, -73.930904), weight: 4 },
    //East New York
    { id: 'East New York', location: new google.maps.LatLng(40.659017, -73.876148), weight: 4 },
    //Flatbush
    { id: 'Flatbush', location: new google.maps.LatLng(40.641494, -73.959611), weight: 4 },
    //Flatlands
    { id: 'Flatlands', location: new google.maps.LatLng(40.623524, -73.932195), weight: 4 },
    //Prospect Heights / North Crown Heights
    { id: 'Prospect Heights', location: new google.maps.LatLng(40.676671, -73.955660), weight: 4 },
    //Park Slope / Carroll Gardens
    { id: 'Park Slope', location: new google.maps.LatLng(40.676108, -73.992609), weight: 4 },
    //Sheepshead Bay, Gravesend
    { id: 'Sheepshead Bay', location: new google.maps.LatLng(40.593554, -73.964248), weight: 4 },
    //Soundview / Parkchester
    { id: 'Parkchester', location: new google.maps.LatLng(40.833538, -73.865356), weight: 4 },
    //South Crown Heights
    { id: 'South Crown Heights', location: new google.maps.LatLng(40.665985, -73.943447), weight: 4 },
    //South Ozone Park / Howard Beach
    { id: 'South Ozone Park', location: new google.maps.LatLng(40.663294, -73.836378), weight: 4 },
    //Sunset Park
    { id: 'Sunset Park', location: new google.maps.LatLng(40.652241, -74.010852), weight: 4 },
    //Williamsburg / Greenpoint
    { id: 'Williamsburg', location: new google.maps.LatLng(40.719673, -73.953794), weight: 4 },
    //Central Harlem
    { id: 'Central Harlem', location: new google.maps.LatLng(40.809084, -73.948250), weight: 7 },
    //Chelsea
    { id: 'Chelsea', location: new google.maps.LatLng(40.746612, -74.001675), weight: 7 },
    //East Harlem
    { id: 'East Harlem', location: new google.maps.LatLng(40.795626, -73.939931), weight: 7 },
    //Greenwich Village
    { id: 'Greenwich Village', location: new google.maps.LatLng(40.733583, -74.002807), weight: 7 },
    //Lower East Side / Chinatown
    { id: 'Lower East Side', location: new google.maps.LatLng(40.714114, -73.990594), weight: 7 },
    //Morningside Heights
    { id: 'Morningside Heights', location: new google.maps.LatLng(40.810395, -73.962722), weight: 7 },
    //Stuy Town
    { id: 'Stuyvesant Town', location: new google.maps.LatLng(40.731943, -73.977888), weight: 7 },
    //Upper East Side
    { id: 'Upper East Side', location: new google.maps.LatLng(40.774168, -73.956790), weight: 7 },
    //Washington Heights
    { id: 'Washington Heights', location: new google.maps.LatLng(40.842625, -73.939343), weight: 7 },
    //Highbridge
    { id: 'Highbridge', location: new google.maps.LatLng(40.836961, -73.927392), weight: 7 },
    //Kingsbridge Heights
    { id: 'Kingsbridge Heights', location: new google.maps.LatLng(40.871891, -73.897691), weight: 7 },
    //Morrisania
    { id: 'Morrisania', location: new google.maps.LatLng(40.831164, -73.904919), weight: 7 },
    //Mott Haven
    { id: 'Mott Haven', location: new google.maps.LatLng(40.809368, -73.922341), weight: 7 },
    //Pelham Parkway
    { id: 'Pelham Parkway', location: new google.maps.LatLng(40.854631, -73.865099), weight: 7 },
    //Riverdale / Kingsbridge
    { id: 'Riverdale', location: new google.maps.LatLng(40.887585, -73.910687), weight: 7 },
    //Throgs Neck
    { id: 'Throgs Neck', location: new google.maps.LatLng(40.818589, -73.821925), weight: 7 },
    //University Heights
    { id: 'University Heights', location: new google.maps.LatLng(40.857647, -73.910059), weight: 7 },
    //Williamsbridge / Baychester
    { id: 'Williamsbridge', location: new google.maps.LatLng(40.874904, -73.843018), weight: 7 },
    //Mid-Island
    { id: 'Mid Island', location: new google.maps.LatLng(40.607018, -74.139371), weight: 7 }
  ];

  let center = new google.maps.LatLng(40.736071, -73.888207);
  map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 11,
      center: center
    });

  heatMap = new google.maps.visualization.HeatmapLayer({
    data: coords,
    map: map
  });

  heatMap.setMap(map);
  heatMap.set('radius', 60);
}
