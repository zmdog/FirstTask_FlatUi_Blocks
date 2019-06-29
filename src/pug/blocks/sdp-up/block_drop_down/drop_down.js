$(document).ready(()=>{

    $('.drop-down').each(function(){

        let  option_btn = $(this).children('.option').children('.option-btn'),
            drop_down_option = $(this).children('.drop-down-option'),
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

            $(this).children('.option').children('a').text(text);
        })
    });

});