$(document).ready(()=>{

    console.log('подключен');
    let filler = '',
        block_stage = $('.block_stage'),
        i = 1;
    block_stage.on('click',(event)=>{
        let target = event.target;

        if(target.tagName !== 'LI') return;
        let text = $(target).text(),
            items= $(block_stage.children().children()),
            lineOrange = (594 / (block_stage.data('stage') - 1)) * 100 / 594;

        items.each((elem)=>{
            if(Number(elem)<Number(text)){
                console.log(lineOrange);
                items[elem].style.backgroundColor='#e75735';
                items[elem].style.color='#FFF';

                $(block_stage.children('label'))
                    .css({'background'
                            :'linear-gradient(to right, #e75735 '+ (lineOrange * (text - 1)) +'%, #e5e5e5 0%)'});
            } else {
                items[elem].style.backgroundColor='#e5e5e5';
                items[elem].style.color='#888888'
            }
        });

    });

    while(i<block_stage.data('stage')+1){

        filler+='<li>'+i+'</li>';
        i++;
    }
    block_stage.html('<label></label>'+'<ul>' + filler + '</ul>');
});