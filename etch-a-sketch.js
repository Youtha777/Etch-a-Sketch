
//DOM selector so we can manipulate them
const container = document.querySelector("#container");
const squares = document.querySelectorAll(".square");
const generateBtn = document.querySelector("#generateCanvas");
const numOfSquares = document.querySelector("#canvasNum");

//set container size to a fixed square size
const containerSize = 800;
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

//Generate a default 8x8 canvas on first load
generateCanvas(8,containerSize/8 );

//attatch an event listenser to the selected button - button is listening for a click
//when there is a click action on the button , then it will pass the clicked function - which fires it
generateBtn.addEventListener("click", clicked);

//function that will generate a new canvas
function generateCanvas(num, squareSize = 50){

  // Convert squaresPerSide into total squares (e.g., 8 → 64)
  num = num*num;

  // Loop to create each square in the grid
  for (let  i = 0; i < num; i++){
    //create a div and save it to the variable square
    const square = document.createElement('div');
    //on the created div element, add a class name square to it
    square.classList.add("square");
    //removed the next line to generate id for each square div - not needed
    // square.id = i;
    
    // Set the dynamic width and height for each square
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover behavior: only color the square if it has no color yet
    square.addEventListener("mouseenter", () => {
      //create a variable to store the background color
      const bg = square.style.backgroundColor;

    // If the square has no background color yet, assign a random color.
    // This prevents recoloring squares that already have a color.
      if (bg === ""){
        square.style.backgroundColor = randomRGB();
      }
      
    });

    //add the square generated to the container
    container.appendChild(square);

  }

}


//function to trigger when there is a mouse click on the button
function clicked (){
  //This will convert the string that the user input into Int
  const squaresPerSide = parseInt(numOfSquares.value);
  
  // Validate that the input is a number and not empty
   if (isNaN(squaresPerSide) || numOfSquares.value.trim() === "") {
    //prompt user to enter a valid number
    alert("Please enter a valid number.");
    return;
  }
  
  // Ensure the user does not exceed the maximum allowed grid size
  if (squaresPerSide > 100){
    //Prompt user to enter a value lower than 100
    alert("Please re-enter the number of square per side.  It must not exceed the maximum of 100")
    return;
  }

  //this will empty the current items in the container 
  container.innerHTML = "";

  // Calculate the dynamic square size so the grid fits perfectly inside the container
  const squareSize = containerSize/squaresPerSide;

  // Generate the new canvas using the user's grid size
  generateCanvas(squaresPerSide, squareSize);

}


//function for generating randomd RGB
function randomRGB (){

   // Generate random values between 0 and 255
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
  
   return `rgb(${r}, ${g}, ${b})`
}