const urlParams = new URLSearchParams(window.location.search);
const _id = urlParams.get("_id");

const url = "https://musicalbums-9ce5.restdb.io/rest/albumscolumn/ " + _id;

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
