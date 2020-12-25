import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.classList.add ("carousel");


    let arrows = `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `
    this.elem.insertAdjacentHTML(`afterbegin`, arrows);

    this.elem.insertAdjacentHTML(`beforeend`, `<div class='carousel__inner'></div>`);
    let carouselInner = this.elem.querySelector('.carousel__inner');

    for (let slide of slides) {
      let carouselSlide = `
        <div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `
      carouselInner.insertAdjacentHTML(`beforeend`, carouselSlide);
    }

    let quantityOfSlides = this.elem.querySelectorAll('.carousel__slide');

    let arrowRight = this.elem.querySelector('.carousel__arrow_right');
    let arrowLeft = this.elem.querySelector('.carousel__arrow_left');

    let count = 0;
    arrowLeft.style.display = 'none';

    function translateRight() {
      let width = carouselInner.offsetWidth;
      carouselInner.style.transform = `translateX(${-(count + 1) * width}px)`;
      count++;

      if (count > 0) {
        arrowLeft.style.display = '';
      }
      if (count === quantityOfSlides.length - 1) {
        arrowRight.style.display = 'none';
      }
    }

    function translateLeft() {
      let width = carouselInner.offsetWidth;
      carouselInner.style.transform = `translateX(${-(count - 1) * width}px)`;
      count--;

      if (count < quantityOfSlides.length - 1) {
        arrowRight.style.display = '';
      }
      if (count === 0) {
        arrowLeft.style.display = 'none';
      }
    }

    arrowRight.addEventListener('click', translateRight);
    arrowLeft.addEventListener('click', translateLeft);

    let button = this.elem.querySelector('.carousel__button');

    for (let slide of slides) {
      button.addEventListener('click', () => {
        button.dispatchEvent(new CustomEvent('product-add', {
          detail: slide.id,
          bubbles: true
        }));
      });
    }
  }
}