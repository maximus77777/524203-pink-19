let slides = document.querySelectorAll(".reviews-slider__item");
let buttons = document.querySelectorAll(".reviews-slider__toggle");

for (let i=0;i<=buttons.length;i++) {
  buttons[i].onclick = function() {
    buttons[i].classList.add("reviews-slider__toggle--active");
    buttons[i].classList.remove("reviews-slider__toggle--link");
    slides[i].classList.add("reviews-slider__item--active");

    if (i === 0) {
      buttons[1].classList.remove("reviews-slider__toggle--active");
      buttons[1].classList.add("reviews-slider__toggle--link");
      buttons[2].classList.remove("reviews-slider__toggle--active");
      buttons[2].classList.add("reviews-slider__toggle--link");
      slides[2].classList.remove("reviews-slider__item--active");
      slides[1].classList.remove("reviews-slider__item--active");
    } else if (i === 1) {
      buttons[0].classList.remove("reviews-slider__toggle--active");
      buttons[0].classList.add("reviews-slider__toggle--link");
      buttons[2].classList.remove("reviews-slider__toggle--active");
      buttons[2].classList.add("reviews-slider__toggle--link");
      slides[0].classList.remove("reviews-slider__item--active");
      slides[2].classList.remove("reviews-slider__item--active");
    } else if (i === 2) {
      buttons[0].classList.remove("reviews-slider__toggle--active");
      buttons[0].classList.add("reviews-slider__toggle--link");
      buttons[1].classList.remove("reviews-slider__toggle--active");
      buttons[1].classList.add("reviews-slider__toggle--link");
      slides[0].classList.remove("reviews-slider__item--active");
      slides[1].classList.remove("reviews-slider__item--active");
    }
  }
}
