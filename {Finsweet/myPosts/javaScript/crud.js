const url = "https://reqres.in/api/users";
const myPostDiiv = document.querySelector(".myPosts_items");
let arrayData = [];

const tableBody = document.getElementById("tbody");
const form = document.getElementById("formAdd");
const UpdateData = (filteredData = arrayData) => {
  arrayData = filteredData;
  myPostDiiv.innerHTML = "";
  filteredData?.map((user) => {
    const { id, first_name, last_name, title, desc, email, avatar, imgPost } =
      user;

    //  <img src="${avatar}" alt="myPosts" />;

    myPostDiiv.innerHTML += `
  <div class="myPosts_items_card" id="${id}">
    <div class="myPosts_items_card_img">

    </div>

    <div class="myPosts_items_card_content">
      <div class="myPosts_items_card_content_userInfo">
        <div class="userInfo_items">
          <div class="user_img">
            <img src="${avatar}" alt="" />
          </div>

          <div class="user_nameAndDate">
            <div class="name">
              <p>${first_name} ${last_name}</p>
            </div>

            <div class="date">
              <p>${email}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="myPosts_items_card_content_title">
        <h3>Step-by-step guide to choosing great font pairs</h3>

        <p>
          Startup (
          <span><a href="#">#business</a></span
          >, <span><a href="#">#screen</a></span
          >,
          <span><a href="#">#life</a></span>
          )
        </p>
      </div>
      <div class="add_btn">
        <button
        class="edit"
        data-id="${id}"
        data-name="${(first_name, last_name)}
        data-email="${email}"
        data-desc="${desc}"
        data-title="${title}">Edit</button>
        <button class="delete" data-id=${id}>Delete</button>
      </div>
    </div>
  </div>
</div>
</div>
`;
  });
};
const fetchData = (mydata) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      arrayData = data.data;
      if (mydata) {
        arrayData.push(mydata);
      }
      UpdateData();
    })
    .catch((error) => console.error(error));
};
fetchData();
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.querySelector("#update-id").value;
  const titleInput = document.querySelector(".titleInput").value;
  const fullnameInput = document.querySelector(".fullnameInput").value;
  const descInput = document.querySelector(".descInput").value;
  const email = document.querySelector(".email").value;
  const avatar = document.getElementById("avatar").files[0];

  const formData = {
    id: 6,
    titleInput: titleInput,
    first_name: fullnameInput,
    descInput: descInput,
    email: email,
    avatar: avatar
  };

  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(formData)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const reader = new FileReader();
      reader.readAsDataURL(avatar);

      console.log(reader.result);

      reader.onload = () => {
        const avatar = reader.result;

        myPostDiiv.innerHTML += `
           <div class="myPosts_items_card" id="${id}">
              <div class="myPosts_items_card_img">
                <img src="../img/My Posts.png" alt="myPosts" />
              </div>
              <div class="myPosts_items_card_content">
                <div class="myPosts_items_card_content_userInfo">
                  <div class="userInfo_items">
                    <div class="user_img">
                      <img src="${avatar}" alt="" />
                    </div>
                    <div class="user_nameAndDate">
                      <div class="name">
                        <p>${fullnameInput}</p>
                      </div>
                      <div class="date">
                        <p>${email}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="myPosts_items_card_content_title">
                  <h3>${titleInput}</h3>
                  <p>
                    Startup (
                    <span><a href="#">#business</a></span
                    >, <span><a href="#">#screen</a></span
                    >,
                    <span><a href="#">#life</a></span>
                    )
                  </p>
                </div>
                <div class="myPosts_items_card_content_desc">
                  <p>
                      ${descInput}
                  </p>
                </div>
              <div class="add_btn">
                  <button
                  class="edit"
                  data-id="${id}"
                  data-name="${fullnameInput}
                  data-email="${email}"
                  data-desc="${descInput}"
                  data-title="${titleInput}">Edit</button>
                  <button class="delete" data-id=${id}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
      };

      form.reset();
      const adding_modal_bg_div = document.querySelector(".adding_modal_bg");
      adding_modal_bg_div.classList.remove("active");
    })
    .catch((error) => console.error(error));
});

myPostDiiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    adding_modal_bg_div.classList.add("active");
    const id = e.target.dataset.id;
    const fullnameInput = e.target.dataset.desc;
    const titleInput = e.target.dataset.title;
    const descInput = e.target.dataset.desc;
    const email = e.target.dataset.email;

    form.querySelector("#update-id").value = id;
    form.querySelector(".titleInput").value = titleInput;
    form.querySelector(".fullnameInput").value = fullnameInput;
    form.querySelector(".descInput").value = descInput;
    form.querySelector(".email").value = email;

    document.querySelector(".add_btn").textContent = "Update User";
  } else if (e.target.classList.contains("delete")) {
    const id = e.target.dataset.id;
    deleteUser(id)
      .then(() => {
        const myPosts_items = document.querySelector(".myPosts_items");
        const myPostDiiv = e.target.myPosts_items;
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

async function deleteUser(id) {
  let filteredData = arrayData.filter((item) => item.id != id);

  UpdateData(filteredData);
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE"
    });
    if (response.ok) {
      return response.text();
    }
  } catch (error) {
    return console.error(error);
  }

  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(person)
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
