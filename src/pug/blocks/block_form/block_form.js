$(document).ready(()=>{

    function option_check(form){

        // Adding validation conditions and moving part
        let options = $(this).val() && $(this).val().length > 5,
            label =  $(form).children('div');

        // Display the desired moving part depending on the conditions
        if(options){
            $(label).css({'width':'4.0556rem','backgroundColor':'#4eb7a8','display':'block'});
            $(label).html('THANKS!');
            $(label).children('label').css({
                'border-width':'0.2222rem 0.2222rem 0.2222rem 0',
                'color':'#4eb7a8',
                'borderColor':'transparent #4eb7a8 transparent transparent'});
            $(form).attr('id','YES')
        } else{
            $(this).css({'width':'11.1111rem','margin-right':'0.3889rem'});
            $(label).css({'width':'4.0556rem','backgroundColor':'#e75735','display':'block'});
            $(label).html('ERROR');
            $(label).children('label').css({'border-width':'0.2222rem 0.2222rem 0.2222rem 0','color':'#e75735'});
            $(form).attr('id','NO')
        }
    }

    $('.block-form').each(function(){

        // Adding inputs
        let name_input  = $(this).children('.form-name').children('input'),
            email_input = $(this).children('.form-email').children('input');

        // The function call in the input context
        $(name_input).on('input', ()=>{option_check.call(name_input, $(this).children('.form-name'))});
        $(email_input).on('input', ()=>{option_check.call(email_input, $(this).children('.form-email'))});
    });
});