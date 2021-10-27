{
    var platform = new H.service.Platform({
        'app_id': '63QVjXlRcmNzjh2V65DX',
        'app_code': '',
        'apikey': 'JrIKJx4wsgrc55EXipNDUcKK6iOsNLNbZOivah06-Us'
    });

    const svgMarkupIcon = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white">H</text></svg>';
    const destinationPoint = { latitude: 52.5264, longitude: 13.3686 };

    var defaultLayers = platform.createDefaultLayers();

    var mapContainer = document.getElementById('mapContainer');
    var mapLayer = defaultLayers.vector.normal.map;

    var lastestCoords = { latitude: 0, longitude: 0 };
    var map = 0;
    var updatesCount = 0;

    /*
        navigator.geolocation.getCurrentPosition(onSuccess, onFailed);
    */

    navigator.geolocation.watchPosition(onSuccess, onFailed);

    //Use a map to show your location
    function onSuccess(pos) {
        let coords = pos.coords;
        updatesCount++;

        let mapOptions = {
            zoom: 10,
            center: { lat: coords.latitude, lng: coords.longitude }
        };

        if (map == 0) {
            map = new H.Map(mapContainer, mapLayer, mapOptions);
        }
        map.addObject(makeMark(coords));
        makeRouteTo(destinationPoint);
        var geocodingParams = {
            prox: coords.latitude + ',' + coords.longitude,
            mode: 'retrieveAddresses',
            maxresults: 1
        };

        var geocoder = platform.getGeocodingService();
        geocoder.geocode(geocodingParams, onGeocoding, onFailed);
    }

    function onFailed(error) {
        console.log("Error: " + error.code + ", message: " + error.message);
    }

    //Draw a marker in your location
    function makeMark(coords) {
        lastestCoords = coords;

        let markerCoords = {
            lat: coords.latitude,
            lng: coords.longitude
        };

        let icon = new H.map.Icon(svgMarkupIcon);
        let markerOptions = {
            icon: icon
        }
        return new H.map.Marker(markerCoords, markerOptions);
    }

    //Design a way to calculate and draw the route from my current location to a given place.
    function calcDistanceToPoint(pointCoords) {
        let distanceTraveledLatitude = pointCoords.latitude - lastestCoords.latitude;
        distanceTraveledLatitude = Math.pow(distanceTraveledLatitude, 2);

        let distanceTraveledLongitude = pointCoords.longitude - lastestCoords.longitude;
        distanceTraveledLongitude = Math.pow(distanceTraveledLongitude, 2);

        return Math.pow(distanceTraveledLatitude + distanceTraveledLongitude);
    }

    function onRouteResult(result) {
        console.log(result);
        if (result.routes.length) {
            console.log(result.routes.length);
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
            let distance = calcDistanceToPoint(pointCoords);
            console.log("Distance traveled: " + distance);
            console.log(lastestCoords.latitude + ',' + lastestCoords.longitude);
            console.log(pointCoords.latitude + ',' + pointCoords.longitude);

            let routingParameters = {
                'transportMode': 'pedestrian',
                'origin': lastestCoords.latitude + ',' + lastestCoords.longitude,
                'destination': pointCoords.latitude + ',' + pointCoords.longitude,
                'return': 'polyline'
            };

            var router = platform.getRoutingService(null, 8);
            console.log("succes");
            router.calculateRoute(routingParameters, onRouteResult, onFailed);
        }

    }

    //Find a way to know the address of your location (reverse geocoding).
    function onGeocoding(result) {
        var location = result.Response.View[0].Result[0];

        ui.addBubble(new H.ui.InfoBubble({
            lat: location.Location.DisplayPosition.Latitude,
            lng: location.Location.DisplayPosition.Longitude
        }, { content: location.Location.Address.Label }));
    };
}