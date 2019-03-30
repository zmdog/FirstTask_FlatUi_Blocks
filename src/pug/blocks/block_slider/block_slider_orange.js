let $ = require("jquery");

$(document).ready(function() {
    let sliderOrange = $(".slider#orange"),
        orange = $("#orange"),
        labelOrange = $(".ui-slider-label-orange");

    sliderOrange
        .slider({
            min: orange.data("min"),
            max: orange.data("max"),
            step: orange.data("step"),
            value: 0,
            slide: function(event, ui) {

                labelOrange.text(ui.value)
            },
            change: function (event,ui) {

                let val = parseFloat(ui.handle.style.left) - 5.4 + '%';

                labelOrange.css("left");
                labelOrange.css('left', val);
            }
            });

        labelOrange.text(sliderOrange.slider( "value" ));
        labelOrange.css('left', '-5.4%');
});
