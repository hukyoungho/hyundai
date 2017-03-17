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


// seciont3 tab2
$(function(){

    $('.section3 .tab2 .activeArea .titBox a').click(function(){

        $(this).parent().siblings('.activeList').slideToggle(1000);
        console.log('a');
    })


});




// navbar



//
// $(document).ready(function() {
//
//     $('.navbar li a').click(function(){
//       var idx = $(this).parent().index();
//     //   $(this).parent().addClass('on').siblings().removeClass();
//         var move = $('#body_Content section').eq(idx+1).offset().top;
//         console.log(move);
//         $('body,html').animate({
//              scrollTop:move
//         })
//
//
//
//
//
//     });
//
//     $(window).scroll(function(){
//         var st = $(window).scrollTop();
//         console.log(st);
//         for(var i=0; i<3; i++){
//
//             if(st >= $('#body_Content section').eq(i+1).offset().top){
//
//                 $('.navbar li').eq(i).addClass('on').siblings().removeClass();
//
//             }
//         }
//     })
//
//
// });
