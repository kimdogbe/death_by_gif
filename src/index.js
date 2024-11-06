import "./style.css";

const container = document.querySelector('#container');
const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');
const img = document.querySelector('img');

searchButton.addEventListener('click', (event) => {
  
});

function getGif(query) {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=${query}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
    });
}