'use strict';

// reviews.js - модуль управления поведением раздела `Отзывы`
(function () {
  const reviews = document.querySelector(`.reviews`);
  const prevBtn = document.querySelector(`.reviews__btn--prev`);
  const nextBtn = document.querySelector(`.reviews__btn--next`);

  window.auxiliary.checkSliderElements(reviews, prevBtn, nextBtn);

  const swiperReviews = new window.Swiper(`.reviews__list-wrapper`, {
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

  if (!window.auxiliary.checkFailSave(swiperReviews)) {
    window.auxiliary.stopExecution();
  }

})();
