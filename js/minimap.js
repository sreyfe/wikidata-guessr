//
// Minimap
//

function mminitialize() {
    mymap = L.map("miniMap", {
	    zoomSnap: .01,
	    zoomDelta: 1,
	    wheelPxPerZoomLevel: 150,
	    wheelDebounceTime: 100
    });

    mymap.setView([30, 10], 1)

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(mymap);

    guess2 = L.marker([-999, -999]).addTo(mymap);
    guess2.setLatLng({lat: -999, lng: -999});

    mymap.on("click", function(e) {
        guess2.setLatLng(e.latlng);
        window.guessLatLng = e.latlng;
    })
};
