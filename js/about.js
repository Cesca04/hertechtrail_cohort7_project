var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  // spaceBetween: 30,
  // centeredSlides: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },

  loop: true, 
  
  pagination: {
      el: ".swiper-pagination",
      clickable: false,
  },

  // Responsive breakpoints
  breakpoints: {
      // when window width is >= 320px
      320: {
      slidesPerView: 1,
      spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
      slidesPerView: 2,
      spaceBetween: 30
      },
      // when window width is >= 1024px
      1024: {
      slidesPerView: 3,
      spaceBetween: 40
      }
      // when window width is >= 2560px
      // 2560: {
      // slidesPerView: 4,
      // spaceBetween: 50
      // }
  },
});