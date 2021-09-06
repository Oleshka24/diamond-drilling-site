//  Работа кнопки бургера
document.querySelectorAll('.burger__btn').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.header__bar').classList.toggle('header__bar--open');
    });
});

//  Закрытие меню при клике на один из его пунктов
document.querySelectorAll('.nav__list a, .logo__link').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.header__bar').classList.remove('header__bar--open');
    });
});

//  Всплывающая форма
document.querySelector('.contacts__btn').addEventListener('click', function() {
    document.querySelector('.back-call').classList.add('back-call--show');
    document.querySelector('.fill').classList.add('fill--show');
});

document.querySelectorAll('.fill__close, .back-call__close-btn').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.back-call').classList.remove('back-call--show');
        document.querySelector('.fill').classList.remove('fill--show');
    });
});

//  Плавная прокрутка к якорям
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    const yOffset = -95; 
    const element = document.getElementById(blockID);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  })
}

//  Подсветка активных пунктов меню
jQuery(window).scroll(function(){
    var $sections = $('section');

    $sections.each(function(i,el) {
        var top  = $(el).offset().top - 150;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        
        if( scroll > top && scroll < bottom) {
            $('.nav__list a.nav__item-link--current').removeClass('nav__item-link--current');
            $('.nav__list a[href="#' + id + '"]').addClass('nav__item-link--current');

        }
    })
});