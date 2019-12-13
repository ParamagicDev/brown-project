import sortingPeople from './sortingPeople.js';

export default function SortOptions() {
  const _nameOptions = ['(A-Z)', '(Z-A)'];

  const renderLabel = () => {
    const label = document.createElement('label');

    label.htmlFor = 'sort-select';
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
    const values = ['first-a-to-z', 'first-z-to-a'];

    const docFrag = new DocumentFragment();
    const optgroup = document.createElement('optgroup');
    optgroup.label = 'First Name';
    _nameOptions.forEach((opt, index) => {
      const optElement = document.createElement('option');
      optElement.innerText = 'First Name: ' + opt;
      optElement.value = values[index];

      optgroup.appendChild(optElement);
    });

    docFrag.appendChild(optgroup);
    return docFrag;
  };

  const renderLastName = () => {
    const values = ['last-a-to-z', 'last-z-to-a'];

    const docFrag = new DocumentFragment();
    const optgroup = document.createElement('optgroup');
    optgroup.label = 'Last Name';
    _nameOptions.forEach((opt, index) => {
      const optElement = document.createElement('option');
      optElement.innerText = 'Last Name: ' + opt;
      optElement.value = values[index];
      optgroup.appendChild(optElement);
    });

    docFrag.appendChild(optgroup);
    return docFrag;
  };

  const renderDateOfBirth = () => {
    const values = ['young-to-old', 'old-to-young'];
    const docFrag = new DocumentFragment();

    const optgroup = document.createElement('optgroup');
    optgroup.label = 'Date Of Birth';

    const dobOptions = ['(Young-Old)', '(Old-Young)'];
    dobOptions.forEach((opt, index) => {
      const optElement = document.createElement('option');
      optElement.innerText = 'DOB: ' + opt;
      optElement.value = values[index];
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

  const render = people => {
    const docFrag = new DocumentFragment();

    const label = renderLabel();
    docFrag.appendChild(label);

    const sortSelect = document.createElement('select');
    sortSelect.id = 'sort-select';

    sortSelect.addEventListener('change', event => {
      const container = document.querySelector('.container');
      const docFrag = new DocumentFragment();

      // sortedPeople.forEach(person => docFrag.appendChild(person.render()));
      // console.log(event); console.log(event.target.value);
    });

    sortSelect.appendChild(renderOptions());
    docFrag.appendChild(sortSelect);
    return docFrag;
  };

  return {
    render,
  };
}
