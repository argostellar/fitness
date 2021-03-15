'use strict';

// trainers.js - модуль управления поведением раздела `Тренеры`
(function () {
  const trainers = document.querySelector(`.trainers`);
  const prevBtn = document.querySelector(`.trainers__button--prev`);
  const nextBtn = document.querySelector(`.trainers__button--next`);

  window.auxiliary.checkSliderElements(trainers, prevBtn, nextBtn);

  const swiperTrainers = new window.Swiper(`.swiper-container`, {
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      320: {
        width: 226,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        slidesOffsetBefore: 112,
        slidesOffsetAfter: 0,
        loopAdditionalSlides: 0,
        loopFillGroupWithBlank: false,
      },
      768: {
        width: 566,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        loopAdditionalSlides: 2,
      },
      1366: {
        width: 1160,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
        loopAdditionalSlides: 4,
      }
    }
  });

  if (!window.auxiliary.checkFailSave(swiperTrainers)) {
    window.auxiliary.stopExecution();
  }

})();
