// 制作実績
const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    speed: 1000,
    breakpoints: {
        1920: {
            slidesPerView: 5,
        },
        1366: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

// ナビゲーション
$(document).ready(function(){
    $('#open_nav').on('click', function(){
      $('#wrapper, #nav').toggleClass('show');
    });
});
$(document).ready(function(){
    $('#close_nav').on('click', function(){
      $('#wrapper, #nav').toggleClass('show');
    });
});

// スムーススクロール
$(function(){
    $('a[href^="#"]').click(function(){
      const speed = 1000;
      const href= $(this).attr("href");
      const target = $(href == "#" || href == "" ? 'html' : href);
      const position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
});

// フェードイン
$(function(){
    $(window).scroll(function (){
      $('.fadein').each(function(){
            const elemPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('scrollin');
            }
        });
    });
});

// contact submit
$(document).ready(function () {

    const $submitBtn = $('#js-submit')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== "" &&
        $('#form input[type="massage"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
      } else {
        $submitBtn.prop('disabled', true);
      }
    });
});