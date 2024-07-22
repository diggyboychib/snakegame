import { drawFood,updateFood } from "./food.js";
import {SNAKE_SPEED,updateSnake,drawSnake,getSnakeHead,snakeIntersected} from "./snake.js"
import { outsideGrid } from "./grid.js";
let lastRenderTime=0;
let gameover=false;
const gameBoard=document.getElementById("game-board")
function main(currentTime){
    if(gameover){
        if(confirm("You've lost! Want to start a new game?")){
            window.location="/";
        }
        return
    }
    window.requestAnimationFrame(main);
    let secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
    if(secondsSinceLastRender<1/SNAKE_SPEED)return;

    lastRenderTime=currentTime;
    update();
    draw();
   
}

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML="";
    drawSnake(gameBoard);
    drawFood(gameBoard)
}


function checkDeath(){
    gameover=outsideGrid(getSnakeHead()) || snakeIntersected()
}

window.requestAnimationFrame(main);









