import Swiper, { Navigation, Pagination, Scrollbar, Keyboard, Mousewheel, FreeMode, Autoplay, EffectFade, EffectFlip, EffectCube, EffectCoverflow, Lazy, Zoom, Thumbs, Controller, Parallax, Virtual, A11y } from 'swiper';

export function swipers() {
    new Swiper('.swiper-text', {
        modules: [Navigation, Keyboard, Mousewheel, FreeMode, Lazy],

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        mousewheel: {
            sensitivity: 1.5,
            eventsTarget: '.swiper-text-slide'
        },

        slidesPerView: 3,
        spaceBetween: 10,

        simulateTouch: true,
        touchRatio: 2,
        touchAngle: 45,
        grabCursor: true,
        freeMode: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },

        preloadImages: false,
        lazy: {
            loadOnTransitionStart: false,
            loadPrevNext: false
        },
        
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
    });
};