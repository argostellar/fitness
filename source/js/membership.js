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
