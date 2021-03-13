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
