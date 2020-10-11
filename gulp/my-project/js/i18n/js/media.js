(function(){
    var mediaIdList = new Array();
    var mediaTitleList = new Array();
    var mediaExternalUrlList = new Array();

    // 公用对象
    var $mediaPopup = $("#mediaPopup");
    var rrssbArea = (function(){
        var $rrssbButtons = $(".rrssb-buttons");
        // TODO: 这里的 url 是不是有问题
        var url = location.href.split("media")[0] + "media.shtml?media_id=" ; //+ mediaId;
        var title = "PLAYERUNKNOWN'S BATTLEGROUNDS #ThisIsBattleRoyale " + url;
        $rrssbButtons.rrssb({
            title: title,
            url: url,
            description: "PLAYERUNKNOWN'S BATTLEGROUNDS #ThisIsBattleRoyale " + url
        });
        return {
            url : url,
            title : title,
            $vk : $rrssbButtons.find('.vk'),
            $twitter : $rrssbButtons.find('.twitter'),
        }
    })();
    var $youtube = $('.embaded_youtube');
    var $slick;
    var $allVideoList = $( '.video_list' );

    // 固定对象的事件
    (function(){
        // 弹窗关闭按钮
        $(".btn_ly_close").click(function() {
            $youtube.empty();
            $mediaPopup.hide();
        });
        // tab 切换
        $('.tab_nav li').each(function(i){
            $(this).on('mouseover',function(){
                $(this).addClass('on').siblings().removeClass('on');
                $('.tab_type').eq(i).show().siblings().hide();		
            });
        });
        //上一页，下一页按钮初始化
        $.each($allVideoList, function(key,value) {
            var $page_num = $(value).find(".page_num");
            var $page_next = $page_num.find("a");
            $page_next.data("pagetotal") == $page_next.data("pagenow")
                ? $page_next.css("display","none")
                : "";
        });
        // 刚载入页面，隐藏上一页按钮
        $.each($allVideoList,function(key,value){
            var $value = $(value);
            $value.after($value.find("p").find("a").eq(0).hide().end().end());
        });

        //上一页，下一页点击
        $(".tab_type").on("click",".page_num a",function(){
            var $this = $(this);
            var isFlat = $this.index();//区分当前点击的是哪个按钮 0为上一页，1为下一页
            url = $this.data('pagenext');
            now = $this.data('pagenow') * 1;
            total = $this.data('pagetotal') * 1;
            var $video_list  = $this.parent().prev(".video_list");
            $video_list.find("li").remove();
            $.ajax({
                url: url,
                beforeSend: function (xhr) {
                    xhr.overrideMimeType("text/html;charset=utf-8");
                },
                success: function (req) {
                    var $req = $(req);
                    $this.parent().replaceWith($video_list.append($req).children(".page_num"));
                    var $page_num = $video_list.next(".page_num");
                    if(now === 2 && !isFlat){
                        $page_num.find("a").eq(0).css("display","none");
                    }
                    if($video_list.parent().index()){
                        isFlat && total - now === 1?$$page_num.find("a").eq(1).css("display","none"):"";
                    }else{
                        if(isFlat && total - now === 2
                            && $page_num.find("a").eq(1).attr("data-pagenext").match(/list_n1.shtml/)
                        ){
                            $page_num.find("a").eq(1).css("display","none");
                        }
                    }
                    vedioListReset($video_list);
                }
            });
        });
        // 点击弹出播放
        $allVideoList.on( 'click', 'a', function(){
            var $this = $(this);
            var tabIndex = $allVideoList.index($this.parents('.video_list'));
            switchToVideoListByIndex(tabIndex);
            var mediaId = $this.attr('href').replace( /(^javascript:slickGoTo\(|\);$)/g, '' );
            changePopupContent(mediaId);
        });
    })();

    /**
     * @description 将弹窗内容调整为对应 mediaId
     * @param {string} mediaId 
     */
    function changePopupContent(mediaId){
        // console.log( 'changePopupContent', mediaId );
        mediaId += '';
        var index = mediaIdList.indexOf(mediaId);
        if(index<0) index = 0;
        $slick.slick('slickGoTo', index, true);

        var tweet = mediaTitleList[index];
        rrssbArea.$twitter.attr(
            "href",
            "https://twitter.com/intent/tweet?text=" + encodeURIComponent(
                tweet + " via @PUBATTLEGROUNDS " + rrssbArea.url
            )
        );
        rrssbArea.$vk.attr(
            "href",
            "http://vk.com/share.php?url=" + encodeURIComponent(rrssbArea.url)
                + '&title=' + encodeURIComponent(rrssbArea.title)
        );

        // youtube embeded
        $youtube.empty();		
        var mediaType = mediaExternalUrlList[index].split('!@!')[0];
        if(mediaType == '20'){
            var extenalUrl = mediaExternalUrlList[index].split('!@!')[1];
            $('#embaded_youtube_' + mediaId).html(
                '<iframe frameborder="0" allowfullscreen="1" title="YouTube video player" '
                    + 'width="640" height="360" '
                    + 'src="https://www.youtube.com/embed/' + extenalUrl + '?autoplay=0">'
                    + '</iframe>'
            );
        }
        $mediaPopup.show();
        var $slick_track = $(".slider .slick-track");
        if(!$slick_track.width()){
            $slick_track.width("100%");
            $slick_track.find(".slick-slide").width("100%");
        }
    }

    window.slickGoTo = function(){
        // 不应该使用这个
        // 看前面 $allVideoList.on( 'click', 'a', ... )
    }


    function vedioListReset($this){
        var $video_list = $this.find("li");
        if( $slick && $slick.unslick ) $slick.unslick();
        $slick = $('#mediaPopup .ly_content .share_area').prev()
            .remove().end().before( '<section class="fade slider"/> ')
            .prev();

        //设置当前弹出窗口
        var divHtmlContent = '';

        mediaIdList = [];
        mediaExternalUrlList = [];
        mediaTitleList = [];

        $.each($video_list,function(key,dom){
            var $dom = $(dom);
            var $img = $dom.find("img");
            var $a = $dom.find("a");
            divHtmlContent += (
                "<div>"                                                  +
                    "<div class='ly_header'>"                            +
                        "<h3 class='ly_title'>"+$img.attr("alt")+"</h3>" +
                    "</div>"
            );
            var youtube_id = $a.attr("href").match(/[0-9]+/)[0];
            // console.log( $a.attr('href' ) );
            if(!$a.find("i")[0]){ 
                divHtmlContent += "<img src = '"+$img.attr("src")+"' alt= '"+$img.attr("alt")+"'/>";
                mediaTitleList.push($img.attr("alt"));
                mediaExternalUrlList.push('21!@!');
            }else{
                divHtmlContent += "<span id='embaded_youtube_"+youtube_id+"' class='embaded_youtube'>";
                divHtmlContent += "</span>";
                mediaExternalUrlList.push('20!@!'+$img.attr("youtubeid"));
            }
            mediaIdList.push(youtube_id);
            divHtmlContent += "</div>";
        });
        // console.log( 'slick html', divHtmlContent );
        $slick
            .html(divHtmlContent)
            .slick({
                infinite: true,
                speed: 700,
                fade: true,
                cssEase: 'linear',
            });

        $slick.on('afterChange', function(event, slick, currentSlide) {			
            changePopupContent(mediaIdList[currentSlide]);			
        });
    }

    function switchToVideoListByIndex(index){
        // console.log('switchToVideoListByIndex', index );
        var current = switchToVideoListByIndex.current;
        if( current !== index ){
            vedioListReset($allVideoList.eq(index));
        }
        switchToVideoListByIndex.current = index;
    }

    switchToVideoListByIndex(0);
})();
