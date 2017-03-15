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

//section3











//wingbanner

$(function(){

    $(window).scroll(function(){
            var st = $(window).scrollTop();
            // console.log(st);
            if(st>=150){
                $('#wingbanner').fadeIn("fast").stop().animate({
                    top:$(this).scrollTop()
                },300)
            }else{
                $('#wingbanner').removeClass()
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




// navbar
