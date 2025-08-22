import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

(() => {

    const infoSwiper = new Swiper('.information__swiper', {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
            el: '.custom-pagination',
            clickable: true,

        },
        navigation: {
            nextEl: document.querySelector('.information .custom-navigation__btn-next'),
            prevEl: document.querySelector('.information .custom-navigation__btn-prev'),
        },
        breakpoints: {
            780: {
                centeredSlides: false,
                slidesPerView: 2,
            }
        }
    });

})();
