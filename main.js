import './style.css'
const searchBtn = document.getElementById('search');
let searchValue = document.getElementById('search-book');

searchBtn.addEventListener('click', getAPICall);

function getAPICall () {
  fetch('https://www.googleapis.com/books/v1/volumes?q='+searchValue.value+'&key=AIzaSyBsAf7FGmS-VIET8fCxuV88-GRJS9QH0gs')
  .then((data) => data.json())
  .then((data) => appendData(data))

  .catch((err) => {
    console.log('Error fetching Google books', err)
    return null;
  });
}

function appendData(data) {
  var mainContainer = document.getElementById("myData");
  mainContainer.innerHTML = "";
  for(var i = 0; i < data.items.length; i++) {
      var item = data.items[i];
      var li = document.createElement("li");
      li.innerHTML = 
      `
      <h1>Title:</h1> ${item.volumeInfo.title}<br> 
      <img src="${item.volumeInfo.imageLinks.thumbnail}"><br> 
      <h3>Author:</h3>${item.volumeInfo.authors}<br> 
      <p><strong>Description:</strong></p> ${item.volumeInfo.description}<br><br>
      `
      ;
      mainContainer.appendChild(li);
  }

}

appendData();
