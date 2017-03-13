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
$(function(){
  $('#body_Content .section3 .contents_box .glob_domes_tab .tabTit a ').click(function(){
        var idx = $(this).parent().index();
        console.log(idx);
        if(idx == 0){
            $('#body_Content .section3 .contents_box .glob_domes_tab .domesticList').css('display','block').siblings('.globalList').css('display','none');
            $('#body_Content .section3 .contents_box .glob_domes_tab .tabTit').eq(idx).find('a').addClass('on').parent().siblings().find('a').removeClass();

        }else{
            $('#body_Content .section3 .contents_box .glob_domes_tab .globalList').css('display','block').siblings('.domesticList').css('display','none');
            $('#body_Content .section3 .contents_box .glob_domes_tab .tabTit').eq(idx).find('a').addClass('on').parent().siblings().find('a').removeClass();
        }

  });
  $("#body_Content .section3 .contents_box .glob_domes_tab .globalList .glob_lnb li").click(function(){

      $(this).addClass('on').siblings().removeClass();
      console.log('a');
  })
  $("#body_Content .section3 .contents_box .glob_domes_tab .globalList .glob_lnb li").mouseenter(function(){
        $(this).find('a').css({
            color:"#004a80",
            'text-decoration':"underline"
        });

    });
  $("#body_Content .section3 .contents_box .glob_domes_tab .globalList .glob_lnb li").mouseleave(function(){
        $(this).find('a').css({
            color:"#898989",
            'text-decoration':"none"
        });

    });

});



// navbar







$(document).ready(function() {

    $('.navbar li a').click(function(){
      var idx = $(this).parent().index();
        // $(this).parent().addClass('on').siblings().removeClass();
        var move = $('#body_Content section').eq(idx+1).offset().top-100;
        console.log(move);
        $('body,html').animate({
             scrollTop:move
        })
    });

    $(window).scroll(function(){
        var st = $(window).scrollTop();
        console.log(st);
        for(var i=0; i<2; i++){

            if(st >= $('#body_Content section').eq(i+1).offset().top-100){
                $('.navbar li').eq(i).addClass('on').siblings().removeClass();

            }
        }
    })


});
