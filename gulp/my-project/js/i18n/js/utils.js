(function(){
    window.addEventListener('load', function(){
        checkip();
    }, false);
    function checkip() {
        $.ajax({
            type: "get",
            async: false,
            url: "https://api.pubgameshowtime.com/ip/getcountry",
            dataType: "json",
            success: function(result){
                var $li = $('<li><a href="javascript:;" target="_blank">{# PAYMENT #}</a></li>');
                $li.find('a').on('click', function(){
                    var countryList = "tr,ae,th,id,my,ph,sg,br,mm,in,sa,kw,qa,hk,bh,om,eg,ly,tn,dz,ma".split(',');
                    var country = result.country.toLowerCase();
                    if(countryList.indexOf(country) > -1) {
                        window.open('https://www.midasbuy.com/' + country + '/buy?appid=1450015065',"new_win");
                    } else if(country == 'tw') {
                        window.open('https://www.midasbuy.com/tw/pubgmtw#getInfo',"new_win");
                    } else {
                        window.open('https://www.midasbuy.com/ot/buy?appid=1450015065',"new_win");
                    }
                    gtag( "event","x_jump" ,{
                        event_category : "website",
                        event_label    : "pc_header_payment"
                    });
                });
                $('.nav_list').append($li);

                if(result.country == 'TW'){
                    if($(".btn_apk").hasClass("btn_apk")){
                        $(".btn_apk").addClass("btn_apk_tw");
                    }
                }
                if(typeof ip !== 'undefined'){
                    ip = result.country;
                }
            },
            error: function(){

            }
        });
    }
})();
