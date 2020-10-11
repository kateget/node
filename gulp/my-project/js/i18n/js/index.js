$(function() {
    setTimeout(function() {
        $(".head_video").css("display", "block");
    }, 3000)

})


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('mainPlayer', {
        height: '1120',
        width: '1920',
        videoId: 'CLbhbJrWd9I',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'enablejsapi': 1,
            'wmode': 'transparent',
            'disablekb': '1',
            'modestbranding ': '0'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(e) {
    var frm = $(e.target.getIframe());
    if (e.data === YT.PlayerState.ENDED) {
        if ('mainPlayer' === frm.attr('id')) {
            player.playVideo();
        }
    }
    if (e.data === YT.PlayerState.BUFFERING) {
        if ('mainPlayer' === frm.attr('id')) {
            player.setPlaybackQuality('hd1080');
        }
    }
    console.log(2)
        // console.log(1)
}

function onPlayerReady(e) {
    $('#mainPlayer').css('width', '');
    $('#mainPlayer').css('height', '');
    player.setPlaybackQuality('hd1080');
}

var enableYoutube = function() {
    var deferred = $.Deferred();
    var img = new Image();
    img.onload = function() {
        return deferred.resolve();
    };
    img.onerror = function() {
        return deferred.reject();
    };
    img.src = "https://www.youtube.com/yts/img/pixel-vfl3z5WfW.gif?" + new Date().getTime();
    return deferred.promise();
};
(function() {
    $.when(enableYoutube()).done(function() {
        $('body').append('<script type="text/javascript" src="//d1wfiv6sf8d64f.cloudfront.net/static/pc/js/player.js"></script>');
    }).fail(function() {});
})();

//slide
var swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'coverflow',
    paginationClickable: true,
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    coverflow: {
        rotate: 30,
        stretch: 50,
        depth: 200,
        modifier: 2,
        slideShadows: true,
    },
    observer: true
});

function get_cookie(Name) {
    var search = Name + "=" //查询检索的值
    var returnvalue = ""; //返回值
    if (document.cookie.length > 0) {
        sd = document.cookie.indexOf(search);
        if (sd != -1) {
            sd += search.length;
            end = document.cookie.indexOf(";", sd);
            if (end == -1)
                end = document.cookie.length;
            //unescape() 函数可对通过 escape() 编码的字符串进行解码。
            returnvalue = unescape(document.cookie.substring(sd, end))
        }
    }
    return returnvalue;
}

function judge_cookit() {
    if (!get_cookie('first_into').length) {
        window.location.href = "/event/re2/";
        document.cookie = "first_into=yes"
    }
}
// judge_cookit();

(function() {
    var $wrap = $(".wrap");
    if ($wrap.is(".TW")) {
        var $facebook = $wrap.find(".facebook"),
            $youtube = $wrap.find(".youtube"),
            $in = $wrap.find(".ins");
        $facebook.attr("href", 'https://www.facebook.com/PUBGMOBILE.TW.OFFICIAL');
        $youtube.attr("href", 'https://www.youtube.com/channel/UCkBoytA_J2Mx6UQkkITCV_w');
        $in.attr("href", 'https://www.instagram.com/pubg_mobile_tw');

        $wrap.find(".game_slide .swiper-slide:not('.TW')").remove();
        $wrap.find('.head_slogn').attr('background-image', '../images/slogn_TW.png');
        $(".top_log .top_tit").hide();
        $(".top_log .top_tit.tw").show();
    } else {
        $(".top_log .top_tit.tw").hide();
    }
})()