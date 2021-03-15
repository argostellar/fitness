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