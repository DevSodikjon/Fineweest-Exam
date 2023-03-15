// const api = "https://newsapi.org/v2/everything?q=bitcoin&";

const api = `https://newsapi.org/v2/everything?q=business`;

const apiKEY = "2b2a32aa50434d9aa959591da8ea5896";

let tags_items_cardBranchs = document.querySelector(".tags_items_cardBranchs");
let not_found = document.querySelector("not_found");

const apiAndKey = `${api}&apiKey=${apiKEY}`;

async function gettingNews() {
  try {
    const res = await fetch(apiAndKey);
    const data = await res.json();

    data.articles.map((newss) => {
      // console.log(newss.content);
      let businessSection = newss.title == "Business";
      if (businessSection) {
        tags_items_cardBranchs.innerHTML += `
      <div class="card">
              <div class="card_img">
                <img src="${newss.urlToImage}" alt="${newss.content}" />
              </div>

              <div class="card_contents">
                <div class="card_data">
                  <p>${newss.title}</p>
                </div>

                <div class="card_title">
                  <h4>${newss.content}</h4>
                </div>

                <div class="card_description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Non blandit massa enim nec.
                  </p>
                </div>
              </div>
            </div>

          <hr style="margin-bottom:40px">
  `;
      }
    });
  } catch (error) {
    console.error(error);
  }
}

gettingNews();

const searchBtn = document.querySelector(".searchBtn");

// async function searchNews() {
//   try {
//     const res = await fetch(apiAndKey);
//     const data = await res.json();

//     const form_search = document.querySelector(".form_search");

//     form_search.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const inputSearchBtn = document.querySelector(".inputSearch").value;
//       data.articles.map((news) => {
//         if (news.content == inputSearchBtn) {
//           console.log(news.content);
//         } else {
//           console.log(news);
//         }
//       });
//       console.log(inputSearchBtn);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// searchNews();
