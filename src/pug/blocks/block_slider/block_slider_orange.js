$(document).ready(()=>{

    $('.block_slider-orange').each(function(){
        let slider = $(this).children('.slider#orange'),
            label = $(this).find('.ui-slider-label-orange');

        $(slider).slider({
            min: $(slider).data("min"),
            max: $(slider).data("max"),
            step: $(slider).data("step"),
            value: 0,
            slide: function(event, ui) {
                $(label).text(ui.value);
            },
        });
        $(label).text('0');
    });
});
