// main-slide
const swiper = new Swiper('.main-slide .swiper', {
  loop: true,
  // If we need pagination
  pagination: {
    el: '.main-slide .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.main-slide .swiper-button-next',
    prevEl: '.main-slide .swiper-button-prev',
  },

});

// main-slide
const swiper2 = new Swiper('.section-1__slide .swiper', {
  slidesPerView:4.8,
  centeredSlides:true,
  spaceBetween:40,
  // If we need pagination
  pagination: {
    el: '.section-1__slide .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.section-1__slide .swiper-button-next',
    prevEl: '.section-1__slide .swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.section-1__slide .swiper-scrollbar',
  },
});