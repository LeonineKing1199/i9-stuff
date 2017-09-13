'use strict';

;(function () {
  var DocumentSelect = {
    view: function view() {
      return m('select', [m('option', { selected: true, disabled: true }, 'Please select a document'), m('option', 'U.S. Passport or U.S. Passport Card')]);
    }
  };

  var I9Form = {
    view: function view() {
      return m(DocumentSelect);
    }
  };

  window.mountI9Section2 = function (element, attrs) {
    m.mount(element, {
      view: function view() {
        return m(I9Form, attrs);
      }
    });
  };
})();
