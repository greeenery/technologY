function changeHeader() {

  
  let lastScrollTop = 0, delta = 15;


  $(window).scroll(function (event) {
    let st = $(this).scrollTop();

    if (st > 0) {
      $("header").addClass("black");
    } else {
      $("header").removeClass("black");
    }

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && lastScrollTop > 0) {
      $("header").css("top", "-120px");
    } else {      
      $("header").css("top", "0px");
    }
    lastScrollTop = st;
    


  });

}

changeHeader();

function mobileSidebar__Init(){

  $(".btn-sidemenu").click(function(){
    $(".mobile-side-menu").addClass("active");
  });

  
  $(".mobile-side-menu__btn-close").click(function(){
    $(".mobile-side-menu").removeClass("active");
  });


}
mobileSidebar__Init();

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
    spaceBetween: 8,
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
        spaceBetween: 16
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 24
      },
      1280: {
        slidesPerView: 4.5,
        spaceBetween: 32
      },
    }
  });
}

slide__Init();