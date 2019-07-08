$(document).ready(function() {
    var map = L.map('mapnode').setView([51.505, -0.09], 10);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1Ijoic2FtZWVycyIsImEiOiJjajB3b2IxbjAwMDFvMnFydDhuMTE3dTJjIn0.Y8C2lmQqZhcM-m3-u2x90A'
    }).addTo(map);

    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    var drawControl = new L.Control.Draw({
	edit: {
	    featureGroup: drawnItems,
            remove: true
	},
	draw: {
            polyline: false,
            polygon: true,
            circle: false,
	    simpleshape: true,
	    marker: true,
	    rectangle: false,
	    toolbar: {
		buttons: {
		    polygon: 'Draw a great polygon',
		    simpleshape: 'Free shape'
		}
	    }
	}
    });
    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, function (e) {
        var type = e.layerType,
            layer = e.layer;

	latlng_array = e.layer._latlngs[0];

        if (type === 'marker') {
            layer.bindPopup('A popup!');
        }

        drawnItems.addLayer(layer);
	drawnItems.eachLayer(function(obj) {
	    console.log(obj.toGeoJSON().geometry.coordinates[0].length);
	});
    });
});
