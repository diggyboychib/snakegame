const GRID_SIZE=21;

export function getNewPosition(){
    return(
        {
            x:Math.floor(Math.random()*GRID_SIZE)+1,
            y:Math.floor(Math.random()*GRID_SIZE)+1
        }
    )
}

export function outsideGrid(snakeHead){
    return snakeHead.x<1 || snakeHead.x>GRID_SIZE || snakeHead.y<1 || snakeHead.y>GRID_SIZE
}