// GETTING ELEMENTS FROM THE HTML
// These variables store references to the buttons, speech area, audio, and characters from our HTML file

const toggleHomerBtn = document.getElementById("toggleHomerBtn"); // "Remove/Add Homer" button
const talkBtn = document.getElementById("talkBtn");               // "Make Homer Talk" button
const swapBtn = document.getElementById("swapBtn");               // "Swap Positions" button
const speech = document.getElementById("speech");                 // Div where Homer could "speak"
const homerLaugh = document.getElementById("homerLaugh");         // Audio file for Homer

// Store references to Homer and Marge images
let homer = document.getElementById("homer");
let marge = document.getElementById("marge");

// Track if Homer is currently visible on the screen
let homerVisible = true;


//  EVENT 1: Remove or Add Homer when the button is clicked
toggleHomerBtn.addEventListener("click", () => {
  // If Homer is currently visible...
  if (homerVisible) {
    homer.remove(); // Remove Homer from the page
    toggleHomerBtn.textContent = "Add Homer"; // Change button text
    homerVisible = false; // Update state
  } 
  // If Homer is currently hidden...
  else {
    // Create a NEW Homer image element
    const newHomer = document.createElement("img");
    newHomer.id = "homer"; // Give it the same id as before
    newHomer.alt = "Homer"; // Alt text for accessibility
    newHomer.src = "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"; // Image source
    newHomer.classList.add("character"); // Add same CSS class

    // Insert Homer back into the scene before Marge
    const scene = document.getElementById("scene");
    scene.insertBefore(newHomer, marge);

    // Update our variable so it points to the new Homer
    homer = document.getElementById("homer");
    homerVisible = true; // Homer is now back
    toggleHomerBtn.textContent = "Remove Homer"; // Change button text back
  }
});

// 🖱 EVENT 2: Make Homer "Talk" when the button is clicked
talkBtn.addEventListener("click", () => {
  if (homerVisible) {
    speech.textContent = ""; // Clear any previous text
    homerLaugh.play(); // Play Homer’s sound
    // After 2 seconds, clear the speech area
    setTimeout(() => {
      speech.textContent = "";
    }, 2000); // 2,000 milliseconds, which equals 2 seconds
  }
});

// 🖱 EVENT 3: Swap Homer and Marge’s positions
swapBtn.addEventListener("click", () => {
  if (!homerVisible) return; // If Homer is gone, do nothing

  // Get the scene and both characters
  const scene = document.getElementById("scene");
  const currentHomer = document.getElementById("homer");
  const currentMarge = document.getElementById("marge");

  // Swap their positions by inserting Marge before Homer
  scene.insertBefore(currentMarge, currentHomer);
});

