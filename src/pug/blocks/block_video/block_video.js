$(document).ready(()=>{
    let block_video = $(".video-controls"),
        controls = {
        video: $(block_video).children('.video').children('video'),
        btn_play: $(".btn-play"),
        btn_fullscreen: $(".btn-fullscreen"),
        total: $(".total"),
        progress: $(".current"),
        fulscreen: false
    };

    let video = controls.video[0];

    //Start the Video (Without the modal window)
    controls.btn_play.click(function(){
        if (video.paused) {
            video.play();
            $(this).attr('id', 'paused')
        } else {
            video.pause();
            $(this).attr('id', 'unpaused')
        }
    });

    //Soft Controls
    $(block_video).hover(()=>{
        $(block_video).children('.controls').css({'opacity':'1'});
        $(block_video).children('.info').css({'opacity':'1', 'z-index':'5'});
    },()=>{
        $(block_video).children('.controls').css({'opacity':'0'});
        $(block_video).children('.info').css({'opacity':'0', 'z-index':'0'});
    });

    //Whole Process
    video.addEventListener("timeupdate", function() {
        let progress = Math.floor(video.currentTime) / Math.floor(video.duration);
        controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";
    }, false);

    //Current Process
    controls.total.click(function(e) {
        let width = $(controls.total).css('width'),
            position = e.offsetX,
            nowWidth = (position*100)/(+width.split('px')[0]),
            duration = video.duration;

        video.currentTime = duration*nowWidth/100
    });

    //Fullscreen
    controls.btn_fullscreen.click(function(){

            if(document.documentElement.clientWidth < 780) {
                if(controls.fulscreen){
                    controls.fulscreen = false;
                    $(this).attr('id', 'off');
                    $(this).children('i').attr('class','fa fa-arrows-alt');

                    $(block_video).css({
                        'position':'relative',
                        'height':'calc(56.25vw)',
                        'top':'0',
                        'left':'0',
                        'transform':'translate(0, 0)',
                        'margin-top':'37px'});

                    let progress = Math.floor(video.currentTime) / Math.floor(video.duration);
                    controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";

                    $(block_video).children('.video').css({'width':'inherit', 'height':'calc(56.25vw)'});
                }else{
                    controls.fulscreen = true;
                    $(this).attr('id', 'on');
                    $(this).children('i').attr('class','fa fa-compress');

                    $(block_video).css({
                        'position':'fixed',
                        'top':'50%',
                        'left':'50%',
                        'transform':'translate(-50%, -50%)',
                        'width':'100%',
                        'height':'100%',
                        'margin-top':'0'});

                    let progress = Math.floor(video.currentTime) / Math.floor(video.duration);
                    controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";

                    $(block_video).children('.video').css({'width':'100%','height':'100%'});
                }
            }
            else{
                if(controls.fulscreen){
                    controls.fulscreen = false;
                    $(this).attr('id', 'off');
                    $(this).children('i').attr('class','fa fa-arrows-alt');

                    $(block_video).css({
                        'position':'relative',
                        'height':'335px',
                        'width':'594px',
                        'top':'0',
                        'left':'0',
                        'transform':'translate(0, 0)',
                        'margin-top':'37px'});

                    let progress = Math.floor(video.currentTime) / Math.floor(video.duration);
                    controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";

                    $(block_video).children('.video').css({'width':'inherit', 'height':'inherit'});
                }else{
                    controls.fulscreen = true;
                    $(this).attr('id', 'on');
                    $(this).children('i').attr('class','fa fa-compress');

                    $(block_video).css({
                        'position':'fixed',
                        'top':'50%',
                        'left':'50%',
                        'transform':'translate(-50%, -50%)',
                        'width':'100%',
                        'height':'100%',
                        'margin-top':'0'});

                    let progress = Math.floor(video.currentTime) / Math.floor(video.duration);
                    controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";

                    $(block_video).children('.video').css({'width':'100%','height':'100%'});
                }
            }
    });

});