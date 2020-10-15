const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//create map
const map = L.map('mapid', options)
.setView([-27.2034655, -49.6335723], 15);

//create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [50, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker
L.marker([-27.2034655, -49.6335723], { icon })
.addTo(map)

//image gallery 
function selectImage(event) {
    const button = event.currentTarget
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    imageContainer.src = image.src
    button.classList.add('active')
}