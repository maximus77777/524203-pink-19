let priceButtons = document.querySelectorAll(".price-slider__toggle");
let priceSlides = document.querySelectorAll(".price-slider__item");
console.log(priceSlides);

for (let i=0;i<=priceButtons.length;i++) {
  priceButtons[i].onclick = function() {
    priceButtons[i].classList.add("price-slider__toggle--active");
    priceButtons[i].classList.remove("price-slider__toggle--link");

    if (i === 0) {
      priceButtons[1].classList.remove("price-slider__toggle--active");
      priceButtons[1].classList.add("price-slider__toggle--link");
      priceButtons[2].classList.remove("price-slider__toggle--active");
      priceButtons[2].classList.add("price-slider__toggle--link");
      priceSlides[2].classList.add("price-slider__item--button-1");
      priceSlides[2].classList.add("price-slider__item--margin");
      priceSlides[2].classList.remove("price-slider__item--button-3");
    } else if (i === 1) {
      priceButtons[0].classList.remove("price-slider__toggle--active");
      priceButtons[0].classList.add("price-slider__toggle--link");
      priceButtons[2].classList.remove("price-slider__toggle--active");
      priceButtons[2].classList.add("price-slider__toggle--link");
      priceSlides[2].classList.remove("price-slider__item--button-1");
      priceSlides[2].classList.remove("price-slider__item--button-3");
      priceSlides[2].classList.remove("price-slider__item--margin");
    } else if (i === 2) {
      priceButtons[0].classList.remove("price-slider__toggle--active");
      priceButtons[0].classList.add("price-slider__toggle--link");
      priceButtons[1].classList.remove("price-slider__toggle--active");
      priceButtons[1].classList.add("price-slider__toggle--link");
      priceSlides[2].classList.add("price-slider__item--button-3");
      priceSlides[2].classList.remove("price-slider__item--margin");
    }
  }
}
