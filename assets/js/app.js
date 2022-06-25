const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const button__btn = document.querySelector('.button__btn');

burger.addEventListener('click', function() {
    nav.classList.toggle('open');
    button__btn.classList.toggle('open');
    burger.classList.toggle('open');
    // document.body.classList.toggle('no-scroll');
});