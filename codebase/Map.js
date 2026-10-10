   // Initialize the map
        var map = L.map('map').setView([0, 0], 2);

        // Add a tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Load the precipitation data
        d3.json('path_to_your_data.json').then(function(data) {
            // Assuming data is in GeoJSON format
            L.geoJSON(data, {
                style: function(feature) {
                    return {
                        fillColor: getColor(feature.properties.precipitation),
                        weight: 1,
                        opacity: 1,
                        color: 'white',
                        fillOpacity: 0.7
                    };
                }
            }).addTo(map);
        });

        // Function to get color based on precipitation value
        function getColor(d) {
            return d > 1000 ? '#08306b' :
                   d > 500  ? '#2171b5' :
                   d > 200  ? '#4292c6' :
                   d > 100  ? '#6baed6' :
                   d > 50   ? '#9ecae1' :
                   d > 20   ? '#c6dbef' :
                   d > 10   ? '#deebf7' :
                              '#f7fbff';
        }