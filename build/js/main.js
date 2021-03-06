'use strict';

// auxiliary.js - модуль вспомогательных функций;
(function () {
  const stopExecution = () => {
    return;
  };

  const failSave = (element) => {
    const status = checkFailSave(element);
    if (!status) {
      return stopExecution;
    }

    return status;
  };

  const defineExistance = (arrayOfStatus) => {
    let isExist = null;
    for (const status of arrayOfStatus) {
      if (!status) {
        isExist = false;
      }
    }
    return isExist;
  };

  const checkSliderElements = (block, prevBtn, nextBtn) => {
    const status = checkFailSave(block);
    if (!status) {
      return;
    }

    const swiperContainer = block.querySelector(`.swiper-container`);

    const isSwiperContainerExist = window.auxiliary.checkFailSave(swiperContainer);

    const isPrevBtnExist = window.auxiliary.checkFailSave(prevBtn);
    const isNextBtnExist = window.auxiliary.checkFailSave(nextBtn);

    const elementsStatus = [isSwiperContainerExist, isPrevBtnExist, isNextBtnExist];

    if (defineExistance(elementsStatus) !== true) {
      return;
    }

    return;
  };

  const scrollToBlock = (block) => {
    block.scrollIntoView({block: `center`, behavior: `smooth`});
  };

  const hideBlock = (block) => {
    block.classList.add(`hidden`);
  };

  const showBlock = (block) => {
    block.classList.remove(`hidden`);
  };

  const checkFailSave = (block) => {
    return Boolean(block);
  };

  window.auxiliary = {
    scrollToBlock,
    hideBlock,
    showBlock,
    checkFailSave,
    failSave,
    checkSliderElements,
    stopExecution,
  };
})();

'use strict';

// consts.js - модуль глобальных констант
(function () {
  const KeyboardCode = {
    ESC: 27,
    ENTER: 13,
    TAB: 9,
  };

  const Tag = {
    SPAN: `span`,
    P: `p`,
    B: `b`,
  };

  window.consts = {
    KeyboardCode,
    Tag,
  };
})();

'use strict';

// membership.js - модуль управления поведением элементов в разделе Абонементы
(function () {
  const membershipDurItems = document.querySelectorAll(`.membership__duration-item`);

  const oneMonthList = document.querySelectorAll(`.membership__list--1month`);
  const sixMonthsList = document.querySelectorAll(`.membership__list--6months`);
  const twelveMonthsList = document.querySelectorAll(`.membership__list--12months`);

  const tabLists = {
    1: oneMonthList,
    6: sixMonthsList,
    12: twelveMonthsList,
  };

  const changeList = (value) => {
    const listNumber = parseInt(value, 10);
    for (const duration in tabLists) {
      if (duration !== listNumber) {
        if (window.auxiliary.checkFailSave(tabLists[duration][0])) {
          tabLists[duration][0].classList.add(`membership__list--hidden`);
        }
      }
    }
    if (window.auxiliary.checkFailSave(tabLists[listNumber][0])) {
      tabLists[listNumber][0].classList.remove(`membership__list--hidden`);
    }
  };

  const setListeners = (items) => {
    for (const item of items) {
      item.addEventListener(`keyup`, onDurBtnKeyUpChange);
      item.addEventListener(`change`, onDurBtnClickChange);
    }
  };

  const onDurBtnClickChange = (evt) => {
    const input = evt.target;
    const value = parseInt(input.value, 10);

    changeList(value);
  };

  const onDurBtnKeyUpChange = (evt) => {
    if (evt.keyCode === window.consts.KeyboardCode.TAB) {
      const input = evt.target.previousElementSibling;
      if (window.auxiliary.checkFailSave(input)) {
        input.click();
      }
    }
  };

  if (window.auxiliary.checkFailSave(membershipDurItems)) {
    setListeners(membershipDurItems);
  }
})();

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

'use strict';

// utility.js - модуль утилитарных функций;
(function () {
  const mainScreenBtn = document.querySelector(`.main-screen__btn`);

  const membership = document.querySelector(`.membership`);

  const isBtnExist = window.auxiliary.checkFailSave(mainScreenBtn);
  const isMembershipExist = window.auxiliary.checkFailSave(membership);

  if (isBtnExist) {
    mainScreenBtn.addEventListener(`click`, () => {
      if (isMembershipExist) {
        window.auxiliary.scrollToBlock(membership);
      }
    });
  }

})();

'use strict';

// trainers.js - модуль управления поведением раздела `Тренеры`
(function () {
  const trainers = document.querySelector(`.trainers`);
  const prevBtn = document.querySelector(`.trainers__button--prev`);
  const nextBtn = document.querySelector(`.trainers__button--next`);

  window.auxiliary.checkSliderElements(trainers, prevBtn, nextBtn);

  const swiperTrainers = new window.Swiper(`.trainers__list-wrapper`, {
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    breakpoints: {
      320: {
        width: 226,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        slidesOffsetBefore: 112,
        slidesOffsetAfter: 0,
      },
      768: {
        width: 566,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1366: {
        width: 1160,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
      }
    }
  });

  if (!window.auxiliary.checkFailSave(swiperTrainers)) {
    window.auxiliary.stopExecution();
  }

})();
