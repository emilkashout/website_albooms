const urlParams = new URLSearchParams(window.location.search);
const _id = urlParams.get("_id");

const url = "https://musicalbums-9ce5.restdb.io/rest/albumscolumn/" + _id;

const options = {
  headers: {
    "x-apikey": "620d3abb34fd621565858697",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showAlbum(data));

function showAlbum(album) {
  console.log(album);
}

function showAlbum(album) {
  console.log(album);
  document.querySelector("h1").textContent = album.title;
  document.querySelector("h2").textContent = album.artist;
  document.querySelector("h3").textContent = album.year;
  document.querySelector("h4").textContent = album.genre;
  document.querySelector("p").textContent = album.description;
  document.querySelector("ol").textContent = album.tracklist;
  document.querySelector(".artist_image").src = album.artist_image;
  document.querySelector(".album_image").src = album.album_image;
}
