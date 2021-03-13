'use strict';

// auxiliary.js - модуль вспомогательных функций;
(function () {
  const scrollToBlock = (block) => {
    block.scrollIntoView({ block: "center", behavior: "smooth" })
  };

  const hideBlock = (block) => {
    block.classList.add('hidden');
  };

  const showBlock = (block) => {
    block.classList.remove('hidden');
  };

  const checkFailSave = (block) => {
    if (block !== undefined) {
      return true;
    }
  };

  window.auxiliary = {
    scrollToBlock: scrollToBlock,
    hideBlock: hideBlock,
    showBlock: showBlock,
    checkFailSave: checkFailSave,
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

  const Direction = {
    forward: 'forward',
    backward: 'backward',
  }

  window.consts = {
    KeyboardCode: KeyboardCode,
    Direction: Direction,
  }
})();

'use strict';

// global.js - модуль объектов на странице
(function () {
  const main = document.querySelector('.main');
  const footer = document.querySelector('.footer');

  const mainScreen = document.querySelector('.main-screen');
  const mainScreenBtn = document.querySelector('.main-screen__btn');

  const membership = document.querySelector('.membership');
  const membershipDurList = document.querySelector('.membership__duration-list');
  const membershipDurItems = document.querySelectorAll('.membership__duration-item');
  const membershipList = document.querySelector('.membership__list');
  const membershipItems = document.querySelectorAll('.membership__item');

  const trainers = document.querySelector('.trainers');
  const trainersPrevBtn = document.querySelector('.trainers__button--prev');
  const trainersNextBtn = document.querySelector('.trainers__button--next');
  const trainersList = document.querySelector('.trainers__list');
  const trainersItems = document.querySelectorAll('.trainers__item');

  const reviews = document.querySelector('.reviews');
  const reviewsPrevBtn = document.querySelector('.reviews__btn--prev');
  const reviewsNextBtn = document.querySelector('.reviews__btn--next');
  const reviewsList = document.querySelector('.reviews__list');
  const reviewsItems = document.querySelectorAll('.reviews__item');



  window.global = {
    main: main,
    footer: footer,
    mainScreen: mainScreen,
    mainScreenBtn: mainScreenBtn,
    membership: membership,
    membershipDurList: membershipDurList,
    membershipDurItems: membershipDurItems,
    membershipList: membershipList,
    membershipItems: membershipItems,
    trainers: trainers,
    trainersPrevBtn: trainersPrevBtn,
    trainersNextBtn: trainersNextBtn,
    trainersList: trainersList,
    trainersItems: trainersItems,
    reviews: reviews,
    reviewsPrevBtn: reviewsPrevBtn,
    reviewsNextBtn: reviewsNextBtn,
    reviewsList: reviewsList,
    reviewsItems: reviewsItems,
  };
})();

'use strict';

// membership.js - модуль управления поведением элементов в разделе Абонементы
(function () {
  const membership = window.global.membership;
  const membershipDurList = window.global.membershipDurList;
  const membershipDurItems = window.global.membershipDurItems;
  const membershipList = window.global.membershipList;
  const membershipItems = window.global.membershipItems;

  let pricesMap = {};

  const findInput = (item) => {
    const input = item.querySelector('input');
    return input;
  };

  const findInputs = (items) => {
    let inputs = [];
    for (let i = 0; i < items.length; i++) {
      inputs[i] = findInput(items[i]);
    }
    return inputs;
  };

  const findElement = (item) => {
    const textItem = item.querySelector('p');
    return textItem;
  };

  const getInitialPrices = (items) => {
    let initialPrices = [];
    for (let i = 0; i < items.length; i++) {
      const paragraph = findElement(items[i]);
      const price = parseInt(paragraph.dataset.price, 10);
      initialPrices[i] = price;
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

  const findParagraphs = (items) => {
    let paragraphs = [];
    for (let i = 0; i < items.length; i++) {
      paragraphs[i] = findElement(items[i]);
    }
    return paragraphs;
  };
  const changeValues = (items, value) => {
    const paragraphs = findParagraphs(items);
    const newValues = pricesMap[value];

    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].dataset.price = newValues[i];
      paragraphs[i].textContent = newValues[i];
    }
  };

  const setListeners = (items) => {
    for (const item of items) {
      item.addEventListener('keyup', onDurBtnKeyUpChange);
      item.addEventListener('change', onDurBtnClickChange);
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

'use strict';

// utility.js - модуль утилитарных функций;
(function () {

  const mainScreen = window.global.mainScreen;
  const mainScreenBtn = window.global.mainScreenBtn;

  const membership = window.global.membership;

  const isBtnExist = window.auxiliary.checkFailSave(mainScreenBtn);
  const isMembershipExist = window.auxiliary.checkFailSave(membership);

  if (isBtnExist) {
    mainScreenBtn.addEventListener('click', () => {
      if (isMembershipExist) {
        window.auxiliary.scrollToBlock(membership);
      }
    });
  }

})();

'use strict';

// trainers.js - модуль управления поведением раздела "Тренеры"
(function () {
  const prevBtn = window.global.trainersPrevBtn;
  const nextBtn = window.global.trainersNextBtn;

  const swiperContainer = window.global.trainers.querySelector('.swiper-container');
  const isSwiperContainerExist = window.auxiliary.checkFailSave(swiperContainer);

  const isPrevBtnExist = window.auxiliary.checkFailSave(prevBtn);
  const isNextBtnExist = window.auxiliary.checkFailSave(nextBtn);

  if (!isPrevBtnExist && !isNextBtnExist && !isSwiperContainerExist) {
    return;
  }

  const swiperTrainers = new window.Swiper('.swiper-container', {
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

})();
