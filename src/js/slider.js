import Siema from 'siema';

const mySiema = new Siema({
  selector: '.js_siema',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {
    console.log(111);
  },
  onChange: () => {
    console.log('onChange');
  },
});

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

const btn0 = document.querySelector('.btn0');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn0.addEventListener('click', () => mySiema.goTo(0));
btn1.addEventListener('click', () => mySiema.goTo(1));
btn2.addEventListener('click', () => mySiema.goTo(2));
btn3.addEventListener('click', () => mySiema.goTo(3));
