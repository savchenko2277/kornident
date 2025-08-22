import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

(() => {

    const swiper = new Swiper('.stock__swiper', {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.custom-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            960: {
                slidesPerView: 3,
            }

        },
        pagination: {
            el: '.custom-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: document.querySelector('.stock .custom-navigation__btn-next'),
            prevEl: document.querySelector('.stock .custom-navigation__btn-prev'),
        },
    });

})();
