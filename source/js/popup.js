let close = document.querySelector(".button-close");
let closeError = document.querySelector(".button-close-error");
let form = document.querySelector(".form");
let popup = document.querySelector(".modal");
let popupError = document.querySelector(".modal-error");
let phone = document.querySelector(".input-contacts-list__phone");
let email = document.querySelector(".input-contacts-list__email");


form.addEventListener("submit", function (evt) {
  if (!phone.value || !email.value ) {
    evt.preventDefault();
    popupError.classList.add("modal-show");
  } else {
    evt.preventDefault();
    popup.classList.add("modal-show");
  }
});

closeError.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupError.classList.remove("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
