import './style.css';

// Used for polyfilling async functions
import 'core-js';
import 'regenerator-runtime/runtime';

import retrieveData from './js/retrieveData.js';

const url = 'https://randomuser.me/api';

// United States / Canada only
const parameters = {
  nationality: 'nat=us,ca',
  users: 'results=10',
  include: 'gender,name,nat,dob',
};

retrieveData(url, parameters);
