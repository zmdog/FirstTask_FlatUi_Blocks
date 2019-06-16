$(document).ready(function(){
    function pulse(event, button){
        let pulse = document.createElement('div'),
            rect  = $(button).offset();

        // The style of pulse
        $(pulse).css({
            'width':'50px',
            'height':'50px',
            'left':event.clientX - rect.left - (40 / 2) + 'px',
            'top':event.clientY - rect.top - (47 / 2) + 'px'
        });

        $(pulse).attr('class', 'pulse');
        $(pulse).appendTo(button);
        // the disappearance of the pulse 700 ms
        setTimeout(()=>{pulse.remove()},700);﻿
    }

    let buttons = $(document).find("button");
    buttons.each((index, button)=>{
        $(button).on('click', ()=>{pulse(event, button)})
    })
});