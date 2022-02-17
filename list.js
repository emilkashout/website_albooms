const url = "https://musicalbums-9ce5.restdb.io/rest/albumscolumn ";

//using an apikey to acces all the data
const options = {
  headers: {
    "x-apikey": "620d3abb34fd621565858697",
  },
};

//fetching data from url from restdb.io using apikey
fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleData(data);
  });

//making a function using data, so that each album shows its content
function handleData(albums) {
  albums.forEach((album) => {
    console.log(album);
    //grab the template
    const template = document.querySelector(".onealbum").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy
      .querySelector(".more")
      .setAttribute("href", `albumview.html?_id=${album._id}`);
    copy.querySelector("img").src = album.album_image;
    copy.querySelector("h1").textContent = album.title;
    copy.querySelector("h2").textContent = album.artist;
    copy.querySelector("h3").textContent = album.year;
    copy.querySelector("h4").textContent = album.genre;
    //grab parent
    const parent = document.querySelector("main");
    //append it
    parent.appendChild(copy);
  });
}
