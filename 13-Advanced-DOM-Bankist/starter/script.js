'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// selecting Element

// console.log(document.documentElement);
// console.log(document.head);
console.log(document.querySelectorAll('.section'));
const allBtn = document.getElementsByTagName('button');
console.log(allBtn);

//Inserting Element

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookie for improve functionality.  <button class="btn btn--close-cookie">Got it </button>';

const header = document.querySelector('.header');
// header.prepend(message);
// header.append(message.cloneNode(true)); //This will clone message and show both append and prepend
// header.append(message);
//Append and prepend will include inside the header as chid dom
//header.before(message.cloneNode(true));
header.after(message);
//After and before will include before starting or ending of the header
// console.log(message);
document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  message.remove();
});
message.style.backgroundColor = '#37383d';
 message.style.height = '100px';
 console.log(getComputedStyle(message).height);
 message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 40 + 'px';
//document.documentElement.style.setProperty('--color-primary','red');
//logo.alt="kjkjkjkjkjkjkj"
console.log(logo.alt);
console.log(logo.getAttribute('src')) //only get 'img/logo.png'
console.log(logo.src) // http://127.0.0.1:5500/13-Advanced-DOM-Bankist/starter/img/logo.png
message.style.setProperty(backgroundColor,'red');
 