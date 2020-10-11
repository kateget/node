$(function(){
	$('.tab_nav li').each(function(i){
		$(this).on('mouseover',function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.tab_type').eq(i).show().siblings().hide();
		})
	})
})
//nav
function jump(){
	var hrefUrl = window.location.href;
	hrefUrl = hrefUrl.split('?nav=')[1];
	$(".nav_list").find('li').eq(hrefUrl).addClass('on').siblings().removeClass('on');
	}
jump();

//上一页，下一页按钮初始化
function pageButtonInit(){
	var $news = $(".tab_type .news_list");
	$.each($news, function(key,value) {
		var $page_num = $(value).find(".page_num");
		var $page_next = $page_num.find("a");
		$page_next.attr("data-pagetotal") == $page_next.attr("data-pagenow")?$page_next.css("display","none"):"";
	});
	$.each($news,function(key,value){
		var $value = $(value);
		$value.after($value.find("p.page_num").find("a").eq(0).css("display","none").end().end());
	})
}
pageButtonInit();

//上一页，下一页点击
$(".tab_type").on("click",".page_num a",function(){
	var $this = $(this);
	var isFlat = $this.index();//区分当前点击的是哪个按钮 0为上一页，1为下一页
	url = $this.data('pagenext');
	now = $this.data('pagenow') * 1;
    total = $this.data('pagetotal') * 1;
    var $news_list  = $this.parent().prev(".news_list");
    $news_list.find("li").remove();
	$.ajax({
        url: url,
        beforeSend: function (xhr) {
            xhr.overrideMimeType("text/html;charset=utf-8");
        },
        success: function (req) {
            var $req = $(req.replace(/\(none\)/g,'{# LANG #}'));
            $this.parent().replaceWith($news_list.append($req).children(".page_num"));
            var $page_num = $news_list.next(".page_num");
         	if(now === 2 && !isFlat){
         		$page_num.find("a").eq(0).css("display","none");
         	}
         	if($news_list.parent().index()){
         		isFlat && total - now === 1?$page_num.find("a").eq(1).css("display","none"):"";
         	}else{
         		if(isFlat && total - now === 2 && $page_num.find("a").eq(1).attr("data-pagenext").match(/list_n1.shtml/) || isFlat && total - now === 1){
	         		$page_num.find("a").eq(1).css("display","none");
	         	}
         	}
        }
    });
	
});