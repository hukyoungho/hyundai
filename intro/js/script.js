//gnb

var navEvent = {
    mouse:function(){
        var over = function(){
            var idx = $(this).index();
            console.log(idx);
            $('.depth_gnb .subTxt_box ul li').eq(idx).addClass('on').siblings().removeClass();
            $('.depth_gnb .depth_gnb_box ul').eq(idx).find('a').css('color','#aaa').parent().parent().siblings().find('a').css('color','#707070');
            $('header .gnb li').eq(idx).find('a').css({
                color: '#25a449',
                'border-bottom': '4px solid #25a449',
                'box-sizing': 'border-box'
            }).parent().siblings().find('a').css({
                color: '#000',
                'border-bottom': 'none',
                'box-sizing': 'none'
            })
        }

        $('.depth_gnb .depth_gnb_box ul').on({
            mouseenter:over
        })
    }
}


$(document).ready(function() {
            navEvent.mouse();
        $('header').click(function() {
            var st = $(window).scrollTop();

            if(st >= 600 && $('header #wgnb').is('.fix')){
                $(this).find('.depth_gnb').css({
                    top: '45px'
                })
                $(this).find('.depth_gnb').slideToggle(1000);
                console.log('1');
            }
            else if(st <= 599 && !$('header #wgnb').is('.fix')){
                $(this).find('.depth_gnb').css({
                    top: '80px'
                })
                $(this).find('.depth_gnb').slideToggle(1000);
            }
        })
    })





$(document).ready(function() {


    $(window).scroll(function(){
        var st = $(window).scrollTop();

        if(st >= 600 && !$('header #wgnb').is('.fix')){
            $('header #wgnb').addClass('fix');

            $('header #wgnb .hlogo').css({
                'height':'43px'
            });
            $('header #wgnb .hlogo a').css({
                'height':'43px',
                'line-height':'43px'
            });
            $('header #wgnb .gnb li a').css({
                'line-height':'50px',
                'height':'50px'
            });
            $('header #wgnb .hdec').css({
                'margin-top':'10px'
            });
            $('header #wgnb .util').css({
                'margin-top':'17px'
            });
        }
        else if(st <= 599 && $('header #wgnb').is('.fix')){
            $('header #wgnb').removeClass('fix')
            // console.log(2);

            $('header #wgnb .hlogo').css({
                'height':'73px'
            });
            $('header #wgnb .hlogo a').css({
                'height':'81px',
                'line-height':'81px'

            });
            $('header #wgnb .gnb li a').css({
                'height':'81px',
                'line-height':'81px'
            });
            $('header #wgnb .hdec').css({
                'margin-top':'27px'
            });
            $('header #wgnb .util').css({
                'margin-top':'35px'
            });
        }
    })
    $(window).trigger('scroll')


});

// section2
$(function(){
    $('.section2 #lnb ul li a').click(function(){

        console.log(1);
        $(this).addClass('on').parent().siblings().children('a').removeClass();
    });

});
//footer



$(document).ready(function() {
        $('footer .btn_family').click(function() {
            $('footer .family_site .btn_family').css({
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
                // console.log(list_pos);
            }
            // 다시 들어가기 위해서는 if 문을 이용해 집어 넣어보자

        })

    })






// navbar
$(function(){
  $('.navbar li').click(function(){
      $(this).addClass('on').siblings().removeClass();

  });

});




$(document).ready(function() {

    $('.navbar li').click(function(){
      var idx = $(this).index();
      if(idx==1){
        var move = $('#body_Content section:eq('+idx+1+')').offset().top-100;
        $('body,html').animate({
             scrollTop:move
        })
    }
  


    });

    // $(window).scroll(function(){
    //     var st = $(window).scrollTop();
    //     // console.log(st);
    //     console.log()
    //     for(var i=0; i<5; i++){
    //         //  console.log($('#body_Content section:eq('+i+')').offset().top);
    //         if(st >= $('#body_Content section:eq('+i+')').offset().top-200){
    //             // console.log(1);
    //             $('.navbar li').eq(i).find('img').css({
    //                 'display':'block'
    //
    //             }).parent().parent().siblings().find('img').css({
    //                 'display':'none'
    //
    //             });
    //             $('.navbar li').eq(i).find('a').css({
    //                 'border-bottom': '2px solid #000',
    //                 'padding-bottom': '3px',
    //                 'height':'auto'
    //             }).parent().siblings().find('a').css({
    //                 'border-bottom': '2px solid #000',
    //                 'padding-bottom': 'none',
    //                 'height':'10px'
    //             });
    //         }
    //     }
    // })


});
