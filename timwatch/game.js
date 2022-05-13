// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');
//
const player = document.getElementById("ReadyPlayerOne");
var grid = 16;
var count = 0;
let x = innerWidth/2;
let y= innerHeight/2;
//
// var snake = {
//     x: 260,
//     y: 160,
//
//     // snake velocity. moves one grid length every frame in either the x or y direction
//     dx: grid,
//     dy: 0,
//
//     // keep track of all grids the snake body occupies
//     cells: [],
//
//     // length of the snake. grows when eating an apple
//     maxCells: 4
// };
//
//
let direction;

document.body.addEventListener("keydown", function(event){
    direction = event.key;
    console.log(direction);
    }
);
document.body.addEventListener("keyup", function(event){
    // direction = event.key;
    direction = "";
    }
)

function main(){
    // requestAnimationFrame(main);

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

        // requestAnimationFrame(main);
main();

function movePlayer(x, y){
    let moveXY = document.getElementById("ReadyPlayerOne");
    moveXY.style.left = x + "px";
    moveXY.style.top  = y + "px";
}
