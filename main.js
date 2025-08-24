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

const passwordInputs = document.querySelectorAll('.passwordInput');
const toggleButtons = document.querySelectorAll('.togglePassword');
const emailInput = document.querySelector(".email-input");
const changeBtn = document.querySelector(".change-btn");


toggleButtons.forEach((btn, index) => {
  const input = passwordInputs[index];
  const icon = btn.querySelector("span");


  input.addEventListener("input", () => {
    if (input.value.length > 0) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
      input.type = "password";
      icon.textContent = "visibility_off";
    }
  });


  btn.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      icon.textContent = "visibility";
    } else {
      input.type = "password";
      icon.textContent = "visibility_off";
    }
  });
});


emailInput.addEventListener("input", () => {
  toggleSubmitButton();
});


passwordInputs.forEach((input) => {
  input.addEventListener("input", () => {
    toggleSubmitButton();
  });
});


function toggleSubmitButton() {
  const hasEmail = emailInput.value.trim() !== "";
  const hasPassword = Array.from(passwordInputs).some(
    (input) => input.value.trim() !== ""
  );

  if (hasEmail && hasPassword) {
    changeBtn.classList.add("bg-primary-100", "text-white-0");
    changeBtn.classList.remove("bg-black-40", "text-black-60");
  } else {
    changeBtn.classList.add("bg-black-40", "text-black-60");
    changeBtn.classList.remove("bg-primary-100", "text-white-0");
  }
}
