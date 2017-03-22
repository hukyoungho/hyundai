//common
// section2
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




//btnMore

$(function(){
    $('.btnMore a').click(function(){

        $('section:nth-child(5)~section').css({
            display:"block"
        });
        console.log('a');
    })
    //wingbanner
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
