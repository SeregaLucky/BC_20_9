import { load, save } from './servises/localStorage';

const input = document.querySelector('.js_changeList');
const list = document.querySelector('.js_list');

input.addEventListener('change', handleChangeList);

let isChecked = load('teamList');
// let isChecked = localStorage.getItem('teamList');
// isChecked = JSON.parse(isChecked);
console.log('isChecked', isChecked);

if (isChecked) {
  list.classList.add('ul_table');
  input.checked = isChecked;
}

function handleChangeList(e) {
  const isChecked = e.target.checked;
  // console.log(isChecked);

  save('teamList', isChecked);
  // localStorage.setItem('teamList', {});

  if (isChecked) {
    list.classList.add('ul_table');
    input.checked = isChecked;
    return;
  }

  list.classList.remove('ul_table');
  input.checked = isChecked;
}
