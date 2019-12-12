export default function SortBtn() {
  const renderLabel = () => {
    const label = document.createElement('label');
    label.for = 'sort-select';
    label.className = 'sort-label';
    label.innerText = 'Sort by:';
    return label;
  };

  const renderOptions = () => {
    const docFrag = new DocumentFragment();
    const firstName = document.createElement('optgroup');
    const lastName = document.createElement('optgroup');
    const dateOfBirth = document.createElement('optgroup');

    firstName.label = 'First Name';
    lastName.label = 'Last Name';
    dateOfBirth.label = 'Date of birth';

    const nameOptions = ['(A-Z)', '(Z-A)'];

    nameOptions.forEach(opt => {
      const optElement = document.createElement('option');
      optElement.innerText = opt;
      const optClone = optElement.cloneNode(true);
      firstName.appendChild(optElement);
      lastName.appendChild(optClone);
    });

    const dobOptions = ['(Jan-Dec)', '(Dec-Jan)'];
    dobOptions.forEach(opt => {
      const optElement = document.createElement('option');
      optElement.innerText = opt;
      dateOfBirth.appendChild(optElement);
    });

    const opts = [firstName, lastName, dateOfBirth];
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
