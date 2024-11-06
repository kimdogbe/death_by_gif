import "./style.css";

const container = document.querySelector('#container');
const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');
const img = document.querySelector('img');

const giphyKey = '8Ia7X2AHWHiSfcPIeyQkEnjROa87LlrW';

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (searchBox.value !== ''){
    getGif(searchBox.value);
  }
});

async function getGif(query) {
  console.log('...getting gif');

  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyKey}&s=${query}`, {mode: 'cors'});
  const data = await response.json();
  console.log(data);

  // if (response.ok){
  //   console.log(response.json());
  // }
  // else {
  //   throw new Error('Something went wrong: ' + response);
  // }
}