
const container = document.querySelector("#container");
const squares = document.querySelectorAll(".square");
const generateBtn = document.querySelector("#generateCanvas");
const numOfSquares = document.querySelector("#canvasNum");

const containerSize = 800;
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

generateCanvas(8,containerSize/8 );

generateBtn.addEventListener("click", clicked);

function generateCanvas(num, squareSize = 50){

  num = num*num;

  for (let  i = 0; i < num; i++){
  const square = document.createElement('div');
  square.classList.add("square");
  square.id = i;
  
  
  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;


    square.addEventListener("mouseenter", () => {
      const bg = square.style.backgroundColor;
      if (bg === ""){
        square.style.backgroundColor = randomRGB();
      }
      
    });

    container.appendChild(square);

  }

}

function clicked (){
  const squaresPerSide = parseInt(numOfSquares.value);

  container.innerHTML = "";

  const squareSize = containerSize/squaresPerSide;

  generateCanvas(squaresPerSide, squareSize);

}

function randomRGB (){

   // Generate random values between 0 and 255
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
  
   return `rgb(${r}, ${g}, ${b})`
}