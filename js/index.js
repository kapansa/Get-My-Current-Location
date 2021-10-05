let mymap = L.map("issMap").setView([0, 0], 3);

let issIcon = L.icon({
  iconUrl: "./images/iss200.png",
  iconSize: [60, 40],
  iconAnchor: [25, 16],
});
let marker = L.marker([0, 0]).addTo(mymap);

CreateISSMap();

SetInitialLocation();

