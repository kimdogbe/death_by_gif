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
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${giphyKey}&s=${query}`;

  try {
    const response = await fetch(url, {mode: 'cors'});
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    const gifUrl = data.data.images.preview_webp.url;

    console.log('Setting image...' + gifUrl);
    container.style.backgroundImage = `url(${gifUrl})`
  }
  catch (error) {
    console.error(error.message);
  }
}