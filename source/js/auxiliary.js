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
