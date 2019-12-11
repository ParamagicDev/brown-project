export default (function DOM() {
  const createElement = (element, props = {}) => {
    if (!element) {
      return null;
    }

    const HTMLElement = document.createElement(element);

    // Assigns properties of the created object onto the given element
    Object.assign(HTMLElement, props);

    return HTMLElement;
  };
  return {
    createElement,
  };
})();
