$(function(){
	var swiper = new Swiper('.swiper-container1', {
		pagination: {
        el: '.swiper-pagination',
        clickable: true,
	        renderBullet: function (index, className) {
	          return '<span class="' + className + '">' + (index + 1) + '</span>';
	        },
	      },
	    slidesPerView: 4,
	    paginationClickable: true,
	    spaceBetween: 10,
	    touchRatio:0.5,  
       longSwipesRatio:0.1,  
       threshold:50,  
       followFinger:false,  
	    grabCursor:true,//使swiperhover变成手型
	    navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
		on:{
		   slideChange: function(){
		   	var $swiper_container = $(".swiper-container1");
		    var index =  $swiper_container
		    	.find(".swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active").index();
		    $swiper_container.siblings(".pagination")
		    	.find(".page.hover").removeClass("hover").end()
		    	.find(".page").eq(index).addClass("hover");
		   },
		},
		autoplayDisableOnInteraction : false,//用户点击后，还能自动播放
	    autoplay: {
		    delay: 1000,
		    stopOnLastSlide: false,
		    disableOnInteraction: true,
		},
	});
	var swiper2 = new Swiper('.swiper-container2', {
		pagination: {
        el: '.swiper-pagination',
        clickable: true,
	        renderBullet: function (index, className) {
	          return '<span class="' + className + '">' + (index + 1) + '</span>';
	      },
	    },
		touchRatio:0.5,  
       longSwipesRatio:0.1,  
       threshold:50,  
       followFinger:false,  
	    slidesPerView: 4,
	    paginationClickable: true,
	    spaceBetween: 10,
	    grabCursor:true,//使swiperhover变成手型
	    navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
		observeParents:true,//修改swiper的父元素时，自动初始化swiper
		autoplayDisableOnInteraction : false,//用户点击后，还能自动播放
		on:{
		   slideChange: function(){
		   	var $swiper_container = $(".swiper-container2");
		    var index =  $swiper_container
		    	.find(".swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active").index();
		    $swiper_container.siblings(".pagination")
		    	.find(".page.hover").removeClass("hover").end()
		    	.find(".page").eq(index).addClass("hover");
		   },
		},
	    autoplay: {
		    delay: 1000,
		    stopOnLastSlide: false,
		    disableOnInteraction: true,
		},
	});

	var swiper_container_video = new Swiper('.swiper-container-video', {
		pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
		 touchRatio:0.5,  
       longSwipesRatio:0.1,  
       threshold:50,  
       followFinger:false,  
	    slidesPerView: 3,
	    spaceBetween: 10,
	    grabCursor:true,//使swiperhover变成手型
	    navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
	    slidesPerColumn:2,
	    on:{
		   slideChange: function(){
		   	var $swiper_container = $(".swiper-container-video");
		    var index =  $swiper_container
		    	.find(".swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active").index();
		    $swiper_container.siblings(".pagination")
		    	.find(".page.hover").removeClass("hover").end()
		    	.find(".page").eq(index).addClass("hover");
		   },
		},
	    autoplay : 2000,
	});
	var header_swiper_container = new Swiper('.header-swiper-container', {
	   pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
		 touchRatio:0.5,  
       longSwipesRatio:0.1,  
       threshold:50,  
       loop:true,
       followFinger:false,  
	    slidesPerView: 1,
	    spaceBetween: 10,
	    grabCursor:true,//使swiperhover变成手型
	    navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
		on:{
		   slideChange: function(){
		   	var $swiper_container = $(".header-swiper-container");
		    var index =  $swiper_container
		    	.find(".swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active").index();
		    $swiper_container.siblings(".pagination")
		    	.find(".page.hover").removeClass("hover").end()
		    	.find(".page").eq(index).addClass("hover");
		   },
		},
	    autoplay : 2000,
	});
	var live_swiper_container = new Swiper('.live-swiper-container', {
		pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
	    slidesPerView: 1,
	    spaceBetween: 10,
	    loopAdditionalSlides:8,//防止swiper出现断篇
	    grabCursor:true,//使swiperhover变成手型
	    navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
	    autoplay : 2000,
	});
	var indonesiaData = [
		["Rahmadz1","Rahmad",420,500,920,260,395,655,0,160,160,680,1055,1735],
		["ndrev1ce","Ndrev1ce",240,315,555,160,180,340,160,500,660,560,995,1555],
		["FKG","Andy setyawan",180,395,575,0,90,90,160,350,510,340,835,1175],
		["VILOIO","Sarah Viloid",20,140,160,180,315,495,200,240,440,400,695,1095],
		["Zero Death","Ahmad Naufal",60,240,300,0,110,110,200,395,595,260,745,1005],
		["Team Jamet","Odyseus",20,350,370,40,240,280,40,285,325,100,875,975],
		["KillZone Noxius","FearUs",0,70,70,80,500,580,0,315,315,80,885,965],
		["WaniTok","Anggi Julianata",80,260,340,60,200,260,20,200,220,160,660,820],
		["Chicken King","syarief",0,150,150,80,350,430,60,150,210,140,650,790],
		["TmT46","Tepe46",40,110,150,140,285,425,80,120,200,260,515,775],
		["Bellus Venatus","Jeje",160,220,380,140,160,300,0,80,80,300,460,760],
		["RelaxDude","ZimzAjaib",40,285,325,20,140,160,0,180,180,60,605,665],
		["TOU GAMING","Felliz Santang",0,200,200,0,150,150,40,260,300,40,610,650],
		["STMJ Squad","Qyuu_Cosplayer",0,130,130,0,80,80,120,220,340,120,430,550],
		["RECCA","Randika",100,160,260,60,130,190,20,70,90,180,360,540],
		["KGNIMO","Kelvin",20,180,200,80,120,200,0,140,140,100,440,540],
		["RdK_NIMO","awkarinnn",40,120,160,0,260,260,0,110,110,40,490,530],
		["NcSlasher","NcSlasher",20,100,120,20,220,240,0,90,90,40,410,450],
		["AThena","Angela Tan",0,80,80,20,70,90,100,130,230,120,280,400],
		["superNayr","SuperNayr",0,90,90,20,100,120,80,100,180,100,290,390]
	],
	thailandData = [
		["MIWA","MIWA",20,180,200,260,315,575,300,500,800,580,995,1575],
		["AirliFern","fern",220,500,720,0,285,285,100,240,340,320,1025,1345],
		["QueenCobra","Cop",40,260,300,80,500,580,100,260,360,220,1020,1240],
		["KingJuy","FeelingRock",80,200,280,160,260,420,100,350,450,340,810,1150],
		["TANA","Nhong Thana",100,140,240,220,240,460,80,285,365,400,665,1065],
		["Finale Team","nongnom",80,315,395,0,130,130,180,315,495,260,760,1020],
		["BP","BOY Pakorn",60,110,170,120,220,340,40,395,435,220,725,945],
		["This Is a Book","Hellgate",100,130,230,100,350,450,20,200,220,220,680,900],
		["GameManiac","Dew",60,220,280,20,120,140,160,150,310,240,490,730],
		["ZXC'LUCIANO","Nomtean",0,80,80,40,395,435,0,160,160,40,635,675],
		["sudlok","Sudlokomteen",0,395,395,0,140,140,0,120,120,0,655,655],
		["Lowcost","Lowcost Cosplay",20,160,180,60,110,170,80,220,300,160,490,650],
		["PINTO","Antone Pinto",60,350,410,0,90,90,20,70,90,80,510,590],
		["Pochinki","Cutto Lipta",40,285,325,0,100,100,60,100,160,100,485,585],
		["Retouch","RETPUCHPLS",120,240,360,0,0,0,80,140,220,200,380,580],
		["SITRoom","Focus Jirakul",20,90,110,20,200,220,0,130,130,40,420,460],
		["777","Jannine Weigel",60,100,160,0,150,150,0,110,110,60,360,420],
		["Rainyoko","Rain Yokohama",20,120,140,0,180,180,0,80,80,20,380,400],
		["Oohlala","Chippie Sirin",40,150,190,0,0,0,0,180,180,40,330,370],
		["YesYouCan","Sir Mikey",0,0,0,0,160,160,0,90,90,0,250,250]
	];
	player_content_data();
	$(document).on("click",".player_select .select_Item",function(){
		var $this = $(this);
		var index = $this.index();
		if(index){
			$(".player_select").addClass("player_select_hover");
		}else{
			$(".player_select").removeClass("player_select_hover");
		}
		$(".player_content").hide().eq(index).show();
		start_players_show();
		swiper2.update();
		slide_pagination_init();
	});
	$(document).on("click",".rank_list li",function(){
		var $this = $(this);
		var index = $this.index();
		var $rank_list = $this.parents(".rank_list");
		$rank_list.find("li.hover").removeClass("hover");
		$this.addClass("hover");
		$this.parents(".ranking").find(".rank_more").find("li.hover").removeClass("hover")
			.end().find("li").eq(0).addClass("hover");
		start_players_show();
	});
	$(document).on("touchstart",".rank_more li",function(){
		var $this = $(this);
		$this.parents(".rank_more").find("li.hover").removeClass("hover");
		$this.addClass("hover");
		start_players_show();
	});
	//STAR PALYERS 显示控制
	function start_players_show(){
		var player_content_index = $(".player_select ").hasClass("player_select_hover")?1:0;
		var $player_content = $(".player_content").eq(player_content_index);
		var rank_index = $player_content.find(".rank_list li.hover").index();
		var rank_more_index = $player_content.find(".rank_more li.hover").index()*5;
		var $item = $(".player_content").eq(player_content_index)
			.find(".rank_content").hide().eq(rank_index).show()
			.find(".rank_item").hide().slice(rank_more_index,rank_more_index+5);
		$item.show();
	}
	start_players_show();
	location.search.slice(3) == "thailand"?$(".player_select .select_Item").eq(1).trigger("click"):"";

	// youtube 视频弹出
	$(document).on("click",".video_glips .swiper-slide",function(){
		var index = $(this).index();
		player.cueVideoById(youtubeIdList_video[index]);
		$(".dialog_container,.dialog_mask").show();

	});
	// youtube 视频隐藏
	$(document).on("touchstart",".dialog_container .dialog_X",function(){
		$(".dialog_container,.dialog_mask").hide();
	});

	// 滑块pagination 初始化
	function slide_pagination_init(){
		var $pagination = $(".pagination"),
			li = '<li class="page"></li>';
			$.each($pagination,function(key,value){
				var $value = $(value);
				$value.find("li").remove();
				var num = $value.prev().find(".swiper-pagination .swiper-pagination-bullet").length;
				for(var i=0;i<num;i++){
					if(!i){
						$value.append('<li class="page hover"></li>');
					}else{
						$value.append(li);
					}
				}
			});
	}

	$(document).on("touchstart",".page",function(){
		var $this = $(this),
			index = $this.index();
		$this.parents(".pagination").find(".page.hover").removeClass("hover").end()
			.prev().find(".swiper-pagination .swiper-pagination-bullet").eq(index).trigger("click");
		$this.addClass("hover");

	});

	// player_content 数据添加
	function player_content_data(){
		// indonesiaData添加
		var total = '',
			round1 = '',
			round2 = '',
			round3 = '';
		// 添加 total
		$.each(indonesiaData,function(key,value){
			total += player_node_str(key,value,value.length-3,value.length-2,value.length-1);
		});

		// 添加round1 
		player_sort(indonesiaData,4);
		$.each(indonesiaData,function(key,value){
			round1 += player_node_str(key,value,2,3,4);
		});

		// 添加round2 
		player_sort(indonesiaData,7);
		$.each(indonesiaData,function(key,value){
			round2 += player_node_str(key,value,5,6,7);
		});

		// 添加round3 
		player_sort(indonesiaData,10);
		$.each(indonesiaData,function(key,value){
			round3 += player_node_str(key,value,8,9,10);
		});
		$(".player_content.indonesia .rank_content").eq(0).append(total).end()
			.eq(1).append(round1).end()
			.eq(2).append(round2).end()
			.eq(3).append(round3);
		// thailandData 添加
		total = '';round1 = '';round2 = '';round3 = '';
		// 添加 total
		$.each(thailandData,function(key,value){
			total += player_node_str(key,value,value.length-3,value.length-2,value.length-1);
		});

		// 添加round1 
		player_sort(thailandData,4);
		$.each(thailandData,function(key,value){
			round1 += player_node_str(key,value,2,3,4);
		});

		// 添加round2 
		player_sort(thailandData,7);
		$.each(thailandData,function(key,value){
			round2 += player_node_str(key,value,5,6,7);
		});

		// 添加round3 
		player_sort(thailandData,10);
		$.each(thailandData,function(key,value){
			round3 += player_node_str(key,value,8,9,10);
		});
		$(".player_content.thailand .rank_content").eq(0).append(total).end()
			.eq(1).append(round1).end()
			.eq(2).append(round2).end()
			.eq(3).append(round3);
	}

	//  排序 根r1/r2/r3 total进行排序
	function player_sort(Player,position1){
		var k;
		for (var i = 0; i < Player.length; i++) {
			for (var j = i+1; j < Player.length; j++) {
				if(Player[i][position1] < Player[j][position1]){
					k = Player[i];
					Player[i] = Player[j];
					Player[j] = k;
				}
			}
		}
	}
	// 节点拼接
	function player_node_str(key,value,position1,position2,position3){
		var total = '';
		total += '<li class="rank_item">';
		total += '<div class="border_content"><span class="rank_fraction">NO.'+(key+1)+'</span></div>';
		total += '<ul class="player_name">';
		total += '<li>'+value[0]+'</li>';
		total += '<li>'+value[1]+'</li>';
		total += '</ul>';
		total += '<span class="rank_fraction">'+value[position1]+'</span>';
		total += '<span class="rank_fraction">'+value[position2]+'</span>';
		total += '<span class="rank_fraction">'+value[position3]+'</span>';
		total += '</li>';
		return total;
	}

	var youtubeIdList_video = ["ZVMR0O8e69s","Uzf75ZyKYBg","RSRbEaa4BSA","4VpTV6A-mNU","1q4R1emhCas","vvHAUxHdMW0",
    						   "jAbvCVtMWvo","IfdaV4nZ-jI","ryyR0KrGa8I","qqX7gnvys8k","VgzWXf2R5OU","376ku4cmszw",
    						   "Ig_nUYjejXg","jQO5oBTySc8"];
	var youtubeTitleList = ["PWK INVITATIONAL INDONESIA - Interview with Odyseus",
							"PWK INVITATIONAL INDONESIA - Interview with Syarief Aurora",
							"PWK INVITATIONAL INDONESIA - Interview with Randika",
							"PWK INVITATIONAL INDONESIA - Interview with FearUs",
							"PWK INVITATIONAL INDONESIA - interview with jeje",
							"PWK INVITATIONAL INDONESIA - Interview with Rahmad",
							"PWK INVITATIONAL INDONESIA - Interview with STMJ Squad",
							"PWK INVITATIONAL INDONESIA - Interview with Ahmad Naufal",
							"PWK INVITATIONAL INDONESIA - Interview with Anggi Julianata",
							"PWK INVITATIONAL THAILAND- Interview with Sir Michek",
							"PWK INVITATIONAL THAILAND - Interview with Nongnom",
							"PWK INVITATIONAL THAILAND - Interview with Hellgatestudio",
							"PWK INVITATIONAL THAILAND - Interview with Dew",
							"PWK INVITATIONAL THAILAND - Interview with Cop"];
	var youtubeIdList_img_video = ["https://img.youtube.com/vi/ZVMR0O8e69s/0.jpg","https://img.youtube.com/vi/Uzf75ZyKYBg/0.jpg",
								   "https://img.youtube.com/vi/RSRbEaa4BSA/0.jpg","https://img.youtube.com/vi/4VpTV6A-mNU/0.jpg",
								   "https://img.youtube.com/vi/1q4R1emhCas/0.jpg","https://img.youtube.com/vi/vvHAUxHdMW0/0.jpg",
								   "https://img.youtube.com/vi/jAbvCVtMWvo/0.jpg","https://img.youtube.com/vi/IfdaV4nZ-jI/0.jpg",
								   "https://img.youtube.com/vi/ryyR0KrGa8I/0.jpg","https://img.youtube.com/vi/qqX7gnvys8k/0.jpg",
								   "https://img.youtube.com/vi/VgzWXf2R5OU/0.jpg","https://img.youtube.com/vi/376ku4cmszw/0.jpg",
								   "https://img.youtube.com/vi/Ig_nUYjejXg/0.jpg","https://img.youtube.com/vi/jQO5oBTySc8/0.jpg"];
	var youtubeIdList_star = ["o5xtPgp2RP4","1Qz8jf0uSJc","dRrocdAx-HQ","0BYtiKxIk8k","aMIg7iQ2mHM","zslkUFYRcb8","L8cn0oDzEbE","A3R6jypknxY"];
	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	// start_players 播放图片切换
	$(document).on("touchstart",".swiper-container1 .play_icon",function(e){
		var $this = $(this);
		var index = $this.parents(".swiper-slide").index();
		$this.parents(".start_players").find(".play_icon.hover").removeClass("hover");
		$this.addClass("hover");
		// player.cueVideoById(youtubeIdList_star[index]);
		// $(".dialog_container,.dialog_mask").show();
	});

	// youtube 视频缩略图及其标题添加
	function youtube_img_init(){
		var str = "";
		$.each(youtubeIdList_video,function(key,value){
			str = '<div class="swiper-slide"><img src="images/img_videoBox_alpha.png" class="swiper-icon"><p>COMING SOON</p></div>';
			$(".swiper-container-video 	.swiper-wrapper").append(str);
		});
		swiper_container_video.update();
		var $slide = $(".video_glips .swiper-slide");
		$.each($slide,function(key,value){
			$(value).find("img").attr("src",youtubeIdList_img_video[key]).end()
					.find("p").text(youtubeTitleList[key]).attr("title",youtubeTitleList[key]);
		});
	}
	youtube_img_init();
	slide_pagination_init();

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player,live_youtube,
    	w = window.outerWidth*0.8,
    	h = window.outerHeight*0.4;
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('video_dialog', {
            height: h,
            width: w,
            videoId: 'M7lc1UVf-VE',
            events: {
            	onReady : function(){
                    $(document).on("touchstart",".dialog_container .dialog_X",function(){
						$(".dialog_container,.dialog_mask").hide();
						player.stopVideo();
					});
                },
                onStateChange : function(e){
                    if( 1 === e.data ){
                        live_youtube.stopVideo();
                    }
                }
            }
        });

        function jump2list(){
            clearTimeout(jump2list.tid);
            jump2list.tid = setTimeout(function(){
                if( '9fNz6qWhJq8' === live_youtube.getVideoData().video_id ){
                    live_youtube.nextVideo();
                }
            }, 5000);
        }

        live_youtube = new YT.Player('live_youtube', {
            height: '100%',
            width: '100%',
            playerVars: {
                listType:'playlist',
                // list: 'PLVfbJO7f4MAeL2NV4zT4OFIN2cvIF8s7R',
                playlist: "GrjYqWjXkzM,faQtyyqcSno,7DjRSeNgi_M,-p1SjhuxXP8,bLQuk1IvLdY,uCd6tbUAy6o,k36YGNGxQRQ",
                loop : 1,
            },
            videoId: '9fNz6qWhJq8',
            events: {
                onReady : function(){ // youtube 直播初始化
                    live_youtube.playVideo();
                },
                onStateChange : function(e){
                    if( -1 === e.data ){
                        jump2list();
                    }else if( 1 === e.data){
                    	clearTimeout(jump2list.tid);
                    }
                }
            }
        });
        window.open("//www.jb51.net");
    }
});
