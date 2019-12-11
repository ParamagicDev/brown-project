import './style.css';

// Used for polyfilling async functions
import 'core-js';
import 'regenerator-runtime/runtime';

import retrieveData from './js/retrieveData.js';

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

  data['results'].forEach(person => {
    const div = document.createElement('div');
    div.className = 'person';

    for (const [key, value] of Object.entries(person)) {
      const label = document.createElement('p');
      label.className = 'label';
      label.innerText = key;
      const val = document.createElement('span');
      val.className = 'value';

      val.innerText = ': ';

      switch (key) {
        case 'name':
          val.innerText += `${value.first} ${value.last}`;
          break;
        case 'dob':
          val.innerText += value.dob;
          break;
      }

      label.appendChild(val);
      div.appendChild(label);
    }

    docFrag.appendChild(div);
  });

  element.appendChild(docFrag);
}

createPeople(element);
