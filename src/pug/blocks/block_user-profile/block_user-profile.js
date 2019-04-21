$(document).ready(function () {
    let user_block_profile = $('.block_user-profile');

    user_block_profile.each((index,elem)=>{
        let img = $(elem).children('.user_img'),
            user_block = $(elem).children('.user_block');
        $(img).hover(()=>{
            $(user_block).attr('id','visible');
            console.log('наведено')
        },()=>{
            $(user_block).attr('id','invisible');
            console.log('снято')
        });
        $(user_block).hover(()=>{
            $(user_block).attr('id','visible');
            console.log('наведено')
        },()=>{
            $(user_block).attr('id','invisible');
            console.log('снято')
        });
    });
});