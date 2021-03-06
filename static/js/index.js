window.onload = function () {

    //初始化
    var video = $('#video1').videoCt({
        title: '使徒行者2',              //标题
        volume: 0.5,                //音量
        barrage: true,              //弹幕开关
        comment: true,              //弹幕
        reversal: true,             //镜像翻转
        playSpeed: true,            //播放速度
        update: false,               //下载
        autoplay: false,            //自动播放
        clarity: {
            type: ['高清'],            //清晰度
            src: ['/static/video/shituxingzhe_12[avc].mp4']      //链接地址
        },
        commentFile: ''           //导入弹幕json数据
        // commentFile: '/static/js/comment.json'           //导入弹幕json数据
    });

    //扩展
    video.title;                    //标题
    video.status;                   //状态
    video.currentTime;              //当前时长
    video.duration;                 //总时长
    video.volume;                   //音量
    video.clarityType;              //清晰度
    video.claritySrc;               //链接地址
    video.fullScreen;               //全屏
    video.reversal;                 //镜像翻转
    video.playSpeed;                //播放速度
    video.cutover;                  //切换下个视频是否自动播放
    video.commentTitle;             //弹幕标题
    video.commentId;                //弹幕id
    video.commentClass;             //弹幕类型
    video.commentSwitch;            //弹幕是否打开
    $('#video1').bind('ended', function() {
        console.log('弹幕json数据：\n'+ video.comment());              //获取弹幕json数据
    });
}