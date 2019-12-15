import sortingPeople from './sortingPeople.js';

export default function SortOptions() {
  const _nameOptions = ['(A-Z)', '(Z-A)'];

  const _sortByOptions = {
    firstName: {
      'firstName-a-to-z': people => sortingPeople.sortByFirstName(people),
      'firstName-z-to-a': people =>
        sortingPeople.sortByFirstName(people).reverse(),
    },
    lastName: {
      'lastName-a-to-z': people => sortingPeople.sortByLastName(people),
      'lastName-z-to-a': people =>
        sortingPeople.sortByLastName(people).reverse(),
    },
    dob: {
      'dob-young-to-old': people => sortingPeople.sortByDateOfBirth(people),
      'dob-old-to-young': people =>
        sortingPeople.sortByDateOfBirth(people).reverse(),
      'dob-jan-dec': people => sortingPeople.sortByDobMonthDay(people),
      'dob-dec-jan': people =>
        sortingPeople.sortByDobMonthDay(people).reverse(),
    },
  };

  function renderLabel() {
    const label = document.createElement('label');

    label.htmlFor = 'sort-select';
    label.className = 'sort-label';
    label.innerText = 'Sort by:';

    return label;
  }

  function renderInitialOpt() {
    const initialOpt = document.createElement('option');
    initialOpt.value = '';
    initialOpt.innerText = '-- Select a sorting method --';
    return initialOpt;
  }

  function renderFirstName() {
    const values = Object.keys(_sortByOptions.firstName);

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
  }

  function renderLastName() {
    const values = Object.keys(_sortByOptions.lastName);

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
  }

  function renderDateOfBirth() {
    const values = Object.keys(_sortByOptions.dob);
    const docFrag = new DocumentFragment();

    const optgroup = document.createElement('optgroup');
    optgroup.label = 'Date Of Birth';

    const dobOptions = ['(Young-Old)', '(Old-Young)', '(Jan-Dec)', '(Dec-Jan)'];
    dobOptions.forEach((opt, index) => {
      const optElement = document.createElement('option');
      optElement.innerText = 'DOB: ' + opt;
      optElement.value = values[index];
      optgroup.appendChild(optElement);
    });

    docFrag.appendChild(optgroup);
    return docFrag;
  }

  function renderOptions() {
    const docFrag = new DocumentFragment();

    const opts = [
      renderInitialOpt(),
      renderFirstName(),
      renderLastName(),
      renderDateOfBirth(),
    ];
    opts.forEach(e => docFrag.appendChild(e));
    return docFrag;
  }

  const handleSortingListener = (element, people) => {
    element.addEventListener('change', event => {
      const peopleDiv = document.querySelector('.people');
      const docFrag = new DocumentFragment();

      const eventValue = event.target.value;
      const eventPrefix = eventValue.split('-')[0];
      const sortByFn = _sortByOptions[eventPrefix][eventValue];
      const sortedPeople = sortByFn(people);

      peopleDiv.innerHTML = '';
      sortedPeople.forEach(person => docFrag.appendChild(person.render()));
      peopleDiv.appendChild(docFrag);
    });
  };

  const render = people => {
    const docFrag = new DocumentFragment();

    const label = renderLabel();
    docFrag.appendChild(label);

    const sortSelect = document.createElement('select');
    sortSelect.id = 'sort-select';

    handleSortingListener(sortSelect, people);

    sortSelect.appendChild(renderOptions());
    docFrag.appendChild(sortSelect);
    return docFrag;
  };

  return {
    render,
  };
}
