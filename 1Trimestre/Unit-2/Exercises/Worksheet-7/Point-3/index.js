{
    var lastestCoords = { latitude: 52.5264, longitude: 13.3686 };
    var updatesCount = 0;

    /*
        navigator.geolocation.getCurrentPosition(onSuccess, onFailed);
    */

    var map = L.map('mapid').setView([0, 0], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoiam9zZS1hbnRvbmlvLWR1YXJ0ZSIsImEiOiJja3VmY3NnYTkxNDcxMm9ydnpydWVpZHI3In0.ecV-o3sk2ItFhWpP9tENmg'
    }).addTo(map);

    navigator.geolocation.watchPosition(onSuccess, onFailed);



    //Use a map to show your location
    function onSuccess(pos) {
        let coords = pos.coords;
        updatesCount++;
        map.setView([coords.latitude, coords.longitude], 13);

        L.marker([coords.latitude, coords.longitude]).addTo(map);
        makeRouteTo(coords);
        console.log("distance : " + calcDistanceToPoint(coords));

        lastestCoords = coords;
    }

    function onFailed(error) {
        console.log("Error: " + error.code + ", message: " + error.message);
    }

    function makeRouteTo(pointCoords) {
        L.Routing.control({
            waypoints: [
                L.latLng(lastestCoords.latitude, lastestCoords.longitude),
                L.latLng(pointCoords.latitude, pointCoords.longitude)
            ]
        }).addTo(map);
    }

    function calcDistanceToPoint(pointCoords) {
        let distanceTraveledLatitude = pointCoords.latitude - lastestCoords.latitude;
        distanceTraveledLatitude = Math.pow(distanceTraveledLatitude, 2);

        let distanceTraveledLongitude = pointCoords.longitude - lastestCoords.longitude;
        distanceTraveledLongitude = Math.pow(distanceTraveledLongitude, 2);

        return Math.pow(distanceTraveledLatitude + distanceTraveledLongitude);
    }
}