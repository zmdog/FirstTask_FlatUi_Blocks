$(document).ready(()=>{
    let sliderDefault = $(".slider#default"),
        Default = $("#default");





    $(sliderDefault).each(function (){

        $(this).html(()=>{
            let filler = '',
                val = 0,
                step = $(this).data("max")/4;

            for(let i=0; i<5;i++){
                filler+='<li>'+val+'</li>';
                val+=step
            }
            return '<ul>'+ filler +'</ul>';
        });

        $(this).slider({
            range: "min",
            min: $(this).data("min"),
            max: $(this).data("max"),
            step:$(this).data("step")
        });
    });
});