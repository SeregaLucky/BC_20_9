import shortid from 'shortid';
import logicObj from './logicObj';
import users from './data';
import { template } from './servises/templateUsers';
import templateUsers from './servises/templateUsers.hbs';
console.log(templateUsers);

const refs = {
  list: document.querySelector('.js_list'),
  form: document.querySelector('.js_form'),
  isSpan: false,
  needIdxLi: null,
};

// Получаем ответ с бека и записываем в бизнес логику
logicObj.addAllUsers(users);

{
  // const allLi = users
  //   .map(({ name }) => {
  //     const id = shortid.generate();
  //     // return template(name, id);
  //     const needObj = {
  //       name: name,
  //       id,
  //     };
  //     // return templateUsers(name, id);
  //     return templateUsers(needObj);
  //   })
  //   .join('');
}

// Отрисовуем по бизнес логике наших юзеров
const allLi = logicObj.users
  .map(item => {
    return templateUsers(item);
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
    logicObj.changeUser({ id: refs.needIdxLi, name: inputValue });

    const li = document.querySelector(`li[data-idx="${refs.needIdxLi}"]`);

    if (inputValue === '') {
      li.remove();
    }

    const span = li.children[0];
    span.textContent = inputValue;

    refs.isSpan = false;
    refs.needIdxLi = null;
    // console.log(refs);

    const findButton = refs.form.querySelector('button');
    findButton.textContent = 'Add';

    const findActiveLi = document.querySelector('.active_li');

    if (findActiveLi) {
      findActiveLi.classList.remove('active_li');
    }

    console.log(logicObj.users);
    return;
  }

  if (true) {
    // console.log(refs);

    const id = shortid.generate();

    logicObj.addNewUser({ id, name: inputValue });

    const newLi = templateUsers({ name: inputValue, id });
    refs.list.insertAdjacentHTML('beforeend', newLi);

    e.currentTarget.reset();

    console.log(logicObj.users);
  }
}
