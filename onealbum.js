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


function handleData(albums) {
  albums.forEach((album) => {
    console.log(album);
    //grab the template
    const template = document.querySelector("#view").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
 
    copy.querySelector("img").src = album.album_image;
    copy.querySelector("h1").textContent = album.title;
    copy.querySelector("h2").textContent = album.artist;
    copy.querySelector("h3").textContent = album.year;
    copy.querySelector("h4").textContent = album.genre;
    copy.querySelector("p").textContent = album.description;
    copy.querySelector("ol").textContent = album.tracklist;
    copy.querySelector("img").textContent = album.artist_image;
    //grab parent
    const parent = document.querySelector("main");
    //append it
    parent.appendChild(copy);
  });
}