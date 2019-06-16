$(document).ready(()=>{

    $('.block_drop_down').each(function(){

        let  option_btn = $(this).children('.block_option').children('.option-btn'),
            drop_down_option = $(this).children('.drop_down_option'),
            block_drop_down_state = false,
            li = $(drop_down_option).children('li');

        option_btn.on('click',()=>{

            if(!block_drop_down_state){
                $(drop_down_option).css({'height':(li.length * 28) + 'px'});
                block_drop_down_state = true
            }else{
                $(drop_down_option).css({'height':'0'});
                block_drop_down_state = false;
            }
        });

        li.on('click',(event)=>{
            let text = $(event.target).text();

            $(this).children('.block_option').children('a').text(text);
        })
    });

});