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
