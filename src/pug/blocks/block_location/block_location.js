$(document).ready(()=>{
    ymaps.ready(init);
    function init(){
        let Map = new ymaps.Map("map", {
            center: [37.787509, -122.444838],
            zoom: 16
        });
        var placemark = new ymaps.Placemark([37.787509, -122.444838], {}, {
            iconLayout: 'default#image',
            iconImageHref: './img/Marker.png',
            iconImageSize: [57, 54],
            iconImageOffset: [-20, -47],
        });
        var placemark1 = new ymaps.Placemark([37.787509, -122.444838], {}, {
            iconLayout: 'default#image',
        });
        Map.geoObjects.add(placemark).add(placemark1);
    }

});