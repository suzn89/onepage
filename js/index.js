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



  var viewsub = $('.viewsub > ul > li');
  open(); //맨 처음에 열려있을수있게 호출해줌
  viewsub.hover(function() {
    close();
    var tg = $(this);
    var panelImage = tg.find('.panel');
    var imageHeight = 210;
    panelImage.animate({
      height: imageHeight
    }, {
      duration: 500,
      queue: false,
      easing: 'easeOutCubic'
    });
  }, function() {
    open();
    var tg = $(this);
    var panelImage = tg.find('.panel');
    var imageHeight = 0
    panelImage.animate({
      height: imageHeight
    }, {
      duration: 500,
      queue: false,
      easing: 'easeOutCubic'
    });
  });
  //기본으로 3번째꺼 열려있게 하기
  //사용자 함수 쓰니까 호출해줘야함.. 	
  function open() {
    var tg = $('.viewsub > ul > li').eq(0);
    var panelImage = tg.find('.panel');
    var imageHeight = 210;
    panelImage.animate({
      height: imageHeight
    }, {
      duration: 500,
      queue: false,
      easing: 'easeOutCubic'
    });
  }

  function close() {
    var tg = $('.viewsub > ul > li').eq(0);
    var panelImage = tg.find('.panel');
    var imageHeight = 0
    panelImage.animate({
      height: imageHeight
    }, {
      duration: 500,
      queue: false,
      easing: 'easeOutCubic'
    });
  }



});