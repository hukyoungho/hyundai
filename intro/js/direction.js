
//section3
$(function(){
  $('#body_Content .section3 .contents_box .glob_domes_tab .tabTit a ').click(function(){
        var idx = $(this).parent().index();
        console.log(idx);
        if(idx == 0){
            $('#body_Content .section3 .contents_box .glob_domes_tab .domesticList').css('display','block').siblings('.globalList').css('display','none');

        }
        else if(idx == 1){
            $('#body_Content .section3 .contents_box .glob_domes_tab .global_list').css('display','block').siblings('.domesticList').css('display','none');
        }

  });

});
