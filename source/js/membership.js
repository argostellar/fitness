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
