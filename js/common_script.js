//gnb

var navEvent = {
    mouse:function(){
        var over = function(){
            var idx = $(this).index();
            console.log(idx);
            $('.depth_gnb .subTxt_box ul li').eq(idx).addClass('on').siblings().removeClass();
            $('.depth_gnb .depth_gnb_box ul').eq(idx).find('a').css('color','#aaa').parent().parent().siblings().find('a').css('color','#707070');
        }

        $('.depth_gnb .depth_gnb_box ul').on({
            mouseenter:over
        })
        $('header .gnb li').on({
            mouseenter:over
        })
    }
}


$(document).ready(function() {
        navEvent.mouse();
    $('#wgnb .gnb li a').click(function() {
        var st = $(window).scrollTop();

        if(st >= 600 && $('header #wgnb').is('.fix')){
            $('header').find('.depth_gnb').css({
                top: '45px'
            })
            $('header').find('.depth_gnb').slideToggle(1000);
        }
        else if(st <= 599 && !$('header #wgnb').is('.fix')){
            $('header').find('.depth_gnb').css({
                top: '80px'
            })
            $('header').find('.depth_gnb').slideToggle(1000);
        }
    })
    $('.x_box').click(function(){
        $('header').find('.depth_gnb').slideToggle(1000);
    })
})





$(document).ready(function() {


    $(window).scroll(function(){
        var st = $(window).scrollTop();

        if(st >= 600 && !$('header #wgnb').is('.fix')){
            $('header #wgnb').addClass('fix');
            // console.log(1);

            $('header #wgnb .hlogo').stop().animate({
                'height':'43px'
            },500);
            $('header #wgnb .hlogo a').stop().animate({
                'height':'43px',
                'line-height':'43px'
            },500);
            $('header #wgnb .gnb li a').stop().animate({
                'line-height':'50px',
                'height':'50px'
            },100);
            $('header #wgnb .hdec').stop().animate({
                'margin-top':'10px'
            },500);
            $('header #wgnb .util').stop().animate({
                'margin-top':'17px'
            },500);
        }
        else if(st <= 599 && $('header #wgnb').is('.fix')){
            $('header #wgnb').removeClass('fix')
            // console.log(2);

            $('header #wgnb .hlogo').stop().animate({
                'height':'73px'
            },500);
            $('header #wgnb .hlogo a').stop().animate({
                'height':'81px',
                'line-height':'81px'

            },500);
            $('header #wgnb .gnb li a').stop().animate({
                'height':'81px',
                'line-height':'81px'
            },100);
            $('header #wgnb .hdec').stop().animate({
                'margin-top':'27px'
            },500);
            $('header #wgnb .util').stop().animate({
                'margin-top':'35px'
            },500);
        }
    })
    $(window).trigger('scroll')


});

$(document).ready(function() {

    $('.util .search').click(function() {
        var st = $(window).scrollTop();

        if(st >= 600 && $('header #wgnb').is('.fix')){
            $('.searchBox').css({
                top: '33px'
            })
            $('.searchBox').slideToggle(300);
        }
        else if(st <= 599 && !$('header #wgnb').is('.fix')){
            $('.searchBox').css({
                top: '46px'
            })
            $('.searchBox').slideToggle(300);
        }
    })

})









//footer



$(document).ready(function() {
        $('footer .btn_family').click(function() {
            $('footer .family_site .btn_family').css({

                background:'url(../img/common/blt_down.png) no-repeat 140px center',

                background:'url(../img/common/blt_down.png) no-repeat 140px center'

            })
            $('footer .family_site .family_list_box .family_list').stop().animate({
                top:'0px'
            },1000)

            var list_pos = $('footer .family_site .family_list_box .family_list').css("top").replace(/[^-\d\.]/g, '');
            // console.log(list_pos);
            if(list_pos == 0 ){
                $('footer .family_site .family_list_box .family_list').stop().animate({
                    top:'140px'
                },1000);
                $('footer .family_site .btn_family').css({
                    background:'url(../img/common/blt_up.png) no-repeat 140px center'
                })
            }

        })

    })
