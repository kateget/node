(function (win,doc){
    if (!win.addEventListener) return;
    var html=doc.documentElement,w=640;
    function setFont() {
        var cliWidth=html.clientWidth,cliHeight=html.clientHeight;
        html.style.fontSize=100*(cliWidth/w)+'px';
        doc.getElementsByTagName("body")[0].style.display="block";
    }
    win.addEventListener('resize',setFont,false);
    doc.addEventListener('DOMContentLoaded',setFont,false);
})(window,document);

function pop(e) {
    $(e).show();
    $(".b_bg").show();
}
function hidepop(e) {
    $(e).hide();
    $(".b_bg").hide();
    $(".video_frame").remove();
    $(".alertmain").html("");
}
function pop_vid(v) {
    if (v.length < 10) { alert("Coming soon!"); return; }
    pop(".pop_vid");
    $('<iframe class="video_frame" src="' + v + '" frameborder="0" width="100%" height="250" allowfullscreen></iframe>').appendTo(".pop_vid");
}

var inited = false;
function pop_act() {
    pop(".pop_act");
    if (!inited) {
        // $(".actmain").mCustomScrollbar({
        //     scrollButtons: {
        //         enable: false
        //     }
        // });
        inited = true;
    }
}

var $chinese_id = $('#chinese_id');
var $global_id = $( '#global_id');
function migrate() {
    var chinese_id = $.trim( $chinese_id.val() );
    if( !chinese_id ) return $chinese_id.focus();
    var global_id = $.trim( $global_id.val() );
    if( !global_id ) return $global_id.focus();

    $.ajax({
        type: "POST",
        url: '//mrms.igamecj.com/act/a20180312MoveBind/MoveBind.php',
        data: {
            service_type: 'pubgmobile',
            env: 'release',
            ChinesePlayerId: chinese_id,
            HwPlayerId: global_id,
            lang: '<%= ({
                        en_US: 'en', // 英文
                        lang: 'vi', // 越南语
                        lang: 'th', // 泰语
                        lang: 'en', // 英语
                        lang: 'jp', // 日语
                        lang: 'kr', // 韩语
                        lang: 'id', // 印尼
                        lang: 'zh', // 中文
                        lang: 'tw', // 繁体中文
                        lang: 'ru', // 俄语
                        lang: 'de', // 德语
                        lang: 'fr', // 法语
                        lang: 'es', // 西班牙语
                        lang: 'tr', // 土耳其语
                    })['{# LANG #}'] || 'en' %>',
        },
        success: function(data) {
            var dataObj = JSON.parse(data);
            if (dataObj.iRet == 0) {
                pop_alert('{# 关联成功，奖励将会在2~3天内发放至你的国际版账号 #}');
            } else if (dataObj.iRet == -999) {
                pop_alert('System busy!');
            } else if (dataObj.iRet == -998) {
                pop_alert('{# 输入ID不存在或格式错误 #}');
            } else if (dataObj.iRet == -997) {
                pop_alert('{# 输入ID不存在或格式错误 #}');
                // pop_alert('Not in WhiteList!');
            } else if (dataObj.iRet == -996) {
                pop_alert('{# 该ID已被使用 #}');
                // pop_alert('Chinese PlayerId has beed binded!');
            } else if (dataObj.iRet == -995) {
                pop_alert('{# 该ID已被使用 #}');
                // pop_alert('Global PlayerId has been binded!');
            } else {
                pop_alert('System error!');
            }
        }
    })
}

function pop_alert(str) {
    pop(".pop_alert");
    $(".alertmain").html("<p>" + str + "</p>");
}
