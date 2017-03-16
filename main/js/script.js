




// section1

// slidebanner 함수
var idx = 0;
function movement(start, end ,i){
    $('.section1 .slidebanner li').eq(i).css({
        'left':start
    }).stop().animate({
        'left':end
    },1000);

}


$(function(){

    $('.slide_control .next').click(function(){
        if(idx==0){

            movement(0,'-20%',idx);
            idx++
            movement(0,'-20%',idx);


            console.log(idx);
        }else if (idx == 1) {
            movement('-20%','-40%',idx);
            idx++
            movement('-20%','-40%',idx);


            console.log(idx);
        }else if (idx == 2) {
            movement('-40%','-60%',idx);
            idx++
            movement('-40%','-60%',idx);


            console.log(idx);
        }else if (idx == 3) {
            movement('-60%','-80%',idx);
            idx++
            movement('-60%','-80%',idx);


            console.log(idx);
        }else if (idx == 4) {
            $('.slidebanner li:nth-child(5)').css({
                left:'-80%'

            }).stop().animate({
                'left':'-100%'
            },1000);

            $('.slidebanner li:nth-child(1)').css({
                left:'20%'

            }).stop().animate({
                'left':0
            },1000);

            idx=0;
            console.log(idx);


        }
    })
    $('.slide_control .prev').click(function(){
        console.log(111);
        if(idx==0){

            movement(0,'20%',idx);
            idx=4;
            movement('-100%','-80%',idx);

            console.log(idx);
        }
        else if (idx == 4) {
            movement('-80%','-60%',idx);
            idx--
            movement('-80%','-60%',idx);


            console.log(idx);
        }else if (idx == 3) {
            movement('-60%','-40%',idx);
            idx--
            movement('-60%','-40%',idx);


            console.log(idx);
        }else if (idx == 2) {
            movement('-40%','-20%',idx);
            idx--
            movement('-40%','-20%',idx);


            console.log(idx);
        }else if (idx == 1) {
            $('.slidebanner li:nth-child(1)').css({
                left:'-20%'

            }).stop().animate({
                'left':'0%'
            },1000);

            $('.slidebanner li:nth-child(2)').css({
                left:'-20%'

            }).stop().animate({
                left:'-0%'
            },1000);

            idx=0;
            console.log(idx);
        }

    })

    var inter = setInterval(function(){
        $('.slide_control .next').click();
    },4500);
    $('.slide_control #stop').click(function(){
        clearInterval(inter)
        $(this).addClass('on').siblings().removeClass();
    })
    $('.slide_control #start').click(function(){
        inter = setInterval(function(){
            $('.slide_control .next').click();
        },4500);
        $(this).addClass('on').siblings().removeClass();
    })


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





//section3

//slidebanner 함수
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
        $(this).addClass('on').siblings().removeClass();
    });


})



//navbar


$(document).ready(function() {
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

    $('.navbar a').click(function(){
      var idx = $(this).parent().index();
      var move = $('#body_Content section:eq('+idx+')').offset().top;
      $('body,html').animate({
         scrollTop:move
      })
  });
    $(window).scroll(function(){
        var st = $(window).scrollTop();
        console.log()
        for(var i=0; i<5; i++){
            if(st >= $('#body_Content section:eq('+i+')').offset().top-200){
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
