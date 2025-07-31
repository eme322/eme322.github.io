// Create a new button element
let button = document.createElement("button");

// Set the text that appears on the button
button.textContent = "Change Color";

// Add the button to the body of the HTML page
document.body.appendChild(button);

// Set up an event listener that runs a function when the button is clicked
button.addEventListener("click", function () {

  // Create a random number from 0 to 255 for red
  let red = Math.floor(Math.random() * 256);

  // Create a random number from 0 to 255 for green
  let green = Math.floor(Math.random() * 256);

  // Create a random number from 0 to 255 for blue
  let blue = Math.floor(Math.random() * 256);

  // Use the random red, green, and blue numbers to make a color
  // and change the background color of the whole page
  document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
});
