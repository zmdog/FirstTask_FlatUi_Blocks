$(document).ready(()=>{

    let form_name  = $('.form_name'),
        form_email = $('.form_email'),
        name_input = form_name.children('input'),
        name_label = form_name.children('div'),
        email_input= form_email.children('input'),
        email_label= form_email.children('div');

    name_input.on('input', ()=>{
        let options = name_input.val() && name_input.val().length>5;

        if(options){

            $(name_label).css({'width':'73px','backgroundColor':'#4eb7a8'});
            $(name_label).text('THANKS!');

        } else{

            $(name_input).css({'width':'208px','margin-right':'7px'});
            $(name_label).css({'width':'73px','backgroundColor':'#e75735'});
            $(name_label).text('ERROR');

        }

    });

    email_input.on('input', ()=>{
        let options = email_input.val() && email_input.val().length>5;

        if(options){

            $(email_label).css({'width':'73px','backgroundColor':'#4eb7a8'});
            $(email_label).text('THANKS!');

        } else{

            $(email_input).css({'width':'208px','margin-right':'7px'});
            $(email_label).css({'width':'73px','backgroundColor':'#e75735'});
            $(email_label).text('ERROR');

        }

    });

});