import Swiper from "swiper";

(() => {

    let swiper;

    const setSwiper = () => {
        if (window.matchMedia("(max-width: 780px)").matches) {
            if (!swiper) {
                swiper = new Swiper('.reasons__cards', {
                    slidesPerView: 1.1,
                    spaceBetween: 25,
                    centeredSlides: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                        }
                    }
                });
            }
        } else {
            if (swiper) {
                swiper.destroy(true, true);
                swiper = null;
            }
        }
    };

    setSwiper();
    window.addEventListener('resize', setSwiper);

})();
