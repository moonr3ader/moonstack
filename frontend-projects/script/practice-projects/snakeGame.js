// DEFINE HTML ELEMENTS
const board = document.getElementById('game-board');

// define game variables
let snake = [{ x:10, y: 10 }];   // let the snake start at the center of the board

// to draw the game map, snake and food
function draw(){
    board.innerHTML = '';  // everytime we draw, it'll reset
    drawSnake();
}

// draw snake
function drawSnake(){
    // how it will look
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div' , 'snake');
    });
}


// create a snake or food cube/div
function createGameElement(tag, className){
    // 
    const element = document.createElement(tag);
}