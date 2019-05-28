$(document).ready(()=>{
    let sliderOrange = $(".slider#orange");


    $(sliderOrange).each(function(){


    $(this).slider({
            min: $(this).data("min"),
            max: $(this).data("max"),
            step: $(this).data("step"),
            value: 0,
            slide: function(event, ui) {

                $(this).children('span').text(' ');
                $(this).children('label').text(ui.value)

            },
            change: function (event,ui) {

                let val = parseFloat(ui.handle.style.left) - 6.4 + '%';

                $(this).children('label').css("left");
                $(this).children('label').css('left', val);

            }
        });

        $(this).children('span').text(' ');
        $(this).children('label').text('0');
        $(this).children('label').css('left', '-6.3%');

    });
});
