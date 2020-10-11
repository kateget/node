$(function() {
	// /* accordion */
	$('#question-list').on('click', '.question h4', function (ev) {
		$(this).siblings('p')
				.slideToggle();
		$(this).toggleClass('active');
	})
	
	//trip first FAQ
	$('#question-list > .question:first-child > h4').click();


	// GOTO TOP
	$('.wrap > .flot-navigator > div.top').click(function(ev) {
		$(window).scrollTop(0);
	})
	$(".nav_list li").eq(3).addClass("on").siblings().removeClass("on");
})