var link = document.querySelector(".form-roll-button");
var form = document.querySelector(".hotel-search-form");

if (form.classList.contains("form-show")) {
  form.classList.remove("form-show");
  form.classList.add("form-close");
}

link.addEventListener("click", function(evt) {
  if (form.classList.contains("form-close")) {
    evt.preventDefault();
    form.classList.remove("form-close");
    form.classList.add("form-show", "form-show-animated");
  } else {
    evt.preventDefault();
    form.classList.remove("form-show", "form-show-animated");
    form.classList.add("form-close");
  }
});
