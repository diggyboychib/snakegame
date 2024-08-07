import { getInputDirection } from "./input.js";

export const SNAKE_SPEED=5;

const snakeBody=[{x:10,y:11}]
let newSegment=0;

export function updateSnake(){
  
    addSegment();
    const inputDirection=getInputDirection();
    for(let i=snakeBody.length-2;i>=0;i--){
        snakeBody[i+1]={...snakeBody[i]};
    }
    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;
}

export function drawSnake(gameBoard){
    snakeBody.forEach(segment=>{
        const snakeElement=document.createElement("div");
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(expansionRate){
    newSegment+=expansionRate
}
export function onSnake(position,{ignoreHead=false}={}){
    return snakeBody.some((segment,index)=>{
        if(ignoreHead && index===0)return false
        return equalPosition(segment,position)
    });
}

function equalPosition  (pos1,pos2){
    return pos1.x===pos2.x && pos1.y===pos2.y;
}

function addSegment(){
    for(let i=0;i<newSegment;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    newSegment=0;

}

export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersected(){
    return onSnake(snakeBody[0],{ignoreHead:true})
}