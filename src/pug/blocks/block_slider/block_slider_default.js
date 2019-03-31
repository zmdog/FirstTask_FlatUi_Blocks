$(document).ready(()=>{
    let sliderDefault = $(".slider#default"),
        Default = $("#default");

    sliderDefault.html(()=>{
        let filler = '',
            val = 0,
            step = Default.data("max")/4;

        for(let i=0; i<5;i++){
            filler+='<li>'+val+'</li>';
            val+=step
            }
        return '<ul>'+ filler +'</ul>';
    });

    sliderDefault
            .slider({
                range: "min",
                min: Default.data("min"),
                max: Default.data("max"),
                step:Default.data("step"),
                change: function(event, ui) {
                    console.log(ui.value)
                }
            });
        $(".ui-slider-range").css("background", "#4eb7a8");
});