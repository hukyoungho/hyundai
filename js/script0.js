var idx = 0;
function movement(start, end ,i){
    $('.slidebanner li').eq(i).addClass('on').find('img').css({
        'left':start,
        'display':'block'
    }).stop().animate({
        'left':end
    }).parent().siblings().removeClass();

    if(idx == $('.slidebanner li').length){
        idx = 0
        movement('100%',0,idx)
    }else if(idx<0){
        idx= $('.slidebanner li').length -1
        movement('-100%',0,idx)
    }
}
$(function(){
    // navEvent.mouse();
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
