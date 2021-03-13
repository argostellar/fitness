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
