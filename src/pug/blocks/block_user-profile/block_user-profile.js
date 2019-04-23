$(document).ready(function () {
    let user_block_profile = $('.block_user-profile');

    user_block_profile.each((index,elem)=>{
        let img = $(elem).children('.user_img'),
            active_zone = $(elem).children('.active_zone');

            $(img).hover(()=>{

                $(active_zone).css({'width':'100%'});

                $(active_zone).hover(
                    ()=>{
                    $(active_zone).css({'width':'100%'})},

                    ()=>{
                    $(active_zone).css({'width':'0'})})
                },

                ()=>{
                $(active_zone).css({'width':'0'})
            });
    });
});