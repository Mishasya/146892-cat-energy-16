'use sctrict'

var toggle = document.querySelector(".page-header__toggle");
var navigation = document.querySelector(".main-navigation");

toggle.addEventListener("click", function () {
  navigation.classList.toggle("main-navigation--show");
  toggle.classList.toggle("page-header__toggle--none");
});

