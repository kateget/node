//nav
$("#btnNavSlide").bind("touchstart", function() {
    if ($(".G_open").length) {
        $("#commonNav").removeClass("G_open");
        $("#btnNavSlide").removeClass("G_close");
    } else {
        $("#commonNav").addClass("G_open");
        $("#btnNavSlide").addClass("G_close");
    }
});

$(".item_index.download").click(function() {
    $(".down_list.{# LANG #}").slideToggle(200);
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

        $wrap.find(".game_slide .swiper-slide:not('.tw')").remove();
        $wrap.find('.head_slogn').attr('background-image', '../images/slogn_TW.png');
        $("#btnNavSlide").remove();
        $(".link_com a:not('.tw')").remove();

    } else {
        $wrap.find(".game_slide .swiper-slide.TW").remove();
    }
})()

$(".events-dd").on("touchstart", function() {
    if ($(this).find(".events-icon").is(".the-icon1")) {
        $(this).find('.events-icon').removeClass('the-icon1').addClass('the-icon2')
    } else {
        $(this).find('.events-icon').removeClass('the-icon2').addClass('the-icon1')
    }
})