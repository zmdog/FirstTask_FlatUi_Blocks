$(document).ready(()=>{
    let controls = {
        video: $(".video").children('video'),
        btn_play: $(".btn-play"),
        btn_fullscreen: $(".btn-fullscreen"),
        total: $(".total"),
        progress: $(".current"),
        fulscreen: false
    };

    let video = controls.video[0];

    //Start the Video (исправить реакцию на отдельное окно)
    controls.btn_play.click(function(){
        console.log(video.duration);
        console.log(video.currentTime);
        if (video.paused) {
            video.play();
            $(this).attr('id', 'paused')
        } else {
            video.pause();
            $(this).attr('id', 'unpaused')
        }
    });

    //Whole Process
    video.addEventListener("timeupdate", function() {
        let progress = Math.floor(video.currentTime) / Math.floor(video.duration);
        controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";
    }, false);

    //Current Process
    controls.total.click(function(e) {
        let x = (e.clientX - this.offsetLeft - 600)/$(this).width();
        video.currentTime = x * video.duration;
    });

    //Fullscreen (добавить фулскрин)
    controls.btn_fullscreen.click(function(){
        if(controls.fulscreen){
            $(this).attr('id', 'off');
            controls.fulscreen = false;
            $(this).children('i').attr('class','fa fa-arrows-alt')
        }else{
            $(this).attr('id', 'on');
            controls.fulscreen = true;
            $(this).children('i').attr('class','fa fa-compress')
        }
    });

});