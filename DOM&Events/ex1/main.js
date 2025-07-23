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
