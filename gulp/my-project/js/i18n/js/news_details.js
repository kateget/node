(function(){
	url = encodeURIComponent( location.href );

	var $shareBtn = $("p.share_icon a");
	$shareBtn[0].href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
	$shareBtn[1].href = 'https://twitter.com/intent/tweet?text=' + url;
	$shareBtn[2].href = 'http://vk.com/share.php?url=' + url;
})();




	