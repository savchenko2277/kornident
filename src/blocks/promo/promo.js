import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";

(() => {
    const promoSwiper = new Swiper('.promo__swiper', {
        modules: [Autoplay, Navigation],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: document.querySelector('.promo .custom-navigation__btn-next'),
            prevEl: document.querySelector('.promo .custom-navigation__btn-prev'),
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
})();
