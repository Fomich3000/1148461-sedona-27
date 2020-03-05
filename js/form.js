var link = document.querySelector(".form-roll-button");
var form = document.querySelector(".hotel-search-form");
var checkin = document.querySelector(".checkin-input");
var checkout = document.querySelector(".checkout-input");
var grownups = document.querySelector(".grownups-input");
var kids = document.querySelector(".kids-input");
var isStorageSupport = true;
var storage = "";

try {
  storageGrownups = localStorage.getItem("grownups");
  storageKids = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

if (form.classList.contains("form-show")) {
  form.classList.remove("form-show");
  form.classList.add("form-close");
}

link.addEventListener("click", function(evt) {
  if (form.classList.contains("form-close")) {
    evt.preventDefault();
    form.classList.remove("form-close");
    form.classList.add("form-show");
    if (storageGrownups) {
      grownups.value = storageGrownups;
    }
    if (storageKids) {
      kids.value = storageKids;
    }
  } else if (form.classList.contains("form-error" && "form-show")) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.classList.add("form-close-animated");
    form.classList.remove("form-show");
  } else if (form.classList.contains("form-close-animated")) {
    evt.preventDefault();
    form.classList.remove("form-close-animated");
    form.classList.add("form-show");
  } else {
    evt.preventDefault();
    form.classList.remove("form-show");
    form.classList.add("form-close-animated");
  }
});

form.addEventListener("submit", function(evt) {
  if (!checkin.value || !checkout.value || !grownups.value || !kids.value) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("kids", kids.value);
      localStorage.setItem("grownups", grownups.value);
    }
  }
});
