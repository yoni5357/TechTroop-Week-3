
function generateBoxes(){
    for(let i = 0; i < 4; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover',()=>{
            box.style.backgroundColor = getRandomColor();
        });
        document.getElementById('container').appendChild(box)
    }
}

const getRandomColor = function() {
  const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
  
  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
}

function checkColorMatch(){
    const boxes = document.querySelectorAll('.box');
    const firstColor = boxes[0].style.backgroundColor;
    const allMatch = Array.from(boxes).every(box => box.style.backgroundColor === firstColor);
    if(allMatch){
        const resultText = document.createElement('p');
        resultText.textContent =  "Nice job!";
        resultText.style.color = "green";
        document.getElementById('container').appendChild(resultText);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    generateBoxes();
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('mouseover', checkColorMatch);
    });
});