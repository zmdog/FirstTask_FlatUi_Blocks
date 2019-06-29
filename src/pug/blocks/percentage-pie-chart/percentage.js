$(document).ready(function () {
    let $percentage = $(".percentage");

    $percentage.each(function() {
        $(this).circleProgress({
            value: parseInt($(".percent", this).text()) / 100,
            size: 95,
            fill: "#e75735",
            thickness: 6,
            emptyFill: "rgba(255, 255, 255, 1)",
            startAngle: -Math.PI / 2,
            insertMode: "prepend"
        })
    });
});