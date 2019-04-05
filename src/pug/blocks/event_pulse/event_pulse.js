$(document).ready(function(){
    function pulse(e){
        let div      = document.createElement('div'),
            styleDiv = div.style,
            rect     = this.context.getBoundingClientRect(),
            px       = 'px';

        styleDiv.width = styleDiv.height = 50 + px;
        styleDiv.left = e.clientX - rect.left - (40 / 2) + px;
        styleDiv.top = e.clientY - rect.top - (47 / 2) + px;

        div.classList.add('pulse');
        this.context.appendChild(div);
        setTimeout(()=>{div.remove()},700);﻿
    }

    let buttons = document.querySelectorAll("button");
    let forEach = Array.prototype.forEach;
    forEach.call(buttons,(b)=>{
        b.addEventListener('click', {handleEvent: pulse, context:b})
    });
});