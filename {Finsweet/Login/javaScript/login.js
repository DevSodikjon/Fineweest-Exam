const form_login = document.getElementById("form_login");
const firstName = document.getElementById("Firstname");
const Lastname = document.getElementById("Lastname");
const username_login = document.getElementById("username_login");
const password_login = document.getElementById("password_login");
const confiremPassword = document.getElementById("confiremPassword");

form_login.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hee");

  const values = [username_login.value, password_login.value];

  console.log(values);

  const user = localStorage.getItem("key");

  console.log(user);

  if (values == user) {
    window.location.href = "./myPosts.html";

    (firstName.value = ""),
      (Lastname.value = ""),
      (username_login.value = ""),
      (password_login.value = ""),
      (confiremPassword.value = "");
  } else {
    alert("Please Register first !");

    window.location.href = "./Register.html";
  }
});
