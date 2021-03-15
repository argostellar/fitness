'use strict';

// auxiliary.js - модуль вспомогательных функций;
(function () {
  const stopExecution = () => {
    return;
  };

  const failSave = (element) => {
    if (!element) {
      return stopExecution;
    }

    return true;
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
    failSave(block);

    const swiperContainer = block.querySelector(`.swiper-container`);

    const isSwiperContainerExist = window.auxiliary.checkFailSave(swiperContainer);

    const isPrevBtnExist = window.auxiliary.checkFailSave(prevBtn);
    const isNextBtnExist = window.auxiliary.checkFailSave(nextBtn);

    const elementsStatus = [isSwiperContainerExist, isPrevBtnExist, isNextBtnExist];

    if (defineExistance(elementsStatus) !== true) {
      return stopExecution;
    }

    return true;
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
    if (!block) {
      return false;
    }
    return true;
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
  const membershipItems = document.querySelectorAll(`.membership__item`);

  let pricesMap = {};

  const findInputs = (items) => {
    let inputs = [];
    for (let i = 0; i < items.length; i++) {
      inputs[i] = items[i].querySelector(`input`);
    }
    return inputs;
  };

  const getInitialPrices = (items) => {
    let initialPrices = [];
    for (let i = 0; i < items.length; i++) {
      window.auxiliary.failSave(items[i]);
      const paragraph = items[i].querySelector(`p`);
      if (paragraph) {
        const price = parseInt(paragraph.textContent, 10);
        initialPrices[i] = price;
      }
    }
    return initialPrices;
  };

  const generateConvertedPrices = (prices, multiplier) => {
    let convertedPrices = [];
    for (let i = 0; i < prices.length; i++) {
      convertedPrices[i] = prices[i] * multiplier;
    }
    return convertedPrices;
  };

  const generatePricesMap = (prices, multipliers) => {
    let map = {};
    for (let i = 0; i < multipliers.length; i++) {
      map[multipliers[i]] = generateConvertedPrices(prices, multipliers[i]);
    }
    return map;
  };

  const getInputsValues = (inputs) => {
    const values = [];
    for (let i = 0; i < inputs.length; i++) {
      values[i] = inputs[i].value;
    }
    return values;
  };

  const initializeBlock = (items, inputItems) => {
    const inputs = findInputs(inputItems);
    const values = getInputsValues(inputs);
    const prices = getInitialPrices(items);
    pricesMap = generatePricesMap(prices, values);
  };

  const findElements = (items, tag) => {
    let elements = [];
    for (let i = 0; i < items.length; i++) {
      window.auxiliary.failSave(items[i]);
      elements[i] = items[i].querySelector(tag);
    }
    return elements;
  };

  const changeValues = (items, value) => {
    const paragraphs = findElements(items, window.consts.Tag.P);
    const shadows = findElements(items, window.consts.Tag.B);
    const newValues = pricesMap[value];

    for (let i = 0; i < paragraphs.length; i++) {
      window.auxiliary.failSave(shadows[i]);
      window.auxiliary.failSave(paragraphs[i]);

      if (shadows[i]) {
        shadows[i].textContent = newValues[i];
      }
      if (paragraphs[i]) {
        paragraphs[i].textContent = newValues[i];
      }
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

    changeValues(membershipItems, value);
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

  if (window.auxiliary.checkFailSave(membershipItems) && window.auxiliary.checkFailSave(membershipDurItems)) {
    initializeBlock(membershipItems, membershipDurItems);
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
