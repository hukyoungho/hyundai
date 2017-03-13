
//common
// section2
//lnb
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


$(function(){

    $('.section2 .contents .navYear > ul > li').click(function(){

        $(this).addClass('on').siblings().removeClass();
        // console.log('a');
        var idx = $(this).index();
        $('.section2 .contents section').eq(idx).css({
            display:'block'
        }).siblings('section').css({
            display:'none'
        });

    })
    $('.section2 .contents .navYear > ul > li').mouseenter(function(){
          $(this).css({
              background:"#25a449",
              'text-decoration':"underline"
          });
        //   console.log('c');

      });
    $('.section2 .contents .navYear > ul > li').mouseleave(function(){
          $(this).css({
              background:"#fff",
              'text-decoration':"none"
          });
        //   console.log('d');
      });


    $(window).scroll(function(){
          var st = $(window).scrollTop();
        //   console.log( $('.section2 .contents').offset().top);
        //   var sa = $('.section2 .contents').offset().top
          if(st > 600){
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



// navbar


$(document).ready(function() {

    // $('.navbar li a').click(function(){
    //   var idx = $(this).parent().index();
    //     // $(this).parent().addClass('on').siblings().removeClass();
    //     var move = $('#body_Content section').eq(idx+1).offset().top;
    //     console.log(move);
    //     $('body,html').animate({
    //          scrollTop:move
    //     })
    //
    //
    //
    //
    //
    // });
    //
    // $(window).scroll(function(){
    //     var st = $(window).scrollTop();
    //     console.log(st);
    //     for(var i=0; i<2; i++){
    //
    //         if(st >= $('#body_Content section').eq(i+1).offset().top-300){
    //
    //             $('.navbar li').eq(i).addClass('on').siblings().removeClass();
    //
    //         }
    //     }
    // })


});
