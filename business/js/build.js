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
            // console.log(st);
            if(st>=150){
                $('#wingbanner').fadeIn("slow").stop().animate({
                    top:$(this).scrollTop()
                },500)
            }else{
                $('#wingbanner').removeClass()
                $('#wingbanner').fadeOut("slow");
            }

        })


});





// navbar
