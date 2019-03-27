let $ = require("jquery");

$(document).ready(function() {
        $(".slider#orange")
            .slider({
                min: $("#orange").data("min"),
                max: $("#orange").data("max"),
                step: $("#orange").data("step"),
                value: 0,
                slide: function(event, ui) {
                    $(".ui-slider-label-orange").text(ui.value);
                },
                change: function (event,ui) {
                    let val = parseFloat(ui.handle.style.left) - 5.4 + '%';
                    $(".ui-slider-label-orange").css("left");
                    $(".ui-slider-label-orange").css('left', val);
                    console.log(val)
                }
            });

        $( ".ui-slider-label-orange" ).text($(".slider#orange").slider( "value" ));
        $( ".ui-slider-label-orange" ).css('left', '-5.4%');
});
