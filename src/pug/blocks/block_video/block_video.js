$(document).ready(()=>{
    let controls = {
        video: $(".video").children('video'),
        btn_play: $(".btn-play")
    };

    let video = controls.video[0];

    controls.btn_play.click(function(){
        console.log(video.paused);
        if (video.paused) {
            video.play();
            $(this).attr('id', 'paused')
        } else {
            video.pause();
            $(this).attr('id', 'unpaused')
        }
    });
});