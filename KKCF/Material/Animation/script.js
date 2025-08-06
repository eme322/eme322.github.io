// Get references to the button and the image
const moveBtn = document.getElementById('moveBtn');
const moveImage = document.getElementById('moveImage');

// Track whether the image is moved or not
let moved = false;

// When the button is clicked, move or reset the image position
moveBtn.addEventListener('click', () => {
  if (!moved) {
    // Move the image 300px to the right
    moveImage.style.transform = 'translateX(300px)';
    moveBtn.textContent = 'Move Back!'; // Change button text
  } else {
    // Move the image back to its original position
    moveImage.style.transform = 'translateX(0px)';
    moveBtn.textContent = 'Move!'; // Change button text
  }
  // Toggle the moved state
  moved = !moved;
});
