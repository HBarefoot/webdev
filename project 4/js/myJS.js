$(()=>{

  //Adding the backTop button on('scroll')
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  $('#back-to-top').click(function() {
    $("html, body").animate({scrollTop: 0}, 800)
    return false
  });

})
