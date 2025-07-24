const upArrow = document.getElementById('up');
const downArrow = document.getElementById('down');
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const ball = document.getElementById('ball');

const pressUp = function(){
    ball.style.top = (parseInt(ball.style.top) - 15).toString() + "px"
}

const pressDown = function(){
    ball.style.top = (parseInt(ball.style.top) + 15).toString() + "px"
}

const pressLeft = function(){
    ball.style.left = (parseInt(ball.style.left) - 15).toString() + "px"
}

const pressRight = function(){
    ball.style.left = (parseInt(ball.style.left) + 15).toString() + "px"
}

const moveBall = (e) => {
  switch (e.code) {
    case 'ArrowUp':    e.preventDefault(); pressUp();    break;
    case 'ArrowDown':  e.preventDefault(); pressDown();  break;
    case 'ArrowLeft':  e.preventDefault(); pressLeft();  break;
    case 'ArrowRight': e.preventDefault(); pressRight(); break;
  }
};

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', moveBall);
}   );