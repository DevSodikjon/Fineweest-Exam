const burger_icon_btn = document.querySelector(".burger_icon_btn");
const burger_menu = document.querySelector(".burger_menu");

burger_icon_btn.addEventListener("click", () => {
  if (burger_menu.classList.contains("active")) {
    burger_menu.classList.remove("active")
  }else{
    burger_menu.classList.add("active")
  }
});
