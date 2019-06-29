$(document).ready(function () {

    $('.user-profile').each((index,elem)=>{
        let img = $(elem).children('.user-img'),
            active_zone = $(elem).children('.active-zone');

            $(img).hover(()=>{
                $(active_zone).css({'width':'100%'});

                $(active_zone).hover(
                    ()=>{
                        $(active_zone).attr('id', 'active');
                        $(active_zone).css({'width':'100%'})},

                    ()=>{
                        $(active_zone).attr('id', 'inactive');
                        $(active_zone).css({'width':'0'})})
                },

                ()=>{
                $(active_zone).css({'width':'0'})
            });
    });
});