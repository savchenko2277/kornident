(() => {

    const articles = document.querySelector('.articles');
    if (!articles) return;

    const items = articles.querySelectorAll('.articles__item');
    if (!items || !items.length) return;

    items.forEach(item => {
        const head = item.querySelector('.articles__item-head');

        head.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

})();
