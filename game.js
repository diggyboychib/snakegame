import {SNAKE_SPEED,updateSnake,drawSnake} from "./snake.js"

let lastRenderTime=0;
const gameBoard=document.getElementById("game-board")
function main(currentTime){
    window.requestAnimationFrame(main);
    let secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
    if(secondsSinceLastRender<1/SNAKE_SPEED)return;

    lastRenderTime=currentTime;
    update();
    draw();
   
}

function update(){
    updateSnake();
}

function draw(){
    gameBoard.innerHTML="";
    drawSnake(gameBoard);
}

// window.requestAnimationFrame(main);









