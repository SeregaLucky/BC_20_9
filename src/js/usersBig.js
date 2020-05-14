import dataUsersBig from './dataUsersBig';
import templateUsersBig from './servises/templateUsersBig.hbs';

const list2 = document.querySelector('.js_list2');

const allLi = dataUsersBig.map(user => templateUsersBig(user)).join('');

list2.insertAdjacentHTML('beforeend', allLi);
