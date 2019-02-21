$('a[href^="#"]').click(function () {
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top - 0
  }, 1200);
  return false;
});


$(document).ready(function () {

  $('.header-menu__burger').on("click", function () {
    $('.header-menu__burger').css('left', '-600px');
    $('.header-menu').css('left', '0');
  });

  $('.header-menu__close').on("click", function () {
    $('.header-menu').css('left', '-600px');
    $('.header-menu__burger').css('left', '15px');
  });

  $('.header-menu__rel a').on("click", function () {
    $('.header-menu').css('left', '-600px');
    $('.header-menu__burger').css('left', '15px');
  });
});

$(document).ready(function () {

  $('.header-block__button').on("click", function () {
    $('.overlay').show();
  });

  $('.footer-block__button').on("click", function () {
    $('.overlay').show();
  });

  $('.popup-close').on("click", function () {
    $('.overlay').hide();
  });

});

jQuery(function ($) {
  $("#phone1").mask("+7 (999) 999-99-99");
});

$(function () {

  $(window).scroll(function () {

    if ($(this).scrollTop() != 0) {

      $('#toTop').fadeIn();

    } else {

      $('#toTop').fadeOut();

    }

  });

  $('#toTop').click(function () {

    $('body,html').animate({
      scrollTop: 0
    }, 800);

  });

});