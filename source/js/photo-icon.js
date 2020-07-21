let iconButtons = document.querySelectorAll(".photo-image__icon");
let filterSlides = document.querySelectorAll(".photo-image__item");

for (let i=0;i<=iconButtons.length;i++) {
  iconButtons[i].onclick = function () {
    iconButtons[i].classList.add("photo-image__icon--active");
    iconButtons[i].classList.remove("photo-image__icon--link");
    filterSlides[i].classList.remove("photo-image__item--block");
    if (i === 0) {
    iconButtons[1].classList.remove("photo-image__icon--active");
    iconButtons[1].classList.add("photo-image__icon--link");
    iconButtons[2].classList.remove("photo-image__icon--active");
    iconButtons[2].classList.add("photo-image__icon--link");
    filterSlides[1].classList.add("photo-image__item--block");
    filterSlides[2].classList.add("photo-image__item--block");
    } else if (i === 1) {
    iconButtons[0].classList.remove("photo-image__icon--active");
    iconButtons[0].classList.add("photo-image__icon--link");
    iconButtons[2].classList.remove("photo-image__icon--active");
    iconButtons[2].classList.add("photo-image__icon--link");
    filterSlides[0].classList.add("photo-image__item--block");
    filterSlides[2].classList.add("photo-image__item--block");
    } else if (i === 2) {
    iconButtons[0].classList.remove("photo-image__icon--active");
    iconButtons[0].classList.add("photo-image__icon--link");
    iconButtons[1].classList.remove("photo-image__icon--active");
    iconButtons[1].classList.add("photo-image__icon--link");
    filterSlides[0].classList.add("photo-image__item--block");
    filterSlides[1].classList.add("photo-image__item--block");
    }
  }
}
