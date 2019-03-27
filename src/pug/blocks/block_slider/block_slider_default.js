let $ = require("jquery");

$(document).ready(function() {
        $(".slider#default")
            .slider({
                range: "min",
                min: $("#default").data("min"),
                max: $("#default").data("max"),
                step:$("#default").data("step"),
            });
        $(".ui-slider-range", this).css("background", "#4eb7a8");
});