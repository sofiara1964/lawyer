(function () {
    console.log('Hello');

    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-lower__list');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-lower__list_active');
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-lower__list_active');
    });
}())