$(document).ready(function () {

    $('navbar-btn').click(function () {
        $('navbar-menu-collapse').slideToggle('show');
    });

    $('.backtotop').click(function (event) {
        $('body').animate({ scrollTop: 0 },800);
    });


});

const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerGroup: 24,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 24,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
});