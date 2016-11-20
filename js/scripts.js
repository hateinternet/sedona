var form = document.querySelector(".form");
var button = document.querySelector(".booking__btn");

form.classList.toggle("form--hidden");
form.classList.add("form--show");

button.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.toggle("form--hidden");
});
