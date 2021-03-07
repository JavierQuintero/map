const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let myMap = L.map("myMap").setView([4.59524, -74.06937], 15)

L.tileLayer(tilesProvider,{
    maxZoom: 18
}).addTo(myMap)

let iconMarker = L.icon({

    iconUrl: './icon/flutter.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
    
})

L.marker([4.59524, -74.06937], { icon: iconMarker}).addTo(myMap)
