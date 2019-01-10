$(function(){
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
});