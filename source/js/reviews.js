'use strict';

// reviews.js - модуль управления поведением раздела "Отзывы"
(function () {
  const prevBtn = window.global.reviewsPrevBtn;
  const nextBtn = window.global.reviewsNextBtn;

  const swiperContainer = window.global.reviews.querySelector('.swiper-container');
  const isSwiperContainerExist = window.auxiliary.checkFailSave(swiperContainer);

  const isPrevBtnExist = window.auxiliary.checkFailSave(prevBtn);
  const isNextBtnExist = window.auxiliary.checkFailSave(nextBtn);

  if (!isPrevBtnExist && !isNextBtnExist && !isSwiperContainerExist) {
    return;
  }

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
