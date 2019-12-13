import retrieveData from './retrieveData.js';
import SortOptions from './sortOptions.js';
import Person from './person.js';

export default function DataBtn() {
  // API endpoint
  const url = 'https://randomuser.me/api';

  // United States / Canada only
  const parameters = {
    nationality: 'nat=us,ca',
    users: 'results=20',
    include: 'inc=gender,name,nat,dob',
  };

  const renderFetchingData = () => {
    const fetching = document.createElement('p');
    fetching.className = 'fetching';
    fetching.innerText = 'Fetching the data. Please wait a moment...';
    return fetching;
  };

  const renderDataError = () => {
    const error = document.createElement('p');
    error.className = 'error';
    error.innerText =
      'An error has occured. Please check your network connection & API endpoint.';
    return error;
  };

  const resetElement = element => {
    element.innerHTML = '';
  };

  async function createPeople(element) {
    const data = await retrieveData(url, parameters);
    resetElement(element);

    // If someone has a slow connection, let them know youre fetching
    element.appendChild(renderFetchingData());

    // Show the person the data was not able to be fetched
    if (data === null) {
      resetElement(element);
      element.appendChild(renderDataError());
      return;
    }

    // Use docfrags for better performance
    const docFrag = new DocumentFragment();

    // Add sorting functionality
    const sortOptions = SortOptions();
    const people = [];

    // Parse the results
    data['results'].forEach(personAttrs => {
      const person = new Person(personAttrs);
      people.push(person);
      docFrag.appendChild(person.render());
    });

    resetElement(element);

    // Insert the sorting options
    docFrag.insertBefore(sortOptions.render(people), docFrag.childNodes[0]);
    element.appendChild(docFrag);
  }

  const render = element => {
    const dataBtn = document.createElement('button');
    dataBtn.innerText = 'Fetch data';
    dataBtn.className = 'data-btn';
    dataBtn.addEventListener('click', () => createPeople(element));
    dataBtn.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        createPeople(element);
      }
    });

    return dataBtn;
  };

  return {
    render,
  };
}
