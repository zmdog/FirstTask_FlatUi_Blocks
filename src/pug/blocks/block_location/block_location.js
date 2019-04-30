$(document).ready(()=>{
    ymaps.ready(init);
    function init(){
        let myMap = new ymaps.Map("map", {
            center: [37.787509, -122.444838],
            zoom: 16
        });
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [37.787509, -122.444838]
            }
        });
        myMap.geoObjects.add(myGeoObject)
    }

});