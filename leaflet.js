if (navigator.geolocation) {
    console.log('connected')

}else {
    alret('GeoLocation unavailable')
}

let data = []
function success(geo) {
    if (geo) {
        console.log(geo)
        data.push(geo)
        lat = parseFloat(geo.coords.latitude)
        lon = parseFloat(geo.coords.longitude)
        accuracy= parseFloat(geo.coords.accuracy)
        var map = L.map('map',{attributionControl: false}).setView([lat,lon],16);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        var marker = L.marker([lat,lon]).addTo(map)
        L.circle([lat,lon],{radius:accuracy}).addTo(map)
        marker.bindPopup('you are here');
    }

}

function error(error) {
    alert(error.message+' ,'+ "turn you location on")
    document.getElementById('map').innerHTML = ''
}
const option = {
    enableHighAccuracy: true, 
    maximumAge: 0,
    timeout:5000,
}
navigator.geolocation.getCurrentPosition(success,error,option)





function give() {

   // L.circle([lat,lon],{radius:accuracy}).addTo(map)
    

   let lat = data['0'].coords.latitude
   let lon = data['0'].coords.latitude
   let accuracy = data['0'].coords.accuracy
   let text = `you are at ${lat} longtuide and ${lon} longitude within ${Math.round(accuracy)} meters!` 
   document.getElementById('find').textContent = text


}

function wow() {
    let you = document.querySelector('.status')

    function success(geoloc) {
        console.log(geoloc.coords.latitude)
    }
    let state = false
    function error(error) {
        state = true
        alert(error.message)
        document.getElementById('find').textContent = `${error.message}, allow location access`
    }
    navigator.geolocation.getCurrentPosition(success,error)
    if (!state) {
        document.getElementById('find').textContent = 'your connected !'

    }}