import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = document.createElement('div');
    this.elem.className = 'ribbon';

    let structure = `
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner"></nav>
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `
    this.elem.insertAdjacentHTML(`beforeend`, structure);

    let ribbonInner = this.elem.querySelector('.ribbon__inner');

    for (let category of categories) {
      let categoryLink = `
        <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
      `
      ribbonInner.insertAdjacentHTML(`beforeend`, categoryLink);
    }

    let ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    let ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
    ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
    ribbonArrowRight.classList.add('ribbon__arrow_visible');

    ribbonInner.addEventListener('scroll', function () {
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = Math.round(ribbonInner.scrollLeft);
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollRight < 1) {
        ribbonArrowLeft.classList.add('ribbon__arrow_visible');
        ribbonArrowRight.classList.remove('ribbon__arrow_visible');
      }

      if (scrollLeft < 1) {
        ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
        ribbonArrowRight.classList.add('ribbon__arrow_visible');
      }
    });

    ribbonArrowRight.onclick = function () {
      ribbonInner.scrollBy(350, 0);
    };

    ribbonArrowLeft.onclick = function () {
      ribbonInner.scrollBy(-350, 0);
    };

    let links = this.elem.querySelectorAll('.ribbon__item');

    for (let link of links) {
      let handleClick = (event) => {
        event.preventDefault();
        let activeElement = this.elem.querySelector('.ribbon__item_active');
        if (activeElement) {
          activeElement.classList.remove('ribbon__item_active');
        }

        this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: link.dataset.id,
          bubbles: true
        }));

        link.classList.add('ribbon__item_active');
      }

      link.addEventListener('click', handleClick);
    }
  }
}