$(document).ready(()=>{

    let block_drop_down = $('.block_drop_down'),
        option_btn = $(block_drop_down).children('.block_option').children('.option-btn'),
        drop_down_option = $(block_drop_down).children('.drop_down_option'),
        block_drop_down_state = false,
        li = $(drop_down_option).children('li');

    option_btn.on('click',()=>{

        if(!block_drop_down_state){
            $(drop_down_option).css({'height':(li.length * 28) + 'px'});
            $(li).css({'display':'block'});
            block_drop_down_state = true
        }else{
            $(drop_down_option).css({'height':'0'});
            block_drop_down_state = false;
            setTimeout(()=>{
                $(li).css({'display':'none'});
            },1000)
        }
    });

    li.on('click',(event)=>{
        let text = $(event.target).text();

        $(block_drop_down).children('.block_option').children('a').text(text);
    })


});