// Create a button
let button = document.createElement("button");
button.textContent = "Change Color";

// Add the button to the page
document.body.appendChild(button);

// When the button is clicked, change background color
button.addEventListener("click", function () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
});
