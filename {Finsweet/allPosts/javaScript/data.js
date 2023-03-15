const api = `https://newsapi.org/v2/everything?q=business`;
const apiKEY = "2b2a32aa50434d9aa959591da8ea5896";
// const apiAndKey = `${api}&apiKey=${apiKEY}`;

let tags_items_cardBranchs = document.querySelector(".tags_items_cardBranchs");
// const form_search = document.querySelector(".form_search");

// async function gettingNews() {
//   const apiAndKey = `${api}&apiKey=${apiKEY}`;
//   try {
//     const res = await fetch(apiAndKey);
//     const data = await res.json();

//     data.articles.map((newss) => {
//       tags_items_cardBranchs.innerHTML += `
//              <div class="card">
//                   <div class="card_img">
//                     <img src="${newss.urlToImage}" alt="cardImg" />
//                   </div>

//                   <div class="card_contents">
//                     <div class="card_data">
//                       <p>${newss.title}</p>
//                     </div>

//                     <div class="card_title">
//                       <h4>
//                         ${newss.content}
//                       </h4>
//                     </div>

//                     <div class="card_description">
//                       <p>
//                       ${newss.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <hr>
//   `;
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// gettingNews();

async function searchFunc() {
  const searchId = document.querySelector("#searchId").value;
  let ss = "tesla";
  // console.log(ss);
  let url;
  if (searchId) {
    url = `https://newsapi.org/v2/everything?q=${searchId}&apiKey=2b2a32aa50434d9aa959591da8ea5896`;
    console.log(searchId);
  } else {
    url = `https://newsapi.org/v2/everything?q=keyword&apiKey=2b2a32aa50434d9aa959591da8ea5896`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();

    data.articles.map((newss) => {
      tags_items_cardBranchs.innerHTML += `
        <div class="card">
           <div class="card_img">
             <img src="${newss.urlToImage}" alt="cardImg" />
           </div>
           <div class="card_contents">
             <div class="card_data">
               <p>${newss.title}</p>
             </div>
             <div class="card_title">
               <h4>
                 ${newss.content}
               </h4>
             </div>
             <div class="card_description">
               <p>
               ${newss.description}
               </p>
             </div>
           </div>
         </div>
         <hr>
        `;
    });
  } catch (error) {
    console.error(error);
  }
}

let form_search = document.querySelector(".form_search");
let SearchInput = document.querySelector(".SearchInput");
const searchId = document.getElementById("searchId");

searchId.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchFunc();
    console.log(SearchInput.value);
    SearchInput.value = "";
  }
});

// form_search.addEventListener("submit", (e) => {
//   // e.preventDefault();
//   searchFunc();
//   SearchInput.value = "";
// });

searchFunc();
