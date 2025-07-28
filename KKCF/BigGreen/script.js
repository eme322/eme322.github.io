const items = [
  {
    name: "Plastic Bottle",
    type: "recycle",
    image: "https://cdn-icons-png.flaticon.com/512/3467/3467872.png"
  },
  {
    name: "Banana Peel",
    type: "compost",
    image: "https://cdn-icons-png.flaticon.com/512/590/590685.png"
  },
  {
    name: "Candy Wrapper",
    type: "trash",
    image: "https://cdn-icons-png.flaticon.com/512/776/776587.png"
  }
];

let selectedItem = null;
let score = 0;

function loadItems() {
  const itemBox = document.getElementById("items");
  itemBox.innerHTML = "";

  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.dataset.index = index;

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    const label = document.createElement("p");
    label.textContent = item.name;

    div.appendChild(img);
    div.appendChild(label);

    div.onclick = () => {
      selectedItem = item;
      highlightSelected(index);
    };

    itemBox.appendChild(div);
  });
}

function highlightSelected(index) {
  document.querySelectorAll(".item").forEach((el, i) => {
    el.classList.toggle("selected", i == index);
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

    const index = items.indexOf(selectedItem);
    items.splice(index, 1);
    selectedItem = null;

    if (items.length > 0) {
      loadItems();
    } else {
      document.getElementById("instructions").innerText = "🎉 Game Over!";
      document.getElementById("items").innerHTML = "<strong>All items sorted!</strong>";
    }
  });
});

loadItems();

