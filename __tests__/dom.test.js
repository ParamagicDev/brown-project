import DOM from '../src/js/dom.js';
// const DOM = require('../src/js/dom.js');

describe('DOM()', () => {
  describe('createElement()', () => {
    describe('Should create a div with class container', () => {
      const element = DOM.createElement('div', {className: 'container'});

      // expect(element.tagName).toBe('DIV');
    });
  });
});
