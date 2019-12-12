import './style.css';

// Used for polyfilling async functions
import 'core-js';
import 'regenerator-runtime/runtime';

import retrieveData from './js/retrieveData.js';
import Person from './js/person.js';

// API endpoint
const url = 'https://randomuser.me/api';

// United States / Canada only
const parameters = {
  nationality: 'nat=us,ca',
  users: 'results=20',
  include: 'inc=gender,name,nat,dob',
};

const element = document.querySelector('.container');

async function createPeople(element) {
  const data = await retrieveData(url, parameters);

  // Use docfrags for better performance
  const docFrag = new DocumentFragment();

  data['results'].forEach(personAttrs => {
    const person = new Person(personAttrs);
    docFrag.appendChild(person.render());
  });

  element.appendChild(docFrag);
}

createPeople(element);
