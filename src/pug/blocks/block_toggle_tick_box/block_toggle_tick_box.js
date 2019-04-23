$(document).ready(()=>{

    let block_toggle = $('.block_toggle'),
        block_tick_box = $('.block_tick_box');

    block_toggle.each((index, value)=>{

        $(value).on('click',()=>{

            if($(value).attr('id') === 'OFF'){
                $(value).attr('id', 'ON');
                $(value).children('p').text('ON')
            }else{
                $(value).attr('id', 'OFF');
                $(value).children('p').text('OFF')
            }

            console.log($(value).attr('id'))
        });

    });

    block_tick_box.each((index, value)=>{

        $(value).on('click',()=>{

            if($(value).attr('id') === 'OFF'){
                $(value).attr('id', 'ON');
            }else{
                $(value).attr('id', 'OFF');
            }

            console.log($(value).attr('id'))
        });

    });
});