$(document).ready(()=>{

    console.log('подключен');
    let filler = '',
        block_stage = $('.block_stage'),
        i = 1;

    while(i<block_stage.data('stage')+1){

        filler+='<li>'+i+'</li>';
        console.log(i);
        i++;
    }
    block_stage.html('<ul>' + filler + '</ul>');
});