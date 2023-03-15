const adding_modal_bg_div = document.querySelector(".adding_modal_bg");
const addBtn = document.querySelector(".add_post_btn");
const remove_icon = document.querySelector(".remove_icon");

addBtn.addEventListener("click", () => {
  if (adding_modal_bg_div.classList.contains("active")) {
    adding_modal_bg_div.classList.remove("active");
  } else {
    adding_modal_bg_div.classList.add("active");
  }
});
remove_icon.addEventListener("click", () => {
  if (adding_modal_bg_div.classList.contains("active")) {
    adding_modal_bg_div.classList.remove("active");
  } else {
    adding_modal_bg_div.classList.add("active");
  }
});
