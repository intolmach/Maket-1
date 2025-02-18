if (window.matchMedia("(max-width: 767px)").matches) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 16,
        
        // If we need pagination
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        }
        
    });
}

const swiperWrapper = document.querySelector('.swiper-list');
const toggleBtn = document.querySelector(".swiper-menu__toggle-button");
toggleBtn.addEventListener('click', function() {
    swiperWrapper.classList.toggle('swiper-list--all');
});

