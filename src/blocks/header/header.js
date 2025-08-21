(() => {

    const header = document.querySelector('.header');
    const headerMenu = header.querySelector('.header__menu');
    const headerBurger = header.querySelector('.header__burger');

    headerBurger.addEventListener('click', () => {
        header.classList.toggle('is-open');
    });

    window.addEventListener('scroll', () => {
        if(window.scrollY > 0) {
            header.classList.add('is-scroll');
        } else {
            header.classList.remove('is-scroll');
        }
    });

})();
