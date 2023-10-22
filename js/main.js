var swiper = new Swiper(".slide-character", {
    slidesPerView: 3.5,
    spaceBetween: 19,
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.2,
      },
      991: {
        slidesPerView: 2.8,
      },
      1200: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 3.5,
      },
    }
  });

  AOS.init({
    duration: 1000,
    once: true,
    
  });