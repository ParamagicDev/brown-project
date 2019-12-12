import './style.css';

// Used for polyfilling async functions
import 'core-js';
import 'regenerator-runtime/runtime';

import DataBtn from './js/dataBtn.js';
import SortBtn from './js/sortBtn.js';

const container = document.querySelector('.container');
const sortBtn = SortBtn().render();
const dataBtn = DataBtn().render(container);
document.body.insertBefore(dataBtn, container);
document.body.insertBefore(sortBtn, container);
