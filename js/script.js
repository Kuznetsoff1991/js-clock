$('.category-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slider-category slider-category_left"></div>',
  nextArrow: '<div class="slider-category slider-category_right"></div>',
  centerMode: true,
  infinite: true,
  autoplay: false,
  pauseOnHover: false,
  centerPadding: '250px',
  draggable: false,
  responsive: [
    {
      breakpoint: 579,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 993,
      settings: {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ],
  focusOnSelect: true
});

$('.works-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slider-works slider-works_left"></div>',
  nextArrow: '<div class="slider-works slider-works_right"></div>',
  infinite: true,
  autoplay: false,
  pauseOnHover: false,
  draggable: false,
  focusOnSelect: false
});

$('.works-slidermob').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slider-works slider-works_left"></div>',
  nextArrow: '<div class="slider-works slider-works_right"></div>',
  infinite: true,
  autoplay: false,
  pauseOnHover: false,
  draggable: false,
  focusOnSelect: false
});

$('.feedback-block__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slider-feed slider-feed_left"></div>',
  nextArrow: '<div class="slider-feed slider-feed_right"></div>',
  infinite: true,
  dots: false,
  autoplay: false,
  pauseOnHover: false,
  draggable: false,
  fade: true,
  cssEase: 'linear',
  speed: 1000
});

$('.partners-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  prevArrow: '<div class="slider-partners slider-partners_left"></div>',
  nextArrow: '<div class="slider-partners slider-partners_right"></div>',
  infinite: true,
  autoplay: false,
  pauseOnHover: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 579,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }
  ],
  focusOnSelect: false
});

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

jQuery(function ($) {
  $("#phone2").mask("+7 (999) 999-99-99");
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