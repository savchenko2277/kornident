import Swiper from "swiper";
import { Navigation } from "swiper/modules";

(() => {

    const teamSwiper = new Swiper('.team__cards', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 25,
        centeredSlides: true,
        navigation: {
            nextEl: document.querySelector('.team .custom-navigation__btn-next'),
            prevEl: document.querySelector('.team .custom-navigation__btn-prev'),
        }
    });

})();
