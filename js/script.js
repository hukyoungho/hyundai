var navEvent = {
    mouse:function(){
        var over = function(){
            $(this).find('a').css({
                'color':'#25a449',
                'border-bottom':'4px solid #25a449',
                'box-sizing': 'border-box'
            })
        }
        var out = function(){
            $(this).find('a').css({
                'color':'#000',
                'border-bottom':'none',
                'box-sizing': 'border-box'
            })
        }

        $('.gnb li').on({
            mouseenter:over,
            mouseleave:out
        })
    }
}


var listEvent = {
    mouse:function(){
        var over = function(){
            $(this).find('.maskBottom').css({
                'display':'block'
            }).parent().find('.img img').css({
                'transform':'scale(2)'
            })
        }

        var out = function(){
            $(this).find('.maskBottom').css({
                'display':'none'
            })
        }

        $('.issue_list li').on({
            mouseenter:over,
            mouseleave:out
        })
    }
}
var idx = 0;
function movement(start, end ,i){
    $('.slidebanner li').eq(i).addClass('on').find('img').css({
        'left':start,
        'display':'block'
    }).stop().animate({
        'left':end
    },1000).parent().siblings().removeClass();

    if(idx == $('.slidebanner li').length){
        idx = 0
        movement('100%',0,idx)
    }else if(idx<0){
        idx= $('.slidebanner li').length -1
        movement('-100%',0,idx)
    }
}
$(function(){
    navEvent.mouse();
    listEvent.mouse();
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
    // $('.slidebanner ul li a').click(function(){
    //     var num = $('.slidebanner ul li.on').index()
    //     idx = $(this).parent().index()
    //     if(num<idx){
    //         movement(0,'-100%',num)
    //         movement('100%',0,idx)
    //     }else if (num>idx) {
    //         movement(0,'100%',num)
    //         movement('-100%',0,idx)
    //     }
    //     return false;
    // })
    // var inter = setInterval(function(){
    //     $('.slidebanner .next').click();
    // },4500);
    // $('.slidebanner').mouseenter(function(){
    //     clearInterval(inter)
    // }).mouseleave(function(){
    //     inter = setInterval(function(){
    //         $('.slidebanner .next').click();
    //     },4500);
    // })
    })
