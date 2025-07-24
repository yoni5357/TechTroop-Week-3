const posts = [{name:"Jerome", text:"happy birthday"},{name:"BFF", text:"kill yourself"}, {name:"teacher", text:"youre a disappointment"}];

function render(){
    let postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ""

    for(let data of posts){
        let postContainer = document.createElement('div');
        postContainer.className = "post-container";
        postContainer.style.display = "flex"


        let nameP = document.createElement('p');
        nameP.textContent = data.name + ": ";
        nameP.style.fontWeight = "bold";

        let textP = document.createElement('p');
        textP.textContent = " " + data.text;

        postsContainer.appendChild(postContainer);
        postContainer.appendChild(nameP);
        postContainer.appendChild(textP);
    }
}

function postClick(){
    let nameData = document.getElementById('name');
    let textData = document.getElementById('wish');
    posts.push({name:nameData.value, text:textData.value});
    render()
}

document.addEventListener('DOMContentLoaded', () => {
    let postButton = document.getElementById('post-btn');
    postButton.addEventListener('click', postClick)
})