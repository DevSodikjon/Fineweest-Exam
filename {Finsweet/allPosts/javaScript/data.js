const api = `https://newsapi.org/v2/everything?q=business`;
const apiKEY = "1197b66f6fa5469d9710a899de02c5e5";
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

async function searchFunc(val) {
  tags_items_cardBranchs.innerHTML = "";
  let url;
  if (val) {
    url = `https://newsapi.org/v2/everything?q=${val}&apiKey=1197b66f6fa5469d9710a899de02c5e5`;
  } else {
    url = `https://newsapi.org/v2/everything?q=${"keyword"}&apiKey=1197b66f6fa5469d9710a899de02c5e5`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

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
    console.error("error", error);
  }
}

let form_search = document.querySelector(".form_search");
let SearchInput = document.querySelector(".SearchInput");
const searchId = document.getElementById("searchId");

searchId.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchFunc(SearchInput.value);
    console.log(SearchInput.value);
    SearchInput.value = "";
  }
});

searchFunc();

const posts_items = document.querySelector(".posts_items");

async function gettingNews() {
  const apiAndKey = `${api}&apiKey=${apiKEY}`;

  try {
    const res = await fetch(apiAndKey);
    const data = await res.json();
    console.log(data);
    const partOfData = data.articles.slice(0, 1);

    console.log(partOfData);
    partOfData.map((newss) => {
      posts_items.innerHTML = `
      
              <div class="posts_items_content">
              <p class="feature">Featured Post</p>
              <p class="title">
                ${newss.title}
              </p>
              <p class="data">By <span>${newss.author}</span> | ${newss.publishedAt}</p>
              <p class="desc">
                ${newss.content}
              </p>
              <button>
                <a href="#"> Read More <i class="ri-arrow-right-s-line"></i></a>
              </button>
            </div>
            <div class="posts_items_img">
              <img src="${newss.urlToImage}" alt="post" />
            </div>

      `;
    });
  } catch (error) {
    console.error(error);
  }
}

gettingNews();
