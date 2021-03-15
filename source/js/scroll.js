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
