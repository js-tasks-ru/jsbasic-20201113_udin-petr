function initCarousel() {
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let btnRight = document.querySelector('.carousel__arrow_right');
  let inner = document.querySelector('.carousel__inner');
  let num = 0;

  btnLeft.style.display = 'none';

  btnRight.addEventListener('click', () => {
    if (num == 0) {
      let i = 0 - inner.offsetWidth;
      inner.style.transform = `translateX(${i}px)`;
      btnLeft.style.display = '';
      return num++;
    } else if (num == 1) {
      let i = -2 * inner.offsetWidth;
      inner.style.transform = `translateX(${i}px)`;
      return num++;
    } else if (num == 2) {
      let i = -3 * inner.offsetWidth;
      inner.style.transform = `translateX(${i}px)`;
      btnRight.style.display = 'none';
      return num++;
    }
  });


  btnLeft.addEventListener("click", () => {
    if (num == 3) {
      let i = (-3 * inner.offsetWidth) + inner.offsetWidth;
      inner.style.transform = `translateX(${i}px)`;
      btnRight.style.display = '';
      return num--;
    } else if (num == 2) {
      let i = (-2 * inner.offsetWidth) + inner.offsetWidth;
      inner.style.transform = `translateX(${i}px)`;
      return num--;
    } else if (num == 1) {
      let i = 0;
      inner.style.transform = `translateX(${i}px)`;
      btnLeft.style.display = 'none';
      return num--;
    }
  })
  
}