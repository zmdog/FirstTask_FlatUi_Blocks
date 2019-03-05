$(document).ready(function () {
    $(".block_percentage").each(function() {
        $(this).circleProgress({
            value: parseInt($(".percentage", this).text()) / 100,
            size: 95,
            fill: "#e75735",
            thickness: 5,
            emptyFill: "#FFF",
            startAngle: -Math.PI/2,
        })
    });
});