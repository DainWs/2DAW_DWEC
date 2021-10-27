{
    var platform = new H.service.Platform({
        'apikey': 'x3Iq2adK6Gg3TvISq1aJsuwaZtJPeOCyqtKwVFQS5Qw'
    });

    const svgMarkupIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" width="10px" height="10px">
    <circle cx="5" cy="5" r="4" fill="rgb(250, 127, 0)" stroke-width="1" stroke="black" opacity="1"/>
    </svg>`;


    var defaultLayers = platform.createDefaultLayers();

    var lastestCoords = { latitude: 0, longitude: 0};
    var mapContainer = document.getElementById('mapContainer');
    var mapLayer = defaultLayers.vector.normal.map;

    var lastCoords = {};
    var newCoords = {};
    var map = 0;
    var markers = [];

    navigator.geolocation.watchPosition(onSuccess, onFailed);

    //Use a map to show your location
    function onSuccess(pos) {
        let coords = pos.coords;
        newCoords = coords;

        let mapOptions = {
            zoom: 10,
            center: { lat: coords.latitude, lng: coords.longitude }
        };

        if (map == 0) {
            map = new H.Map(mapContainer, mapLayer, mapOptions);
            setInterval(updateMarkerPositions, 5000)
        }
        map.addObject(makeMark(coords));
        makeRouteTo(newCoords);
    }

    function onFailed(error) {
        console.log("Error: " + error.code + ", message: " + error.message);
    }

    //Look for the way to animate your marker
    function makeMark(coords) {
        let markerCoords = {
            lat: coords.latitude,
            lng: coords.longitude
        };

        let icon = new H.map.Icon(svgMarkupIcon);
        let markerOptions = {
            icon: icon
        }

        let marker = new H.map.Marker(markerCoords, markerOptions);
        markers.push(marker);
        return marker;
    }

    //Draw the position of the user correctly although it could be moving.
    function updateMarkerPositions() {
        markers.forEach(
            function (marker) {
                
                let randomPoint = map.getCenter()
                    .walk(
                        Math.random() * 360,
                        Math.random() * 450000
                    );

                let newLat = (newCoords.latitude - lastCoords.latitude);
                let newLog = (newCoords.longitude - lastCoords.longitude);

                let toCorrectUserPos = map.getCenter()
                    .walk(newLat, newLog);

                ease(marker.getGeometry(), toCorrectUserPos, 4000,
                    function (coord) {
                        marker.setGeometry(coord);
                    }
                );

                makeRouteTo(newCoords);
            }
        );
    }

    function ease(
        startCoord = { lat: 0, lng: 0 },
        endCoord = { lat: 1, lng: 1 },
        durationMs = 200,
        onStep = console.log,
        onComplete = function () { },
    ) {
        let raf = window.requestAnimationFrame ||
            function (f) { window.setTimeout(f, 16) };
        let stepCount = durationMs / 16;
        let valueIncrementLat = (endCoord.lat - startCoord.lat) / stepCount;
        let valueIncrementLng = (endCoord.lng - startCoord.lng) / stepCount;
        let sinValueIncrement = Math.PI / stepCount;
        let currentValueLat = startCoord.lat;
        let currentValueLng = startCoord.lng;
        let currentSinValue = 0;

        function step() {
            currentSinValue += sinValueIncrement;
            currentValueLat += valueIncrementLat * (Math.sin(currentSinValue) ** 2) * 2;
            currentValueLng += valueIncrementLng * (Math.sin(currentSinValue) ** 2) * 2;

            if (currentSinValue < Math.PI) {
                onStep({ lat: currentValueLat, lng: currentValueLng });
                raf(step);
            } else {
                onStep(endCoord);
                onComplete();
            }
        }

        raf(step);
    }

    //Draw the route of the user over the map.
    function onRouteResult(result) {
        if (result.routes.length) {
            result.routes[0].sections.forEach((section) => {
                let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

                let routeLine = new H.map.Polyline(linestring, {
                    style: { strokeColor: 'blue', lineWidth: 3 }
                });

                let startMarker = new H.map.Marker(section.departure.place.location);
                let endMarker = new H.map.Marker(section.arrival.place.location);

                map.addObjects([routeLine, startMarker, endMarker]);
                map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox() });
            });
        }
    }

    function makeRouteTo(pointCoords) {
        if (map != 0) {
            let routingParameters = {
                'routingMode': 'fast',
                'transportMode': 'car',
                'origin': lastestCoords.latitude + ',' + lastestCoords.longitude,
                'destination': pointCoords.latitude + ',' + pointCoords.longitude,
                'return': 'polyline'
            };

            var router = platform.getRoutingService(map, 8);
            console.log("succes");
            router.calculateRoute(routingParameters, onRouteResult, onFailed);
        }

    }
}