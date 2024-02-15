const slides = document.querySelectorAll('.img');
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

const getNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    }
};

const getPrev = () => {
    if (counter > 0) {
        counter--;
        slideImage();
    }
};
