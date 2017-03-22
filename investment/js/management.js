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

});



// seciont3 tab1
$(function(){
    $('.section3 .selectBox #Select').click(function(){
        var va = $('.section3 .selectBox #Select').val();
                $('.section3 .search > a').click(function(){
                    var va = $('.section3 .selectBox #Select').val();
                    $('.assemblyArea .listArea li').eq(va).addClass('on').siblings().removeClass();

                });


    });
})


// seciont3 tab2
$(function(){
    var count = 0;
    $('.section3 .active .activeArea .titBox a').click(function(){
        $(this).parent().siblings('.activeWrap').slideToggle(1000);
        if(count == 0){
            $(this).css({
                'background-image':'url(../img/investment/icon_close.gif)',
                'color':'#fff',
                'background-color':'#555'
            }).text('close');
            count++;
        }else{
            $(this).css({
                'background-image':'url(../img/investment/icon_open.gif)',
                'color':'#000',
                'background-color':'#fff'
            }).text('open');
            count = 0;
        }
    })
    $('.section3 .active .activeArea .btn a').click(function(){
        $(this).parent().parent().parent().slideToggle(1000);
        $('.section3 .active .activeArea .titBox a').css({
            'background-image':'url(../img/investment/icon_open.gif)',
            'color':'#000',
            'background-color':'#fff'
        }).text('open');
    })
    $('.section3 .tabWrap > div > h5 a').click(function(){

      $(this).parent().parent().addClass('on').siblings().removeClass();
      console.log('a');
    })

});




// navbar




$(document).ready(function() {

    $('.navbar li a').click(function(){
      var idx = $(this).parent().index();
    //   $(this).parent().addClass('on').siblings().removeClass();
        var move = $('#body_Content section').eq(idx+1).offset().top;
        console.log(move);
        $('body,html').animate({
             scrollTop:move
        })





    });

    $(window).scroll(function(){
        var st = $(window).scrollTop();
        console.log(st);
        for(var i=0; i<3; i++){

            if(st >= $('#body_Content section').eq(i+1).offset().top-200){

                $('.navbar li').eq(i).addClass('on').siblings().removeClass();

            }
        }
    })


});
