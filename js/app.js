/*
Create a repo for your tomagotchi pet
make a commit after you finish each one of the following
Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
Instatiate your Tomagotchi
Display a character of your choice on the screen to represent your pet
Display the following metrics for your pet:
Hunger (1-10 scale)
Sleepiness (1-10 scale)
Boredom (1-10 scale)
Age
Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
Add the ability to name your pet.
Style the page.
Increase your pet's age every x minutes
Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
You pet should die if Hunger, Boredom, or Sleepiness hits 10.
Morph your pet at certain ages.
Animate your pet across the screen while it's alive.
Extras
Have your tomagotchi give birth to baby tomagotchi...
...with special powers (extend the class)!
Add an excercise() method to your tomagotchi, that affects certain properties
Add anything you can think of... use your imagination!
*/
const startTime = new Date();
const body      = $("body");

const createBoard = (cellSize) => {

  //reset
body.empty();

// FINAL VARIABLES

  // tools
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  // colors
const cellColorOne  = "rgb(9, 158, 123)";
const cellColorTwo  = "rgb(217, 177, 56)";
const backColor     = "rgb(0, 0, 0)";

console.log(vw);
console.log(vh);

// SIZING
const unit          = cellSize + 2; // plus 2px for margins
const rowCellsAmt   = Math.round(((2 * vw) / 3) / unit);
const rowAmt        = Math.round(((2 * vh) / 3) / unit);
const rowWidth      = rowCellsAmt * unit;
const cellNum       = rowCellsAmt * rowAmt;


// HELPER FUNCTIONS
const getCoordinates = (elem) => {
  const elemX = elem.attr('id').split(",")[0];
  const elemY = elem.attr('id').split(",")[1];
  return([elemX,elemY]);
}

// SETUP BOARD

body.css("background-color", backColor);

  // habitat creation
body.append("<div id='habitat'></div> ");
const habitat = $("#habitat");
habitat.css("width",`${rowWidth}px`);
habitat.css("margin", "0 auto");

  // grid creation
const gridArr = [];
for (let i = 0; i < rowAmt; i++){
  gridArr.push([]);
}
for (let i = 0; i < cellNum; i++){
    const row = Math.floor(i / rowCellsAmt);
    const col = i % rowCellsAmt;
    habitat.append(`<div class="grid" id="${row},${col}"></div>`);
    gridArr[row].push(new GridCell(row, col));
}


  // style grid
const grid = $(".grid")
grid.css("background-color", cellColorOne);
grid.css("width", `${cellSize}px`);
grid.css("height", `${cellSize}px`);
grid.css("float", "left");
grid.css("margin", "1px");




// COOL GRID FUNCTIONS

  // Hover Function
let counter = 0;
grid.hover(function(){
    const elem = $(this);
    const coords = getCoordinates(elem);
    const state = gridArr[coords[0]][coords[1]].state
    if (counter % (2 * cellNum) < cellNum && state == 0){
      elem.css("background-color", cellColorTwo);
      counter++
    } else if (counter % (2 * cellNum) >= cellNum && state == 1){
      elem.css("background-color", cellColorOne);
      counter++
    }
  });


}


createBoard(5);
