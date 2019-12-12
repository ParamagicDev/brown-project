import retrieveData from './retrieveData.js';
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

  async function createPeople(element) {
    const data = await retrieveData(url, parameters);

    // Use docfrags for better performance
    const docFrag = new DocumentFragment();

    data['results'].forEach(personAttrs => {
      const person = new Person(personAttrs);
      docFrag.appendChild(person.render());
    });

    element.innerHTML = '';
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
