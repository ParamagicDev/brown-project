import sortingPeople from './sortingPeople.js';
export default function SortBtn() {
  const _nameOptions = ['(A-Z)', '(Z-A)'];

  const renderLabel = () => {
    const label = document.createElement('label');

    label.for = 'sort-select';
    label.className = 'sort-label';
    label.innerText = 'Sort by:';

    return label;
  };

  const renderInitialOpt = () => {
    const initialOpt = document.createElement('option');
    initialOpt.value = '';
    initialOpt.innerText = '-- Select a sorting method --';
    return initialOpt;
  };

  const renderFirstName = () => {
    const docFrag = new DocumentFragment();
    const optgroup = document.createElement('optgroup');
    optgroup.label = 'First Name';
    _nameOptions.forEach(opt => {
      const optElement = document.createElement('option');
      optElement.innerText = 'First Name: ' + opt;
      optgroup.appendChild(optElement);
    });

    docFrag.appendChild(optgroup);
    return docFrag;
  };

  const renderLastName = () => {
    const docFrag = new DocumentFragment();
    const optgroup = document.createElement('optgroup');
    optgroup.label = 'Last Name';
    _nameOptions.forEach(opt => {
      const optElement = document.createElement('option');
      optElement.innerText = 'Last Name: ' + opt;
      optgroup.appendChild(optElement);
    });

    docFrag.appendChild(optgroup);
    return docFrag;
  };

  const renderDateOfBirth = () => {
    const docFrag = new DocumentFragment();

    const optgroup = document.createElement('optgroup');
    optgroup.label = 'Date Of Birth';

    const dobOptions = ['(Jan-Dec)', '(Dec-Jan)'];
    dobOptions.forEach(opt => {
      const optElement = document.createElement('option');
      optElement.innerText = 'DOB: ' + opt;
      optgroup.appendChild(optElement);
    });

    docFrag.appendChild(optgroup);
    return docFrag;
  };

  const renderOptions = () => {
    const docFrag = new DocumentFragment();

    const opts = [
      renderInitialOpt(),
      renderFirstName(),
      renderLastName(),
      renderDateOfBirth(),
    ];
    opts.forEach(e => docFrag.appendChild(e));
    return docFrag;
  };

  const render = () => {
    const docFrag = new DocumentFragment();

    const label = renderLabel();
    docFrag.appendChild(label);

    const sortSelect = document.createElement('select');
    sortSelect.id = 'sort-select';

    sortSelect.appendChild(renderOptions());
    docFrag.appendChild(sortSelect);
    return docFrag;
  };

  return {
    render,
  };
}
