'use sctrict'

var toggle = document.querySelector(".page-header__toggle");
var navigation = document.querySelector(".main-navigation");

navigation.classList.remove("main-navigation--no-js");
toggle.classList.remove("page-header__toggle--no-js");

toggle.addEventListener("click", function () {
  navigation.classList.toggle("main-navigation--show");
  toggle.classList.toggle("page-header__toggle--none");
});
