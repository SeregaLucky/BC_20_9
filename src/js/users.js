import shortid from 'shortid';
import users from './data';
import { template } from './servises/templateUsers';

const refs = {
  list: document.querySelector('.js_list'),
  form: document.querySelector('.js_form'),
  isSpan: false,
  needIdxLi: null,
};

const allLi = users
  .map(({ name }) => {
    const id = shortid.generate();
    return template(name, id);
  })
  .join('');

refs.list.insertAdjacentHTML('beforeend', allLi);

//
//

refs.list.addEventListener('click', changeText);
refs.form.addEventListener('submit', handleSumbit);

function changeText(e) {
  // if (e.target.nodeName !== 'LI') return;
  // e.target.classList.toggle('active');

  if (e.target.nodeName !== 'SPAN') return;
  const findActiveLi = document.querySelector('.active_li');

  if (findActiveLi) {
    findActiveLi.classList.remove('active_li');
  }

  const li = e.target.closest('li');
  li.classList.add('active_li');

  const findButton = refs.form.querySelector('button');
  findButton.textContent = 'Change';

  const textNow = e.target.textContent;
  refs.isSpan = true;

  const input = refs.form.elements.input11;
  input.value = textNow;
  input.focus();

  // const li = e.target.closest('li');
  // const needIdxLi = li.dataset.idx;
  refs.needIdxLi = li.dataset.idx;
}

function handleSumbit(e) {
  e.preventDefault();
  let inputValue = e.currentTarget.elements.input11.value;

  if (refs.isSpan) {
    const li = document.querySelector(`li[data-idx="${refs.needIdxLi}"]`);
    const span = li.children[0];
    span.textContent = inputValue;

    refs.isSpan = false;
    refs.needIdxLi = null;
    console.log(refs);

    const findButton = refs.form.querySelector('button');
    findButton.textContent = 'Add';

    const findActiveLi = document.querySelector('.active_li');

    if (findActiveLi) {
      findActiveLi.classList.remove('active_li');
    }
    return;
  }

  console.log(refs);

  const id = shortid.generate();
  const newLi = template(inputValue, id);
  refs.list.insertAdjacentHTML('beforeend', newLi);

  e.currentTarget.reset();
}
