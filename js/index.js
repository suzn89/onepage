$(function(){

  // 상단메뉴 고정
  var menu = $('#header_wrap');  
  $(window).each(function(){
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if (winTop >= 800) {
        menu.addClass('stickyheader').stop().animate({'top':'0'});
      } else {
        menu.removeClass('stickyheader');
      }
    });
  });  

  // SUB페이지 보기 아코디언  !!!!!!!수정이 필요함
  $('activePanel').animate({duration:600,queue:false,easing:'easeOutCubic'});
  var viewsubName = $('.viewsub > ul > li');
  viewsubName.mouseover(function(){
    viewsubName.removeClass('activePanel');
    $(this).addClass('activePanel');
    
  });

  //SUB페이지 보기 아코디언
  var nav = $('.viewsub li');
  nav.hover(
    function(){
      close();
      var tg = $(this);
      var menuImage = tg.find('.subImage');
      //menuImage = 마우스 올렸을 때 보여지는 이미지
      var imageWidth = menuImage.find('img').innerWidth();
      menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
    },
    function(){
      var tg = $(this);
      var menuImage = tg.find('.subImage');
      var imageWidth = 0;
      menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
      open();	
    }
  );
  open();	
  function open(){		
      var tg = $('.viewsub li').filter('.openli');
      var menuImage = tg.find('.subImage');
      var imageWidth = menuImage.find('img').innerWidth();
      menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});		
  }
  
  function close(){
      var tg = $('.viewsub li').filter('.openli');
      var menuImage = tg.find('.subImage');
      var imageWidth = 0;
      menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
  }	




});