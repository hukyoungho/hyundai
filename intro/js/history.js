


// section2

//common lnb
$(function(){

    $('.section2 #lnb ul li a').click(function(){

        $(this).addClass('on').parent().siblings().children('a').removeClass();
        console.log('a');
    })
    $('.section2 #lnb ul li').mouseenter(function(){
          $(this).find('a').css({
              color:"#25a449",
              'text-decoration':"underline"
          });

      });
    $('.section2 #lnb ul li').mouseleave(function(){
          $(this).find('a').css({
              color:"#000",
              'text-decoration':"none"
          });

      });

});




$(window).load(function(){

    $('.section2 .contents .navYear > ul > li > a').click(function(){
        var idx = $(this).parent().index();
        $(this).parent().addClass('on').siblings().removeClass();
        console.log(idx);
        $('.section2 .contents section').eq(idx).css({
            display:'block'
        }).siblings('section').css({
            display:'none'
        });
        // var moved = $('.section2 .contents > section').eq(idx).offset().top;
        // console.log(moved);
        $('body,html').animate({
             scrollTop:400
        })
    })
    $('.section2 .contents .navYear > ul > li').mouseenter(function(){
          $(this).css({
              background:"#25a449",
              'text-decoration':"underline"
          });


      });
    $('.section2 .contents .navYear > ul > li').mouseleave(function(){
          $(this).css({
              background:"#fff",
              'text-decoration':"none"
          });
      });

    $('.section2 .contents .navYear .subYear li').click(function(){
        var fidx = $(this).index();
        var idx = $(this).parent().parent().parent().parent().children('ul').children('li.on').index()
        console.log(fidx);
        console.log(idx);
        var move = $('.section2 .contents > section').eq(idx).children('div').eq(fidx).offset().top-180;
        console.log(move);
        $('body,html').animate({
             scrollTop:move
        })





    });









    $(window).scroll(function(){
          var st = $(window).scrollTop();
        //   console.log( $('.section2 .contents').offset().top);
        //   var sa = $('.section2 .contents').offset().top
          if(st > 450){
            $('.section2 .contents .navYear').css({
                position:"fixed",
                top:"50px",
                "background":"#fff url(../img/intro/bg_navyear_bar.gif) repeat-x 0 100%",
                width: '100%',
                left:'0px',
                'padding-left': '73px'

            }).children('ul').css({
                width:' 830px',
                margin:' 0 auto'

            })
        }else{
                $('.section2 .contents .navYear').css({
                    position:"static",
                    "background":"#fff",
                    'padding-left': '0px'
                }).children('ul').css({
                    width:' auto',
                    margin:'auto'

                })
              }


      })

});


///wingbanner

$(function(){

    $(window).scroll(function(){
            var st = $(window).scrollTop();
            var wh = $(window).height();
            console.log(wh);
            // console.log(st);
            if(st>=150){
                $('#wingbanner').fadeIn("fast").stop().animate({
                    top:$(this).scrollTop() + wh*65/100
                },300)
            }else{

                $('#wingbanner').fadeOut("fast");
            }

        })

    $('#wingbanner').click(function(){
        console.log(1);
        $('body,html').stop().animate({
            scrollTop:0
        },300)
    })
});






//gnb

var navEvent = {
    mouse:function(){
        var over = function(){
            var idx = $(this).index();
            // console.log(idx);
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
        // console.log(st);

        if(st >= 450 && !$('header #wgnb').is('.fix')){
            $('header #wgnb').addClass('fix')
            // console.log(1);
            $('header').css('border-bottom','1px solid #ccc');
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
        else if(st <= 444 && $('header #wgnb').is('.fix')){
            $('header #wgnb').removeClass('fix')
            // console.log(2);
            $('header').css('border-bottom','none');
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
                // console.log(list_pos);
            }
            // 다시 들어가기 위해서는 if 문을 이용해 집어 넣어보자

        })

    })
