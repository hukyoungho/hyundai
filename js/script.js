
//section1
var idx = 0;
function movement(start, end ,i){
    $('.slidebanner li').eq(i).css({
        'left':start
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
