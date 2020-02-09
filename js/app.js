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


// FINAL VARIABLES
const body      = $("body");
const startTime = new Date();
const unit      = "5px";
const cellNum   = 4970;
const cellColorOne = "rgb(9, 158, 123)";
const cellColorTwo = "rgb(217, 177, 56)";
const backColor = "rgb(195, 33, 210)";


// HELPER FUNCTIONS



// SETUP BOARD

body.css("background-color", backColor);

  // habitat
body.append("<div id='habitat'></div> ");
const habitat = $("#habitat");
habitat.css("width","500px");
habitat.css("height","500px");
habitat.css("margin", "0 auto");

  // grid
for (let i = 1; i <= cellNum; i++){
    const x = Math.ceil(i / 71);
    const y = i % 71;
    habitat.append(`<div class="grid" id="${x}${y}"></div>`);
}
const grid = $(".grid")
grid.css("background-color", cellColorOne);
grid.css("width", unit);
grid.css("height", unit);
grid.css("float", "left");
grid.css("margin", "1px");
let counter = 0;
grid.hover(function(){
    const elem = $(this);
    const color = elem.css("background-color");
    console.log(color)
    if (counter % (2 * cellNum) < cellNum && color == cellColorOne){
      elem.css("background-color", cellColorTwo);
      counter++
    } else if (counter % (2 * cellNum) >= cellNum && color == cellColorTwo){
      elem.css("background-color", cellColorOne);
      counter++
    }
  });
