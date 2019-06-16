$(document).ready(()=>{

    $('.block_slider-orange').each(function(){
        let slider = $(this).children('.slider#orange'),
            label = $(this).find('.ui-slider-label-orange');

        // The creation of the slider
        $(slider).slider({
            min:  $(slider).data("min"),
            max:  $(slider).data("max"),
            step: $(slider).data("step"),
            value:$(slider).data("start_position"),
            create: function(){
                // Start position
                $(label).text($(slider).data("start_position"));
            },
            slide: function(event, ui) {
                // Changing the variable when moving
                $(label).text(ui.value);
            },
        });
    });
});
