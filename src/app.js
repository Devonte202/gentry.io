//Global variables to make Google Maps API accessible to variables
let map;
let heatMap;
let coords;

//This function is initialized when the page loads
function initMap() {
  coords = [
    //Astoria
    { id: 'Astoria', location: new google.maps.LatLng(40.764458, -73.923734), weight: null },
    //Bay Ridge
    { id: 'Bay Ridge', location: new google.maps.LatLng(40.626362, -74.030270), weight: null },
    //Bayside
    { id: 'Bayside/Little Neck', location: new google.maps.LatLng(40.758640, -73.765632), weight: null },
    //BedSty
    { id: 'Bedford Stuyvesant', location: new google.maps.LatLng(40.687190, -73.942982), weight: null },
    //Bensonhurst
    { id: 'Bensonhurst', location: new google.maps.LatLng(40.613878, -73.993132), weight: null },
    //Borough Park
    { id: 'Borough Park', location: new google.maps.LatLng(40.635057, -73.992629), weight: null },
    //Brooklyn Heights
    { id: 'Brooklyn Heights/Fort Greene', location: new google.maps.LatLng(40.695934, -73.995853), weight: null },
    //Brownsville
    { id: 'Brownsville/Ocean Hill', location: new google.maps.LatLng(40.665197, -73.913388), weight: null },
    //Bushwick
    { id: 'Bushwick', location: new google.maps.LatLng(40.695880, -73.917216), weight: null },
    //Central Harlem
    { id: 'Central Harlem', location: new google.maps.LatLng(40.809084, -73.948250), weight: null },
    //Chelsea
    { id: 'Chelsea/Clinton/Midtown', location: new google.maps.LatLng(40.746612, -74.001675), weight: null },
    //Coney Island
    { id: 'Coney Island', location: new google.maps.LatLng(40.578324, -73.970881), weight: null },
    //East Flatbush
    { id: 'East Flatbush', location: new google.maps.LatLng(40.648396, -73.930904), weight: null },
    //East Harlem
    { id: 'East Harlem', location: new google.maps.LatLng(40.795626, -73.939931), weight: null },
    //East New York
    { id: 'East New York/Starrett City', location: new google.maps.LatLng(40.659017, -73.876148), weight: null },
    //Elmhurst
    { id: 'Elmhurst/Corona', location: new google.maps.LatLng(40.737911, -73.880748), weight: null },
    //Flatbush
    { id: 'Flatbush', location: new google.maps.LatLng(40.641494, -73.959611), weight: null },
    //Flatlands
    { id: 'Flatlands/Canarsie', location: new google.maps.LatLng(40.623524, -73.932195), weight: null },
    //Flushing
    { id: 'Flushing/Whitestone', location: new google.maps.LatLng(40.767604, -73.833591), weight: null },
    //Greenwich Village
    { id: 'Greenwich Village/Financial District', location: new google.maps.LatLng(40.733583, -74.002807), weight: null },
    //Highbridge
    { id: 'Highbridge/South Concourse', location: new google.maps.LatLng(40.836961, -73.927392), weight: null },
    //Hillcrest
    { id: 'Hillcrest/Fresh Meadows', location: new google.maps.LatLng(40.723031, -73.800052), weight: null },
    //Jackson Heights
    { id: 'Jackson Heights', location: new google.maps.LatLng(40.755714, -73.883402), weight: null },
    //Jamaica
    { id: 'Jamaica', location: new google.maps.LatLng(40.702634, -73.789428), weight: null },
    //Kingsbridge Heights
    { id: 'Kingsbridge Heights/Mosholu', location: new google.maps.LatLng(40.871891, -73.897691), weight: null },
    //Lower East Side / Chinatown
    { id: 'Lower East Side/Chinatown', location: new google.maps.LatLng(40.714114, -73.990594), weight: null },
    //Mid-Island
    { id: 'Mid Island', location: new google.maps.LatLng(40.607018, -74.139371), weight: null },
    //Middle Village
    { id: 'Middle Village/Ridgewood', location: new google.maps.LatLng(40.717597, -73.875434), weight: null },
    //Morningside Heights
    { id: 'Morningside Heights/Hamilton Heights', location: new google.maps.LatLng(40.810395, -73.962722), weight: null },
    //Morrisania
    { id: 'Morrisania/Belmont', location: new google.maps.LatLng(40.831164, -73.904919), weight: null },
    //Mott Haven
    { id: 'Mott Haven/Hunts Point', location: new google.maps.LatLng(40.809368, -73.922341), weight: null },
    //Prospect Heights / North Crown Heights
    { id: 'North Crown Heights/Prospect Heights', location: new google.maps.LatLng(40.676671, -73.955660), weight: null },
    //North Shore, Ridgewood
    { id: 'North Shore', location: new google.maps.LatLng(40.704325, -73.902361), weight: null },
    //Ozone Park, Woodhaven
    { id: 'Ozone Park/Woodhaven', location: new google.maps.LatLng(40.686001, -73.853357), weight: null },
    //Park Slope / Carroll Gardens
    { id: 'Park Slope/Carroll Gardens', location: new google.maps.LatLng(40.676108, -73.992609), weight: null },
    //Pelham Parkway
    { id: 'Pelham Parkway', location: new google.maps.LatLng(40.854631, -73.865099), weight: null },
    //Queens Village
    { id: 'Queens Village', location: new google.maps.LatLng(40.715820, -73.741759), weight: null },
    //Rego Park / Forest Hills
    { id: 'Rego Park/Forest Hills', location: new google.maps.LatLng(40.722775, -73.854392), weight: null },
    //Riverdale / Kingsbridge
    { id: 'Riverdale/Kingsbridge', location: new google.maps.LatLng(40.887585, -73.910687), weight: null },
    //Rockaways
    { id: 'Rockaways', location: new google.maps.LatLng(40.591993, -73.797852), weight: null },
    //Sheepshead Bay, Gravesend
    { id: 'Sheepshead Bay/Gravesend', location: new google.maps.LatLng(40.593554, -73.964248), weight: null },
    //Soundview / Parkchester
    { id: 'Soundview/Parkchester', location: new google.maps.LatLng(40.833538, -73.865356), weight: null },
    //South Crown Heights
    { id: 'South Crown Heights', location: new google.maps.LatLng(40.665985, -73.943447), weight: null },
    //South Ozone Park / Howard Beach
    { id: 'South Ozone Park/Howard Beach', location: new google.maps.LatLng(40.663294, -73.836378), weight: null },
    //South Shore
    { id: 'South Shore', location: new google.maps.LatLng(40.699761, -73.901949), weight: null },
    //Stuy Town
    { id: 'Stuyvesant Town/Turtle Bay', location: new google.maps.LatLng(40.731943, -73.977888), weight: null },
    //Sunnyside
    { id: 'Sunnyside/Woodside', location: new google.maps.LatLng(40.743404, -73.919770), weight: null },
    //Sunset Park
    { id: 'Sunset Park', location: new google.maps.LatLng(40.652241, -74.010852), weight: null },
    //Throgs Neck
    { id: 'Throgs Neck/Co-op City', location: new google.maps.LatLng(40.818589, -73.821925), weight: null },
    //University Heights
    { id: 'University Heights/Fordham', location: new google.maps.LatLng(40.857647, -73.910059), weight: null },
    //Upper East Side
    { id: 'Upper East Side', location: new google.maps.LatLng(40.774168, -73.956790), weight: null },
    //Upper West Side
    { id: 'Upper West Side', location: new google.maps.LatLng(40.787029, -73.975578), weight: null },
    //Washington Heights
    { id: 'Washington Heights/Inwood', location: new google.maps.LatLng(40.842625, -73.939343), weight: null },
    //Williamsbridge / Baychester
    { id: 'Williamsbridge/Baychester', location: new google.maps.LatLng(40.874904, -73.843018), weight: null },
    //Williamsburg / Greenpoint
    { id: 'Williamsburg/Greenspoint', location: new google.maps.LatLng(40.719673, -73.953794), weight: null }
  ];

  //Center variable shows where in the map you want the user to see first. Map variable creates new map, with extra options to customize
  const center = new google.maps.LatLng(40.736071, -73.888207);
  map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 11,
      center: center
    });

  //Grabbing HTML elements to gather year values and a button to render map with data based on chosen years
  const year1 = document.getElementById('year1')
  const year2 = document.getElementById('year2')
  const button = document.getElementById('button')

  //Listens to when the button is clicked, then updates the map with new coordinate weights, which determine the level of gentrification
  button.addEventListener('click', (e) => {
    let firstYear = year1.options[year1.selectedIndex].value
    let secondYear = year2.options[year2.selectedIndex].value

    fetch("https://jwv66x6591.execute-api.us-east-2.amazonaws.com/gentryFunction", {
      method: 'post',
      body: JSON.stringify({ year1: firstYear, year2: secondYear })
    }).then(response => response.json()).then(data => {
      console.log(data)
      for (let i = 0; i < coords.length; i += 1) {
        coords[i].weight = data[i].weight
      }
    }).catch(error => console.warn(error))
    updateMap()
  })
}

//Function that updates the map with the new coordinate weights to change layout of heat map
function updateMap() {
  const center = new google.maps.LatLng(40.736071, -73.888207);
  map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 11,
      center: center
    });

  heatMap = new google.maps.visualization.HeatmapLayer({
    data: coords,
    map: map
  })

  heatMap.setMap(map);
  heatMap.set('radius', 60)

}
