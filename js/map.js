const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let myMap = L.map("myMap").setView([4.59524, -74.06937], 15)

L.tileLayer(tilesProvider,{
    maxZoom: 18
}).addTo(myMap)

let markerDefauld = L.marker([4.59524, -74.07037]).addTo(myMap)

let iconMarker = L.icon({

    iconUrl: './icon/flutter.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40]

})

let markerFlutter = L.marker([4.59524, -74.06937], { icon: iconMarker}).addTo(myMap)

myMap.doubleClickZoom.disable()
myMap.on('dblclick', e => {
  let latLng = myMap.mouseEventToLatLng(e.originalEvent);

  L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(myMap)
})

navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { coords } = pos
      const { latitude, longitude } = coords
      L.marker([latitude, longitude], { icon: iconMarker }).addTo(myMap)
  
      setTimeout(() => {
        myMap.panTo(new L.LatLng(latitude, longitude))
      }, 5000)
    },
    (error) => {
      console.log(error)
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })