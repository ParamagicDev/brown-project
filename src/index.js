import './style.css';
import './favicon.ico';

// Used for polyfilling async functions
import 'core-js';
import 'regenerator-runtime/runtime';

import DataBtn from './js/dataBtn.js';

const container = document.querySelector('.container');
const dataBtn = DataBtn().render(container);
document.body.insertBefore(dataBtn, container);
