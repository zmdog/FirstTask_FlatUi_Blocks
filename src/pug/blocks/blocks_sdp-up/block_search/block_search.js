$(document).ready(()=>{

    let block_search = $('.block_search'),
        searchBTN = $(block_search).children('.search_button');

    searchBTN.on('click',(event)=>{
        let elem = $(event.currentTarget).parent().attr('id'),
            input = $(event.currentTarget).parent().children('input');


        if(elem === 'false'){
            $(input).css({'backgroundColor':'#e75735','color':'#FFF'});
            $(input).val('I’ve not found what I’m looking for...');
            $(input).attr('disabled','true');
        }

    })

});