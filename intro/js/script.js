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
            $(this).find('.depth_gnb').slideToggle(1000);
        })
    })





$(document).ready(function() {


    $(window).scroll(function(){
        var st = $(window).scrollTop();
        console.log(st);


            //  console.log($('#body_Content section:eq('+i+')').offset().top);
        if(st >= 600 && st <= 610){
            console.log(1);
            $('header #wgnb').stop().animate({
                'line-height':'51px'
            },500);
            $('header #wgnb .hlogo').stop().css({
                'height':'43px'
            },500);
            $('header #wgnb .hlogo a').stop().css({
                'height':'43px'
            },500);
            $('header .gnb li a').stop().animate({
                'height':'50px'
            },500);
            $('header .hdec').stop().animate({
                'margin-top':'10px'
            },500);
            $('header .util').stop().animate({
                'margin-top':'17px'
            },500);
        }
        if(st <= 590 && st >=560){
            console.log(2);
            $('header #wgnb').stop().animate({
                'line-height':'81px'
            },500);
            $('header #wgnb .hlogo').stop().css({
                'height':'73px'
            },500);
            $('header #wgnb .hlogo a').stop().css({
                'height':'81px'
            },500);
            $('header .gnb li a').stop().animate({
                'height':'81px'
            },500);
            $('header .hdec').stop().animate({
                'margin-top':'27px'
            },500);
            $('header .util').stop().animate({
                'margin-top':'35px'
            },500);
        }
    })


});







//section1
var idx = 0;
function movement(start, end ,i){
    $('.slidebanner li').eq(i).css({
        'left':start,
        'display':'block'
    }).stop().animate({
        'left':end
    },1000);

    if(idx == $('.slidebanner li').length){
        idx = 0
        movement('100%',0,idx)
    }else if(idx<0){
        idx= $('.slidebanner li').length -1
        movement('-100%',0,idx)
    }
}


$(function(){
  $('.section1 #prev').click(function(e){
  e.preventDefault();
  var stat = $('.section1 #slide_num #num').text();
  var num = parseInt(stat,10);
  num--;
  if(num<=0){
  num =5;
  }
  $('.section1 #slide_num #num').text(num);
  });
  $('.section1 #next').click(function(e){
  e.preventDefault();
  var stat = $('.section1 #slide_num #num').text();
  var num = parseInt(stat,10);
  num++;

  if(num>5){
  num=1;
  }
  $('.section1 #slide_num #num').text(num);
  });
});


$(function(){

    $('.slide_control .next').click(function(){
        movement(0,'-100%',idx)
        idx++
        movement('100%',0,idx)

    })
    $('.slide_control .prev').click(function(){
        movement(0,'100%',idx)
        idx--
        movement('-100%',0,idx)
    })


    var inter = setInterval(function(){
        $('.slide_control .next').click();
    },4500);
    $('.slide_control .stop').click(function(){
        clearInterval(inter)
    })
    $('.slide_control .start').click(function(){
        inter = setInterval(function(){
            $('.slide_control .next').click();
        },4500);
    })


    })

//section3

var idx_1 = 0;
function movement_1(start, end ,i){
    $('.section3 .slider li').eq(i).css({
        'left':start
    }).stop().animate({
        'left':end
    },1000);

    if(idx_1 == $('.section3 .slider li').length){
        idx_1 = 0
        movement_1('100%',0,idx_1)
    }else if(idx_1<0){
        idx_1= $('.section3 .slider li').length -1
        movement_1('-100%',0,idx_1)
    }
}

$(function(){
    $('.section3 #prev').click(function(e){
    e.preventDefault();
    var stat = $('.section3 #slide_num #num').text();
    var num = parseInt(stat,10);
    num--;
    if(num<=0){
    num =2;
    }
    $('.section3 #slide_num #num').text(num);
    });
    $('.section3 #next').click(function(e){
    e.preventDefault();
    var stat = $('.section3 #slide_num #num').text();
    var num = parseInt(stat,10);
    num++;

    if(num>2){
    num=1;
    }
    $('.section3 #slide_num #num').text(num);
    });


    $('.section3 .view_control .next').click(function(){
        movement_1(0,'-100%',idx_1)
        idx_1++
        movement_1('100%',0,idx_1)
        console.log(idx_1);

    })
    $('.section3 .view_control .prev').click(function(){
        movement_1(0,'100%',idx_1)
        idx_1--
        movement_1('-100%',0,idx_1)
        console.log(idx_1);
    })
});


//section4



var pos = ['0px','-632px', '-1264px', '-1896px', '-2528px'];
function movement_2(i){
    $('.section4 .slider').css({
        'transform':'translate3d('+pos[i]+', 0px, 0px)'
    })

}

    $(function(){
    $('.section4 .view_control li').click(function(){
        idx=$(this).index();
        movement_2(idx);
        // console.log(1);
        $(this).css({
            'background':'url(img/slider_nav_on02.png) no-repeat 50% 50%'
        }).siblings().css({
            'background':'url(img/slider_nav02.png) no-repeat 50% 50%'
        })
    });


})


//footer


$(document).ready(function() {
        $('footer .btn_family').click(function() {
            $('footer .family_site .btn_family').css({
                background:'url(img/blt_down.png) no-repeat 140px center'
            })
            $('footer .family_site .family_list_box .family_list').stop().animate({
                top:'0px'
            },1000)
            // 다시 들어가기 위해서는 if 문을 이용해 집어 넣어보자

        })

    })




//navbar
$(function(){
  $('.navbar li').click(function(){
      idx=$(this).index();
      $(this).find('img').css({
          'display':'block',

      }).parent().parent().siblings().find('img').css({
          'display':'none',

      });
      $(this).find('a').css({
          'border-bottom': '2px solid #000',
          'padding-bottom': '3px',
          'height':'auto'
      }).parent().siblings().find('a').css({
          'border-bottom': '2px solid #000',
          'padding-bottom': 'none',
          'height':'10px'
      });

  });

});


$(document).ready(function() {

    $('.navbar a').click(function(){
      var idx = $(this).parent().index();
      var move = $('#body_Content section:eq('+idx+')').offset().top;
      $('body,html').animate({
         scrollTop:move
      })
  });
    $(window).scroll(function(){
        var st = $(window).scrollTop();
        // console.log(st);
        console.log()
        for(var i=0; i<5; i++){
            //  console.log($('#body_Content section:eq('+i+')').offset().top);
            if(st >= $('#body_Content section:eq('+i+')').offset().top-200){
                // console.log(1);
                $('.navbar li').eq(i).find('img').css({
                    'display':'block'

                }).parent().parent().siblings().find('img').css({
                    'display':'none'

                });
                $('.navbar li').eq(i).find('a').css({
                    'border-bottom': '2px solid #000',
                    'padding-bottom': '3px',
                    'height':'auto'
                }).parent().siblings().find('a').css({
                    'border-bottom': '2px solid #000',
                    'padding-bottom': 'none',
                    'height':'10px'
                });
            }
        }
    })


});
