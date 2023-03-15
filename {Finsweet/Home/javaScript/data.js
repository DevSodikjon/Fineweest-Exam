let cardGroup = document.querySelector(".cardGroup");

// const api = "https://newsapi.org/v2/everything?q=bitcoin&";
const api = "https://newsapi.org/v2/everything?q=news";
const apiKEY = "2b2a32aa50434d9aa959591da8ea5896";

async function gettingNews() {
  const apiAndKey = `${api}&apiKey=${apiKEY}`;

  try {
    const res = await fetch(apiAndKey);
    const data = await res.json();
    // console.log(data);

    const partOfData = data.articles.slice(0, 3);

    // console.log(partOfData);

    partOfData.map((newss) => {
      console.log(newss);
      let row = document.createElement("div");

      cardGroup.innerHTML += `
      
      <div class="Card ">
        <div class="card_img">
          <img src="${newss.urlToImage}" alt="cardImg" />
        </div>
  
        <div class="card_data">
          <p>By <span>${newss.author}</span> | ${newss.publishedAt}</p>
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

      `;

      console.log(cardGroup);
    });
  } catch (error) {
    console.error(error);
  }
}

gettingNews();
