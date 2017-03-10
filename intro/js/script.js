//common
// section2
$(function(){
    $('.section2 #lnb ul li a').click(function(){

        console.log(1);
        $(this).addClass('on').parent().siblings().children('a').removeClass();
    });

});



// navbar
$(function(){
  $('.navbar li').click(function(){
      $(this).addClass('on').siblings().removeClass();

  });

});




$(document).ready(function() {

    $('.navbar li a').click(function(){
      var idx = $(this).parent().index();

        var move = $('#body_Content section').eq(idx+1).offset().top;
        console.log(move);
        $('body,html').animate({
             scrollTop:move
        })





    });

    // $(window).scroll(function(){
    //     var st = $(window).scrollTop();
    //     // console.log(st);
    //     console.log()
    //     for(var i=0; i<5; i++){
    //         //  console.log($('#body_Content section:eq('+i+')').offset().top);
    //         if(st >= $('#body_Content section:eq('+i+')').offset().top-200){
    //             // console.log(1);
    //             $('.navbar li').eq(i).find('img').css({
    //                 'display':'block'
    //
    //             }).parent().parent().siblings().find('img').css({
    //                 'display':'none'
    //
    //             });
    //             $('.navbar li').eq(i).find('a').css({
    //                 'border-bottom': '2px solid #000',
    //                 'padding-bottom': '3px',
    //                 'height':'auto'
    //             }).parent().siblings().find('a').css({
    //                 'border-bottom': '2px solid #000',
    //                 'padding-bottom': 'none',
    //                 'height':'10px'
    //             });
    //         }
    //     }
    // })


});
