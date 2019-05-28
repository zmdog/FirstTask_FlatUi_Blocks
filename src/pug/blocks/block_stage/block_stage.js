$(document).ready(()=>{

    let block_stage = $('.block_stage');

    $(block_stage).each(function(index, elem){


        let filler = '',
            i = 1;
        $(elem).on('click',(event)=>{
            let target = event.target;

            if(target.tagName !== 'LI') return;
            let text = $(target).text(),
                items= $(elem).children().children(),
                lineOrange = (594 / ($(elem).data('stage') - 1)) * 100 / 594;


            items.each(function(element){
                if(+element < +text){

                    items[element].style.backgroundColor='#e75735';
                    items[element].style.color='#FFF';

                    $(elem).children('label')
                        .css({'background'
                                :'linear-gradient(to right, #e75735 '+ (lineOrange * (text - 1)) +'%, #e5e5e5 0%)'});
                } else {
                    items[element].style.backgroundColor='#e5e5e5';
                    items[element].style.color='#888888'
                }
            });
        });

        while(i < $(elem).data('stage')+1){

            filler+='<li>'+i+'</li>';
            i++;
        }
        $(elem).html('<label></label>'+'<ul>' + filler + '</ul>');
    });
});