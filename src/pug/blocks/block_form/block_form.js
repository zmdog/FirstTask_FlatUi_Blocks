$(document).ready(()=>{

    let block_form = $('.block_form');


    $(block_form).each(function(){

        let form_name  = $(this).children('.form_name'),
            form_email = $(this).children('.form_email'),
            name_input = form_name.children('input'),
            name_label = form_name.children('div'),
            email_input= form_email.children('input'),
            email_label= form_email.children('div');

        $(name_input).on('input', function(){
            let options = $(this).val() && $(this).val().length>5;
            if(options){

                $(name_label).css({'width':'73px','backgroundColor':'#4eb7a8','display':'block'});
                $(name_label).html('THANKS!');
                $(name_label).children('label').css({
                    'border-width':'4px 4px 4px 0',
                    'color':'#4eb7a8',
                    'borderColor':'transparent #4eb7a8 transparent transparent'});
                $(form_name).attr('id','YES')

            } else{

                $(name_input).css({'width':'208px','margin-right':'7px'});
                $(name_label).css({'width':'73px','backgroundColor':'#e75735','display':'block'});
                $(name_label).html('ERROR');
                $(name_label).children('label').css({'border-width':'4px 4px 4px 0','color':'#e75735'});
                $(form_name).attr('id','NO')
            }

        });

        $(email_input).on('input', function(){
            let options = $(this).val() && $(this).val().length>5;

            if(options){

                $(email_label).css({'width':'73px','backgroundColor':'#4eb7a8','display':'block'});
                $(email_label).html('THANKS!');
                $(email_label).children('label').css({
                    'border-width':'4px 4px 4px 0',
                    'color':'#4eb7a8',
                    'borderColor':'transparent #4eb7a8 transparent transparent'});
                $(form_email).attr('id','YES')

            } else{

                $(email_input).css({'width':'208px','margin-right':'7px'});
                $(email_label).css({'width':'73px','backgroundColor':'#e75735','display':'block'});
                $(email_label).html('ERROR');
                $(email_label).children('label').css({'border-width':'4px 4px 4px 0','color':'#e75735'});
                $(form_email).attr('id','NO')

            }

        });





    });

});