$(document).ready(()=>{

    let block_stage = $('.block_stage');

    $(block_stage).each(function(index, elem){

        // Levels declaration
        let filler = '',
            i = 1;

        // Principle changing of stages
        $(elem).on('click',(event)=>{
            let target = event.target;

            if(target.tagName !== 'LI') return; // make sure what target is LI
            let text = $(target).text(), // Take the content of LI
                stages= $(elem).children().children(), // All stages
                lineOrange = (594 / ($(elem).data('stage') - 1)) * 100 / 594; // Identifying the width to next stage

            // Change color depending on the pressed digit
            stages.each(function(element){
                if(+element < +text){

                    stages[element].style.backgroundColor='#e75735';
                    stages[element].style.color='#FFF';

                    $(elem).children('label')
                        .css({'background'
                                :'linear-gradient(to right, #e75735 '+ (lineOrange * (text - 1)) +'%, #e5e5e5 0%)'});
                } else {
                    stages[element].style.backgroundColor='#e5e5e5';
                    stages[element].style.color='#888888'
                }
            });
        });

        // Creating the stages
        while(i < $(elem).data('stage')+1){

            filler+='<li>'+i+'</li>';
            i++;
        }
        $(elem).html('<label></label>'+'<ul>' + filler + '</ul>');
    });
});