$(document).ready(function () {
  
  /*
  當.select-btn點擊時.dropdown-menu出現
  當.new2old點擊時,取消事件a,使.dropdown-menu出現,使dropdown-btn-text文字變成由新到舊
  */
  $('.select-new-old .select-btn').click(function (e) {
    $('.dropdown-menu').toggleClass('show');
  });

  $('.new2old').click(function(e) {
    e.preventDefault();
    $('.dropdown-menu').toggleClass('show');
    $('.dropdown-btn-text').text('由新到舊');
  });

  $('.old2new').click(function(e) {
    e.preventDefault();
    $('.dropdown-menu').toggleClass('show');
    $('.dropdown-btn-text').text('由舊到新');
  });

  /* backtotop */
  $('.backtotop').click(function(e) {
    $('html,body').animate({ scrollTop: 0 },'slow');
  });

});

/* swiper */
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