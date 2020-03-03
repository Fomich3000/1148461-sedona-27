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
    form.classList.add("form-show", "form-show-animated");
    if (storageGrownups) {
      grownups.value = storageGrownups;
      }
    if (storageKids) {
      kids.value = storageKids;
    }
  } else {
    evt.preventDefault();
    form.classList.remove("form-show", "form-show-animated");
    form.classList.add("form-close");
  }
});

form.addEventListener("submit", function(evt) {
  if (!checkin.value || !checkout.value || !grownups.value || !kids.value )
  {
    evt.preventDefault();
    console.log("Пожалуйста, заполните все поля для отправки формы!");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("kids", kids.value);
      localStorage.setItem("grownups", grownups.value);
  }
}
}); 
