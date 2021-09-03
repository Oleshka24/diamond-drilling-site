document.querySelectorAll('.burger__btn').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.header__bar').classList.toggle('header__bar--open');
    });
});

document.querySelectorAll('.nav__list a').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.header__bar').classList.remove('header__bar--open');
    });
});