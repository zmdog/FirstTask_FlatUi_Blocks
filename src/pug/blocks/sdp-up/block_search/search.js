$(document).ready(()=>{

    $('.search').children('.search-button').on('click',(event)=>{
        let elem = $(event.currentTarget).parent().attr('id'),
            input = $(event.currentTarget).parent().children('input');


        if(elem === 'false'){
            $(input).css({'backgroundColor':'#e75735','color':'#FFF'});
            $(input).val('I’ve not found what I’m looking for...');
            $(input).attr('disabled','true');
        }

    })

});