const slider = () => {

    function bindSlider(sliderSelector, activeClass) {
        const slider = document.querySelector(sliderSelector),
            prev = slider.querySelector('.prev'),
            next = slider.querySelector('.next'),
            sliderWrapper = slider.querySelector('.slider--wrapper'),
            sliderInner = slider.querySelector('.slider__track'),
            slides = slider.querySelectorAll('.slider__slide');

        let slideIndex = 1,
            slideOffset = 0;

        sliderInner.style.width = sliderWrapper * slides.length + 'px';

        slides.forEach(item => {
            item.style.width = sliderInner.clientWidth / slides.length + 'px';
        });

        prev.addEventListener('click', (e) => {
            const slideWidth = slider.querySelector('.slider__slide').clientWidth;
            if (slideOffset == 0) {
                slideOffset = slideWidth * (slides.length - 1);
            } else {
                slideOffset -= slideWidth;
            }

            sliderInner.style.transform = `translateX(-${slideOffset}px)`;

            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }

        });
        next.addEventListener('click', (e) => {
            const slideWidth = slider.querySelector('.slider__slide').clientWidth;

            console.log('NEXT');
            if (slideOffset == slideWidth * (slides.length - 1)) {
                slideOffset = 0;
            } else {
                slideOffset += slideWidth;
            }
            sliderInner.style.transform = `translateX(-${slideOffset}px)`;
            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }

        });

    }

    bindSlider('.rooms-slider', 'active');
    bindSlider('.reviews-slider', 'active');
};

export default slider;