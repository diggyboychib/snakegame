import { expandSnake, onSnake } from "./snake.js";
import {getNewPosition} from "./grid.js"
let foodPosition=getRandomFoodPosition();
const EXPANSION_RATE=1;


export function updateFood(){
    if(onSnake(foodPosition)){
        expandSnake(EXPANSION_RATE);
        foodPosition=getRandomFoodPosition();
    }
}

export function drawFood(gameBoard){
        const food=document.createElement("div");
        food.classList.add("food");
        food.style.gridRowStart=foodPosition.y;
        food.style.gridColumnStart=foodPosition.x;
        gameBoard.appendChild(food);

}

function getRandomFoodPosition(){
    let newPostion;
    while(newPostion==null || onSnake(newPostion)){
        newPostion=getNewPosition();
    }
    return newPostion;
}