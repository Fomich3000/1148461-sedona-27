var link=document.querySelector(".form-roll-button"),form=document.querySelector(".hotel-search-form"),checkin=document.querySelector(".checkin-input"),checkout=document.querySelector(".checkout-input"),grownups=document.querySelector(".grownups-input"),kids=document.querySelector(".kids-input"),isStorageSupport=!0,storage="";try{storageGrownups=localStorage.getItem("grownups"),storageKids=localStorage.getItem("kids")}catch(err){isStorageSupport=!1}form.classList.contains("form-show")&&(form.classList.remove("form-show"),form.classList.add("form-close")),link.addEventListener("click",function(o){form.classList.contains("form-close")?(o.preventDefault(),form.classList.remove("form-close"),form.classList.add("form-show"),storageGrownups&&(grownups.value=storageGrownups),storageKids&&(kids.value=storageKids)):form.classList.contains("form-show")?(o.preventDefault(),form.classList.remove("form-error"),form.classList.add("form-close-animated"),form.classList.remove("form-show")):form.classList.contains("form-close-animated")?(o.preventDefault(),form.classList.remove("form-close-animated"),form.classList.add("form-show")):(o.preventDefault(),form.classList.remove("form-show"),form.classList.add("form-close-animated"))}),form.addEventListener("submit",function(o){checkin.value&&checkout.value&&grownups.value&&kids.value?isStorageSupport&&(localStorage.setItem("kids",kids.value),localStorage.setItem("grownups",grownups.value)):(o.preventDefault(),form.classList.remove("form-error"),form.offsetWidth=form.offsetWidth,form.classList.add("form-error"))});
