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
        $('.video-controls').children('.controls').css({'opacity':'1'})
    },()=>{
        $('.video-controls').children('.controls').css({'opacity':'0'})
    });

    //Whole Process
    video.addEventListener("timeupdate", function() {
        let progress = Math.floor(video.currentTime) / Math.floor(video.duration);
        controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";
    }, false);

    //Current Process
    controls.total.click(function(e) {
        let x = e.pageX;

        if($(controls.total).css('width') === '479px'){
            let z = (x - 650)/$(this).width();
            video.currentTime = z * video.duration;
        }else{
            let z = (x - 112)/$(this).width();
            video.currentTime = z * video.duration;
        }
    });

    //Fullscreen (починить фулскрин)
    controls.btn_fullscreen.click(function(){
        if(controls.fulscreen){
            controls.fulscreen = false;
            $(this).attr('id', 'off');
            $(this).children('i').attr('class','fa fa-arrows-alt');

            $(block_video).css({
                                'position':'relative',
                                'width':'594px',
                                'height':'335px',
                                'top':'0',
                                'left':'0',
                                'transform':'translate(0, 0)'});

            $(video).css({'width':'inherit', 'height':'100%'});
            $(controls.total).css({'width':'479px'});
        }else{
            controls.fulscreen = true;
            $(this).attr('id', 'on');
            $(this).children('i').attr('class','fa fa-compress');

            $(block_video).css({
                                'position':'fixed',
                                'top':'50%',
                                'left':'50%',
                                'transform':'translate(-50%, -50%)',
                                'width':'90%',
                                'height':'90%'});

            $(block_video).children('.video').css({'width':'100%','height':'100%'});
            $(controls.total).css({'width':'1001px'});
        }
    });

});