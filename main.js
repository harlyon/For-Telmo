//$(document).on('click', 'a[href^="#"]', function(event) {

  // event.preventDefault();

  // $('html,body').animate({
      // scrollTop: $($.attr(this, 'href')).offset().top
  // }, 100);

//});





$(window).scroll(function(){
    if ($(window).scrollTop() >= 400) {
       $('#wrapper').addClass('fixed-header');
    }
    else {
       $('#wrapper').removeClass('fixed-header');
    }
});