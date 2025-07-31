// Create the button element
let button = document.createElement("button");

// Set the initial text of the button
button.textContent = "dark mode";

// Add the button to the page
document.body.appendChild(button);

// Add a click event to the button
button.addEventListener("click", function () {

  // Check current background color to decide mode
  if (document.body.style.backgroundColor === "black") {
    // If dark mode is on, switch to light mode
    document.body.style.backgroundColor = "white";       // background to light
    document.body.style.color = "black";                   // text to dark
    button.textContent = "dark mode";                      // button text changes to "dark mode"

  } else {
    // If light mode is on, switch to dark mode
    document.body.style.backgroundColor = "black";        // background to dark
    document.body.style.color = "white";                    // text to light
    button.textContent = "light mode";                      // button text changes to "light mode"
  }
});
