// Replace with your actual API key string or import it properly if using modules
import API_KEY from "./apiKey.js";

async function fetchGIF(tag){
    const randomCatUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=g`
    const res = await fetch(randomCatUrl);
    const data = await res.json();
    const gifUrl = data.data.embed_url
    return gifUrl;
}

async function displayGif(){
    const gifDiv = document.getElementById('gif-container');
    gifDiv.innerHTML = '';
    const gif = document.createElement('iframe');
    const tag = document.getElementById('search-input').value;
    const url = await fetchGIF(tag);
    gif.src = url;
    gifDiv.appendChild(gif);
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('search-button');
    button.addEventListener('click', displayGif);
})

