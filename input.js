let inputDirection={x:0,y:0};


window.addEventListener("keydown",function(e){
    switch(e.key){
        case "ArrowUp":
            if(inputDirection.y!=1)
                inputDirection={x:0,y:-1};
            break;
        case "ArrowDown":
            if(inputDirection.y!=-1)
                inputDirection={x:0,y:1};
            break;
        case "ArrowLeft":
            if(inputDirection.x!=1)
                inputDirection={x:-1,y:0};
            break;
        case "ArrowRight":
            if(inputDirection.x!=-1)
                inputDirection={x:1,y:0};
            break;    
        default:    
    }
})

export function getInputDirection(){
    return inputDirection;
}