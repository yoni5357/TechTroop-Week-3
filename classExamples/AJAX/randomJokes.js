function generateJoke(){
    const jokeDiv = document.getElementById('joke-container');
    const jokeP = document.createElement('p');
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => jokeP.textContent = data.setup + " " + data.punchline)
    jokeDiv.appendChild(jokeP);
}

document.addEventListener('DOMContentLoaded', () => {
    const jokeButton = document.getElementById('generate-joke');
    jokeButton.addEventListener('click', generateJoke);
})

