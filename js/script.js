function changeHeaderColor() {

  $(window).scroll(function (event) {
    let st = $(this).scrollTop();
    if (st > 0) {
      $("header").addClass("black");
    } else {
      $("header").removeClass("black");
    }
  });

}

changeHeaderColor();


function slide__Init() {
  // main-slide
  const mainslide = new Swiper('.main-slide .swiper', {
    loop: true,
    speed: 1000,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: '.main-slide .swiper-pagination',
      clickable: true,
    },

  });

  // section-1 slide
  const sectionslide = new Swiper('.section-1__slide .swiper', {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 40,
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

    breakpoints: {
      768: {
        slidesPerView: 2.5,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 40
      },
      1280: {
        slidesPerView: 4.5,
        spaceBetween: 40
      },
    }
  });
}

slide__Init();