
const player = document.getElementById("ReadyPlayerOne");
let x = 300;
let y= 300;
let direction;

document.body.addEventListener("keydown", function(event){
    direction = event.key;
    console.log(direction);
    }
);
document.body.addEventListener("keyup", function(event){
    direction = event.key;
    // console.log("letting go of key: " + direction);
    }
)

function main(){
    if(direction === 'ArrowRight'){
        x++;
    }
    if(direction === 'ArrowLeft'){
        x--;
    }
    if(direction === 'ArrowDown'){
        y++;
    }
    if(direction === 'ArrowUp'){
        y--;
    }
    movePlayer(x, y);
    setTimeout(main, 20);
}

main();

function movePlayer(x, y){
    let moveXY = document.getElementById("ReadyPlayerOne");
    console.log("x: " + x + " y: " + y);
    moveXY.style.left = x + "px";
    moveXY.style.top  = y + "px";
}
