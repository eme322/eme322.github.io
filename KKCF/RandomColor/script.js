//Group 1
// Create a new button element
let button = document.createElement("button");

//Group 2
// Set the text that appears on the button
button.textContent = "Change Color";

//Group 3
// Add the button to the body of the HTML page
document.body.appendChild(button);

//Group 4
// Set up an event listener that runs a function when the button is clicked
button.addEventListener("click", function () {


//Group 5
  // Create a random number from 0 to 255 for red
  let red = Math.floor(Math.random() * 256);

  // Create a random number from 0 to 255 for green
  let green = Math.floor(Math.random() * 256);

  // Create a random number from 0 to 255 for blue
  let blue = Math.floor(Math.random() * 256);

  //Group 6
  // Use the random red, green, and blue numbers to make a color
  // and change the background color of the whole page
  document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
});
