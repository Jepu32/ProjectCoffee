
let long= 60.163389;
let lat= 24.930288;
const kartta = L.map('map').setView([long, lat], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
          'contributors',}).addTo(kartta);
L.marker([long, lat]).addTo(kartta)
.bindPopup("Cup o'Roast")
.openPopup();