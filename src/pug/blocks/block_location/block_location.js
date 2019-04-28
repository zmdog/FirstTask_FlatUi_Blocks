$(document).ready(()=>{
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [37.787509, -122.444838],
            zoom: 19
        });
    }

});