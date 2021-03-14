'use strict';

// reviews.js - модуль управления поведением раздела "Отзывы"
(function () {
  const reviews = window.global.reviews;
  const prevBtn = window.global.reviewsPrevBtn;
  const nextBtn = window.global.reviewsNextBtn;

  window.auxiliary.checkSlider(reviews, prevBtn, nextBtn);

  const swiperReviews = new window.Swiper('.reviews__list-wrapper', {
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      breakpoints: {
        320: {
          width: 226,
          spaceBetween: 0,
        },
        768: {
          width: 566,
          spaceBetween: 30,
        },
        1366: {
          width: 560,
          spaceBetween: 40,
        }
      }
    });
})();
