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
    $('.section2 .contents .listArea > ul > li > a').click(function(){

      $(this).parent().addClass('on').siblings().removeClass();
      console.log('a');
    })

    $('.section2 .contents .tabWrap div[class^=tab] h4 a').click(function(){

        $(this).parent().parent().addClass('on').siblings().removeClass();
        console.log('a');
    })

    $('.section2 .contents .tabWrap div[class^=tab] h4 a').click(function(){

        $(this).parent().parent().addClass('on').siblings().removeClass();
        console.log('a');
    })
    $('.section2 .contents .developList li:nth-child(2) div[class^="sub"] .tabTit a').click(function(){

        $(this).parent().parent().addClass('on').siblings().removeClass();
        console.log('a');
    })
});



// // navbar
//
//
//
//
// $(document).ready(function() {
//     $(window).scroll(function(){
//             var st = $(window).scrollTop();
//             var wh = $(window).height();
//             console.log(wh);
//             // console.log(st);
//             if(st>=150){
//                 $('#wingbanner').fadeIn("fast").stop().animate({
//                     top:$(this).scrollTop() + wh*65/100
//                 },300)
//             }else{
//
//                 $('#wingbanner').fadeOut("fast");
//             }
//
//         })
//
//     $('#wingbanner').click(function(){
//         console.log(1);
//         $('body,html').stop().animate({
//             scrollTop:0
//         },300)
//     })
//
//
//
// });
