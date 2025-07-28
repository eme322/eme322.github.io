// Create an array called 'items' to hold all the items
const items = [
  {
    // Name of the item
    name: "Plastic Bottle",
    // Type of bin this item belongs to
    type: "recycle",
    // Link to the image of this item
    image: "https://sustainable.columbia.edu/sites/sustainable.columbia.edu/files/styles/cu_crop/public/content/plastic_metal_glass%20recycling.jpeg?itok=7dG7SnPC"
  },
  {
    name: "Banana Peel",  // Name of the item
    type: "compost",      // Compost bin type
    image: "https://images.utopia.org/A-h7AeEhgMBhSYrf1yYj7L_2T5XUBqtbYxVWw0JZqRM/rt:fill/w:1280/h:720/g:ce/plain/2021/10/you-can-you-eat-banana-peels-cc0-pixabay-alexas_fotos-211011.jpg"
  },
  {
    name: "Candy Wrapper",  // Name of the item
    type: "trash",          // Trash bin type
    image: "https://media.istockphoto.com/id/1147024409/photo/after-party-finished-candy-full-of-wrapping-paper.jpg?s=612x612&w=0&k=20&c=ASxDbCSEeWdwkSIW1YWJXerN-eO3BsisTeM3QCeRImA="
  }
];

// Variable to keep track of the item the player clicked on (starts empty)
let selectedItem = null;

// Variable to keep track of the player's score (starts at 0)
let score = 0;

// Function to show all items on the webpage
function loadItems() {
  // Find the element with id "items" in the HTML where items will be shown
  const itemBox = document.getElementById("items");
  
  // Clear out anything already inside the "items" area
  itemBox.innerHTML = "";

  // Go through each item in the items array
  items.forEach((item, index) => {
    // Create a new div (box) to hold this item
    const div = document.createElement("div");
    
    // Add a class called "item" for styling
    div.classList.add("item");
    
    // Store the index number of this item in the div (for tracking)
    div.dataset.index = index;

    // Create an image element to show the item picture
    const img = document.createElement("img");
    
    // Set the image source URL to the item's image link
    img.src = item.image;
    
    // Add alternative text (for accessibility) as the item's name
    img.alt = item.name;

    // Create a paragraph element to show the item's name below the picture
    const label = document.createElement("p");
    
    // Set the text inside the paragraph to the item's name
    label.textContent = item.name;

    // Add the image to the div box
    div.appendChild(img);
    
    // Add the name label to the div box under the image
    div.appendChild(label);

    // When this item box is clicked:
    div.onclick = () => {
      // Remember this item as the selected item
      selectedItem = item;
      
      // Highlight the selected item visually on the page
      highlightSelected(index);
    };

    // Add this div (item box) to the "items" section on the page
    itemBox.appendChild(div);
  });
}

// Function to highlight which item is selected by the player
function highlightSelected(index) {
  // Look at all elements with class "item"
  document.querySelectorAll(".item").forEach((el, i) => {
    // Add the "selected" class only if the element is the one clicked
    el.classList.toggle("selected", i == index);
  });
}

// Find all buttons with class "bin" (the recycle bins)
document.querySelectorAll(".bin").forEach(bin => {
  // Add a click event listener to each bin button
  bin.addEventListener("click", () => {
    // If no item has been selected, do nothing
    if (!selectedItem) return;

    // Check if the bin type matches the selected item's type
    if (bin.dataset.type === selectedItem.type) {
      // Correct match: show a success message
      alert("✅ Correct!");
      // Increase the score by 1
      score++;
    } else {
      // Wrong match: show an error message
      alert("❌ Wrong bin!");
    }

    // Update the score display on the page
    document.getElementById("score").innerText = "Score: " + score;

    // Find the index of the selected item in the items array
    const index = items.indexOf(selectedItem);
    
    // Remove the correctly or incorrectly sorted item from the array
    items.splice(index, 1);
    
    // Reset the selected item to none (null)
    selectedItem = null;

    // If there are still items left, reload them on the page
    if (items.length > 0) {
      loadItems();
    } else {
      // No items left, so show a game over message
      document.getElementById("instructions").innerText = "🎉 Game Over!";
      // Replace the items area with a message saying all are sorted
      document.getElementById("items").innerHTML = "<strong>All items sorted!</strong>";
    }
  });
});

// Wait until the HTML page is fully loaded before running the game setup
document.addEventListener("DOMContentLoaded", () => {
  loadItems();  // Show the items for the first time
});
