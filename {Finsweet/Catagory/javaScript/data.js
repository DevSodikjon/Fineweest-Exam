// const api = "https://newsapi.org/v2/everything?q=bitcoin&";

// const api = `https://newsapi.org/v2/everything?q=business`;
// const apiKEY = "1197b66f6fa5469d9710a899de02c5e5";

const form_search = document.querySelector(".form_search");

let tags_items_cardBranchs = document.querySelector(".tags_items_cardBranchs");

let apiAndKey;

async function gettingNews() {
  const inputSearch = document.querySelector(".inputSearch").value;

  if (inputSearch) {
    apiAndKey = `https://newsapi.org/v2/everything?q=${inputSearch}&apiKey=1197b66f6fa5469d9710a899de02c5e5`;
  } else {
    apiAndKey = `https://newsapi.org/v2/everything?q=business&apiKey=1197b66f6fa5469d9710a899de02c5e5`;
  }

  try {
    const res = await fetch(apiAndKey);
    const data = await res.json();

    data.articles.map((newss) => {
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

const inputSearch = document.querySelector(".inputSearch");

inputSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    gettingNews(inputSearch.value);
    console.log(inputSearch.value);

    inputSearch.value = "";
  }
});
