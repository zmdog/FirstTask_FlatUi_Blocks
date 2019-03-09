const $ = require('jquery');

$(document).ready(function() {
    let sliders = $('.block_slider');



    $.each(sliders,(index, elem)=>{

        console.log(elem.children[0].className);

        if(elem.children[0].className === "default"){
            let slider = elem.children[0],
                max = slider.max,
                step = max / 5;

            for(let i = 0; i<(Number(max)+step);){
                let list =  $('#tickmarks_'+slider.max);
                list.append('<option></option>');
                let option = list.children('option').last();
                option.attr('label', i);
                option.attr('value', i);
                i+=step;
            }


            $(elem.children[0]).on('input', function () {
                let val = (slider.value * 100) / slider.max;
                console.log(slider.value, slider.max);

                $(this).css('background',
                    'linear-gradient(to right, ' +
                    '#4eb7a8 0%, #4eb7a8 '+ val +'%' +
                    ', #e5e5e5 0%,#e5e5e5 100%)'
                );

            })
        }

    });
});