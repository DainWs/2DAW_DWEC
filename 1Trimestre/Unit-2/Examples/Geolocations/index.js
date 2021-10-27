{

    var platform = new H.service.Platform({
        'apikey': 'x3Iq2adK6Gg3TvISq1aJsuwaZtJPeOCyqtKwVFQS5Qw'
    });

    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();

    function makeMark(coords) {
        var svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white">H</text></svg>';
    
        // Create an icon, an object holding the latitude and longitude, and a marker:
        var icon = new H.map.Icon(svgMarkup);
            marker = new H.map.Marker(
                { lat: coords.latitude, lng: coords.longitude },
                {icon: icon}
            );

        return marker;
    }

    function success(pos) {
        let coords = pos.coords;

        var map = new H.Map(
            document.getElementById('mapContainer'),
            defaultLayers.vector.normal.map,
            {
                zoom: 10,
                center: { lat: coords.latitude, lng: coords.longitude }
            });
        map.addObject(makeMark(coords));
        var ui = H.ui.UI.createDefault(map, defaultLayers);
    }

    function error() {}

    navigator.geolocation.getCurrentPosition(success, error);
}