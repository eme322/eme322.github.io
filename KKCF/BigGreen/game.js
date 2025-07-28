const items = [
  { name: "Plastic Bottle", type: "recycle" },
  { name: "Apple Core", type: "compost" },
  { name: "Chip Bag", type: "trash" },
  { name: "Newspaper", type: "recycle" },
  { name: "Banana Peel", type: "compost" }
];

let selectedItem = null;
let score = 0;

function loadItems() {
  const itemBox = document.getElementById("items");
  itemBox.innerHTML = "";

  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = item.name;
    div.dataset.index = index;
    div.onclick = () => {
      selectedItem = item;
      highlightSelected(index);
    };
    itemBox.appendChild(div);
  });
}

function highlightSelected(index) {
  document.querySelectorAll("#items div").forEach((el, i) => {
    el.style.border = i == index ? "2px solid blue" : "2px dashed #333";
  });
}

document.querySelectorAll(".bin").forEach(bin => {
  bin.addEventListener("click", () => {
    if (!selectedItem) return;

    if (bin.dataset.type === selectedItem.type) {
      alert("✅ Correct!");
      score++;
    } else {
      alert("❌ Wrong bin!");
    }

    document.getElementById("score").innerText = "Score: " + score;

    // Remove used item
    const index = items.indexOf(selectedItem);
    items.splice(index, 1);
    selectedItem = null;

    if (items.length > 0) {
      loadItems();
    } else {
      document.getElementById("instructions").innerText = "🎉 Game Over!";
      document.getElementById("items").innerHTML = "<strong>Well done!</strong>";
    }
  });
});

loadItems();
