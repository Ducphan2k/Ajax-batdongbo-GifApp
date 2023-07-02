const fetchImage = (words) => {
  const listImage = document.getElementById("list-image");
  listImage.innerHTML = "";

  fetch(
    `https://api.giphy.com/v1/gifs/search?q=${words}&api_key=EmMaYVzgt0WImm0P9LS9JT9Bf3VbbiEl`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res.data.map((item) => {
        var img = document.createElement("img");

        img.src = item.images.original.url;

        listImage.appendChild(img);
      });
    });
};

fetchImage("animals");

const inputSearch = document.getElementById("input-search");
const searchBtn = document.getElementById("search-btn");
let inputValue = "";

inputSearch.addEventListener("change", () => {
  inputValue = inputSearch.value;
});

searchBtn.addEventListener("click", function () {
  fetchImage(inputValue);
});
