import DOM from '../src/js/dom.js';

describe('DOM()', () => {
  describe('createElement()', () => {
    test('Should create a div with class container', () => {
      const element = DOM.createElement('div', {className: 'container'});

      expect(element.tagName).toBe('DIV');
      expect(element.className).toBe('container');
    });
    test('Should create an unknown html element if given an improper tag', () => {
      const element = DOM.createElement('improper-tag');

      expect(element instanceof HTMLUnknownElement).toBe(true);
    });
  });
});
