$('.main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  draggable: false,
  fade: true,
  cssEase: 'linear',
  speed: 1000
});
$('.catalog-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  draggable: false,
  fade: true,
  cssEase: 'linear',
  speed: 1000
});
$('.services-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  dots: false,
  autoplay: false,
  pauseOnHover: false,
  draggable: false
});


$('a[href^="#"]').click(function () {
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top - 0
  }, 1200);
  return false;
});

// setTimeout(function () {
//   $('.overlay').show();
// }, 10000);

$(document).ready(function () {

  $('.modal').on("click", function () {
    $('.overlay').show();
  });

  $('.popup-close').on("click", function () {
    $('.overlay').hide();
  });

  $('.popuptime-close').on("click", function () {
    $('.overlaytime').hide();
  });

  $('.services-blockone__button1').on("click", function () {
    $('.services-blocktwo__blockone').show();
    $('.services-blocktwo__blocktwo').hide();
    $('.services-blocktwo__blockthree').hide();
  });

  $('.services-blockone__button2').on("click", function () {
    $('.services-blocktwo__blockone').hide();
    $('.services-blocktwo__blocktwo').show();
    $('.services-blocktwo__blockthree').hide();
  });

  $('.services-blockone__button3').on("click", function () {
    $('.services-blocktwo__blockone').hide();
    $('.services-blocktwo__blocktwo').hide();
    $('.services-blocktwo__blockthree').show();
  });

  $('.menu-burger__open').on("click", function () {
    $('.menu-burger__close').css('display', 'flex');
    $('.menu-burger__open').hide();
    $('.mobmenu-block').css('display', 'block');
  });

  $('.menu-burger__close').on("click", function () {
    $('.menu-burger__open').css('display', 'flex');
    $('.menu-burger__close').hide();
    $('.mobmenu-block').hide();
  });

  $('.mobmenu-block__ref').on("click", function () {
    $('.menu-burger__open').css('display', 'flex');
    $('.menu-burger__close').hide();
    $('.mobmenu-block').hide();
  });
});

$(document).ready(function () {

  $('.present-block__button').on("click", function () {
    $('.overlaypresent').show();
  });

  $('.popuppresent-close').on("click", function () {
    $('.overlaypresent').hide();
  });

  $('.button-next1').on("click", function () {
    $('.step-one').hide();
    $('.step-two').css('display', 'flex');
  });

  $('.button-next2').on("click", function () {
    $('.step-two').hide();
    $('.step-three').css('display', 'flex');
  });

  $('.button-next3').on("click", function () {
    $('.step-three').hide();
    $('.step-for').css('display', 'flex');
  });

  $('.button-next4').on("click", function () {
    $('.step-for').hide();
    $('.step-five').css('display', 'flex');
  });

  $('.button-next5').on("click", function () {
    $('.step-five').hide();
    $('.step-six').css('display', 'flex');
  });

  $('.button-prev1').on("click", function () {
    $('.step-two').hide();
    $('.step-one').css('display', 'flex');
  });

  $('.button-prev2').on("click", function () {
    $('.step-three').hide();
    $('.step-two').css('display', 'flex');
  });

  $('.button-prev3').on("click", function () {
    $('.step-for').hide();
    $('.step-three').css('display', 'flex');
  });

  $('.button-prev4').on("click", function () {
    $('.step-five').hide();
    $('.step-for').css('display', 'flex');
  });

  $('.button-prev5').on("click", function () {
    $('.step-six').hide();
    $('.step-five').css('display', 'flex');
  });
});

jQuery(function ($) {
  $("#phone1").mask("+7 (999) 999-99-99");
});

jQuery(function ($) {
  $("#phone2").mask("+7 (999) 999-99-99");
});

jQuery(function ($) {
  $(".popuppresent-input").mask("+7 (999) 999-99-99");
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


idleTimer = null;
idleState = false; // состояние отсутствия
idleWait = 12000; // время ожидания в мс. (1/1000 секунды)

$(document).ready(function () {
  $(document).bind('mousemove keydown scroll', function () {
    clearTimeout(idleTimer); // отменяем прежний временной отрезок
    if (idleState == true) {
      // Действия на возвращение пользователя
      idleWait = 40000;
      clearTimeout(idleTimer);
    }

    idleState = false;
    idleTimer = setTimeout(function () {
      // Действия на отсутствие пользователя
      $('.overlaytime').show();
      idleState = true;
    }, idleWait);
  });

  $("body").trigger("mousemove"); // сгенерируем ложное событие, для запуска скрипта
});
