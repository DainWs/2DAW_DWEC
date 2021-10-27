{
    var mapDetails = document.getElementById('mapDetails');

    var lastestCoords = {latitude: 0, longitude: 0 };
    var updatesCount = 0;

    //Find the way to meassure the distance traveled.
    function calcDistanceTraveled(newCoords) {
        let distanceTraveledLatitude = newCoords.latitude - lastestCoords.latitude;
        distanceTraveledLatitude = Math.pow(distanceTraveledLatitude, 2);

        let distanceTraveledLongitude = newCoords.longitude - lastestCoords.longitude;
        distanceTraveledLongitude = Math.pow(distanceTraveledLongitude, 2);

        lastestCoords = newCoords;
        return Math.sqrt((distanceTraveledLatitude + distanceTraveledLongitude));
    }

    //If it's available, show the current position (latitude and longitude)
    function onSuccess(pos) {
        let coords = pos.coords;
        mapDetails.innerHTML = 
            "latitude: " + coords.latitude + "<br/>" +
            "longitude: " + coords.longitude + "<br/>" +
            "updates count: " + updatesCount + "<br/>" +
            "Distance traveled: " + calcDistanceTraveled(coords);
        updatesCount++;
    }

    //If it isn't available, show a message for each and everyone of the possible errors.
    function onFailed(error) {
        mapDetails.innerHTML = "Error: " + error.code + ", message: " + error.message;
    }

    // Test if geolocation is available.
    /*
        navigator.geolocation.getCurrentPosition(onSuccess, onFailed);
    */

    //Improve your code so you show the position continuously (although the user could be in moving, so it could change)
    navigator.geolocation.watchPosition(onSuccess, onFailed);

}