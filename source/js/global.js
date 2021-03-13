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
