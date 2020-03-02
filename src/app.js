let map;

function initMap() {
  try {
    let queensCoords = [
      //Astoria
      { location: new google.maps.LatLng(40.764458, -73.923734), weight: 10 },
      //Bayside
      { location: new google.maps.LatLng(40.758640, -73.765632), weight: 10 },
      //Little Neck
      { location: new google.maps.LatLng(40.761262, -73.732781), weight: 10 },
      //Elmhurst
      { location: new google.maps.LatLng(40.737911, -73.880748), weight: 10 },
      //Flushing
      { location: new google.maps.LatLng(40.767604, -73.833591), weight: 10 },
      //Hillcrest
      { location: new google.maps.LatLng(40.723031, -73.800052), weight: 10 },
      //Jackson Heights
      { location: new google.maps.LatLng(40.755714, -73.883402), weight: 10 },
      //Jamaica
      { location: new google.maps.LatLng(40.702634, -73.789428), weight: 10 },
      //Middle Village
      { location: new google.maps.LatLng(40.717597, -73.875434), weight: 10 },
      //North Shore, Ridgewood
      { location: new google.maps.LatLng(40.704325, -73.902361), weight: 10 },
      //Ozone Park, Woodhaven
      { location: new google.maps.LatLng(40.686001, -73.853357), weight: 10 },
      //Queens Village
      { location: new google.maps.LatLng(40.715820, -73.741759), weight: 10 },
      //Rego Park / Forest Hills
      { location: new google.maps.LatLng(40.722775, -73.854392), weight: 10 },
      //Rockaways
      { location: new google.maps.LatLng(40.591993, -73.797852), weight: 10 },
      //South Shore
      { location: new google.maps.LatLng(40.699761, -73.901949), weight: 10 },
      //Sunnyside
      { location: new google.maps.LatLng(40.743404, -73.919770), weight: 10 }
    ]

    let brooklynCoords = [
      //Bay Ridge
      { location: new google.maps.LatLng(40.626362, -74.030270), weight: 10 },
      //BedSty
      { location: new google.maps.LatLng(40.687190, -73.942982), weight: 10 },
      //Bensonhurst
      { location: new google.maps.LatLng(40.613878, -73.993132), weight: 10 },
      //Borough Park
      { location: new google.maps.LatLng(40.635057, -73.992629), weight: 10 },
      //Brooklyn Heights
      { location: new google.maps.LatLng(40.695934, -73.995853), weight: 10 },
      //Brownsville
      { location: new google.maps.LatLng(40.665197, -73.913388), weight: 10 },
      //Bushwick
      { location: new google.maps.LatLng(40.695880, -73.917216), weight: 10 },
      //Coney Island
      { location: new google.maps.LatLng(40.578324, -73.970881), weight: 10 },
      //East Flatbush
      { location: new google.maps.LatLng(40.648396, -73.930904), weight: 10 },
      //East New York
      { location: new google.maps.LatLng(40.659017, -73.876148), weight: 10 },
      //Flatbush
      { location: new google.maps.LatLng(40.641494, -73.959611), weight: 10 },
      //Flatlands
      { location: new google.maps.LatLng(40.623524, -73.932195), weight: 10 },
      //Prospect Heights / North Crown Heights
      { location: new google.maps.LatLng(40.676671, -73.955660), weight: 10 },
      //Park Slope / Carroll Gardens
      { location: new google.maps.LatLng(40.676108, -73.992609), weight: 10 },
      //Sheepshead Bay, Gravesend
      { location: new google.maps.LatLng(40.593554, -73.964248), weight: 10 },
      //Soundview / Parkchester
      { location: new google.maps.LatLng(40.833538, -73.865356), weight: 10 },
      //South Crown Heights
      { location: new google.maps.LatLng(40.665985, -73.943447), weight: 10 },
      //South Ozone Park / Howard Beach
      { location: new google.maps.LatLng(40.663294, -73.836378), weight: 10 },
      //Sunset Park
      { location: new google.maps.LatLng(40.652241, -74.010852), weight: 10 },
      //Williamsburg / Greenpoint
      { location: new google.maps.LatLng(40.719673, -73.953794), weight: 10 }
    ]

    let manhattanCoords = [
      //Central Harlem
      { location: new google.maps.LatLng(40.809084, -73.948250), weight: 10 },
      //Chelsea
      { location: new google.maps.LatLng(40.746612, -74.001675), weight: 10 },
      //East Harlem
      { location: new google.maps.LatLng(40.795626, -73.939931), weight: 10 },
      //Greenwich Village
      { location: new google.maps.LatLng(40.733583, -74.002807), weight: 10 },
      //Lower East Side / Chinatown
      { location: new google.maps.LatLng(40.714114, -73.990594), weight: 10 },
      //Morningside Heights
      { location: new google.maps.LatLng(40.810395, -73.962722), weight: 10 },
      //Stuy Town
      { location: new google.maps.LatLng(40.731943, -73.977888), weight: 10 },
      //Upper East Side
      { location: new google.maps.LatLng(40.774168, -73.956790), weight: 10 },
      //Washington Heights
      { location: new google.maps.LatLng(40.842625, -73.939343), weight: 10 }
    ]

    let bronxCoords = [
      //Highbridge
      { location: new google.maps.LatLng(40.836961, -73.927392), weight: 10 },
      //Kingsbridge Heights
      { location: new google.maps.LatLng(40.871891, -73.897691), weight: 10 },
      //Morrisania
      { location: new google.maps.LatLng(40.831164, -73.904919), weight: 10 },
      //Mott Haven
      { location: new google.maps.LatLng(40.809368, -73.922341), weight: 10 },
      //Pelham Parkway
      { location: new google.maps.LatLng(40.854631, -73.865099), weight: 10 },
      //Riverdale / Kingsbridge
      { location: new google.maps.LatLng(40.887585, -73.910687), weight: 10 },
      //Throgs Neck
      { location: new google.maps.LatLng(40.818589, -73.821925), weight: 10 },
      //University Heights
      { location: new google.maps.LatLng(40.857647, -73.910059), weight: 10 },
      //Williamsbridge / Baychester
      { location: new google.maps.LatLng(40.874904, -73.843018), weight: 10 }
    ]

    let statenIslandCoords = [
      //Mid-Island
      { location: new google.maps.LatLng(40.607018, -74.139371), weight: 10 }
    ]

    let center = new google.maps.LatLng(40.742054, -73.769417);
    map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 11,
        center: center
      });

    let queensHeatMap = new google.maps.visualization.HeatmapLayer({
      data: queensCoords,
      map: map
    });

    let manhattanHeatMap = new google.maps.visualization.HeatmapLayer({
      data: manhattanCoords,
      map: map
    });

    let brooklynHeatMap = new google.maps.visualization.HeatmapLayer({
      data: brooklynCoords,
      map: map
    });

    let bronxHeatMap = new google.maps.visualization.HeatmapLayer({
      data: bronxCoords,
      map: map
    });

    let statIslandHeatMap = new google.maps.visualization.HeatmapLayer({
      data: statenIslandCoords,
      map: map
    });

    queensHeatMap.setMap(map);
    queensHeatMap.set('radius', 50);
    manhattanHeatMap.setMap(map);
    manhattanHeatMap.set('radius', 50);
    brooklynHeatMap.setMap(map);
    brooklynHeatMap.set('radius', 50);
    bronxHeatMap.setMap(map);
    bronxHeatMap.set('radius', 50);
    statIslandHeatMap.setMap(map);
    statIslandHeatMap.set('radius', 50);
  }
  catch (err) {
    console.error(err)
  }
}
