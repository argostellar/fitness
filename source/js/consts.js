'use strict';

// consts.js - модуль глобальных констант
(function () {
  const KeyboardCode = {
    ESC: 27,
    ENTER: 13,
    TAB: 9,
  };

  const Tag = {
    SPAN: `span`,
    P: `p`,
    B: `b`,
  };

  window.consts = {
    KeyboardCode,
    Tag,
  };
})();
