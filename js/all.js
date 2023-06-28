$(document).ready(function () {

  $('.navbar-btn').click(function (e) {
    $('.navbar-menu-collapse').slideToggle('show');
  });

  $('.backtotop').click(function (event) {
    $('body').animate({ scrollTop: 0 },800);
  });

});

const swiper = new Swiper('.swiper', {

    slidesPerView: 1,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      loop: true, 
      clickable: true,
    },
});