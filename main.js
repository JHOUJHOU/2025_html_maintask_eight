import './assets/css/main.css';

// 引入 Swiper 和模組
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

// 引入 Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiper = new Swiper('.mySwiper', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    slideChange: function() {
      const activeIndex = this.activeIndex;
      
      const bullets = document.querySelectorAll('.mySwiper .swiper-pagination-bullet');
      bullets.forEach((bullet, index) => {
        if (index === activeIndex) {
          bullet.classList.add('swiper-pagination-bullet-active');
        } else {
          bullet.classList.remove('swiper-pagination-bullet-active');
        }
      });
    }
  }
});

const swiper2 = new Swiper('.mySwiper2', {
  modules: [Pagination, Navigation],
  slidesPerView: 1.1,
  spaceBetween: 16,
  loop: false,
  breakpoints: {
    768: { 
      slidesPerView: 4,
      spaceBetween: 24,
      slidesPerGroup: 1
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-cus',
    prevEl: '.swiper-button-prev-cus',
  },
});

const swiper3 = new Swiper('.mySwiper3', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.mySwiper3 .swiper-pagination',
    clickable: true,
  },
  on: {
    slideChange: function() {
      const activeIndex = this.activeIndex;
      
      const bullets = document.querySelectorAll('.mySwiper .swiper-pagination-bullet');
      bullets.forEach((bullet, index) => {
        if (index === activeIndex) {
          bullet.classList.add('swiper-pagination-bullet-active');
        } else {
          bullet.classList.remove('swiper-pagination-bullet-active');
        }
      });
    }
  }
});