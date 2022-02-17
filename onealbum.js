//using urlparams so that from each album we can go to its own page
const urlParams = new URLSearchParams(window.location.search);
const _id = urlParams.get("_id");

//ading id of one album
const url = "https://musicalbums-9ce5.restdb.io/rest/albumscolumn/" + _id;

//using apikey
const options = {
  headers: {
    "x-apikey": "620d3abb34fd621565858697",
  },
};

//fetching data using url and apikey for access
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showAlbum(data));

//creating a function so that our content is dynamic
function showAlbum(album) {
  console.log(album);
  document.querySelector("h1").textContent = album.title;
  document.querySelector("h2").textContent = album.artist;
  document.querySelector("h3").textContent = album.year;
  document.querySelector("h4").textContent = album.genre;
  document.querySelector("p").textContent = album.description;

  document.querySelector(".album_image").src = album.album_image;
}
