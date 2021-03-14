'use strict';

// auxiliary.js - модуль вспомогательных функций;
(function () {
  const stopExecution = () => {
    return;
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
    const swiperContainer = window.global.block.querySelector('.swiper-container');

    const isSwiperContainerExist = window.auxiliary.checkFailSave(swiperContainer);

    const isPrevBtnExist = window.auxiliary.checkFailSave(prevBtn);
    const isNextBtnExist = window.auxiliary.checkFailSave(nextBtn);

    const elementsStatus = [isSwiperContainerExist, isPrevBtnExist, isNextBtnExist];

    if (defineExistance(elementsStatus) !== true) {
      return stopExecution;
    }

    return;
  };

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
    checkSliderElements: checkSliderElements,
  };
})();
