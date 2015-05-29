$(document).ready(function () {
    //map 
    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map',{ dragging:true,
                            touchZoom:false,
                            scrollWheelZoom:false})
    .setView([48.285763, 6.940211], 13);

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // add a marker in the given location, attach some popup content to it and open the popup
    L.marker([48.285618, 6.940169]).addTo(map);
        /*.bindPopup("57 Rue d'Hellieule <br> 88100 Saint-Dié-des-Vosges")
        .openPopup();*/
    
    /*map = $('#map');
    map.css('width', $(window).width() / 3);
    map.css('height', $(window).height() / 2);*/

});