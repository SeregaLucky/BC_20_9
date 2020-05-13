// let aaa = '';
// users.forEach(item => (aaa += `<li>${item.name}</li>`));
// console.log(aaa);

export const template = (name, id) => {
  return `
    <li class="item" data-idx="${id}">
      <span>${name}</span>
    </li>
  `;
};
