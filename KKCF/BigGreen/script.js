const items = [
  {
    name: "Plastic Bottle",
    type: "recycle",
    image: "https://sustainable.columbia.edu/sites/sustainable.columbia.edu/files/styles/cu_crop/public/content/plastic_metal_glass%20recycling.jpeg?itok=7dG7SnPC"
  },
  {
    name: "Banana Peel",
    type: "compost",
    image: "https://images.utopia.org/A-h7AeEhgMBhSYrf1yYj7L_2T5XUBqtbYxVWw0JZqRM/rt:fill/w:1280/h:720/g:ce/plain/2021/10/you-can-you-eat-banana-peels-cc0-pixabay-alexas_fotos-211011.jpg"
  },
  {
    name: "Candy Wrapper",
    type: "trash",
    image: "https://media.istockphoto.com/id/1147024409/photo/after-party-finished-candy-full-of-wrapping-paper.jpg?s=612x612&w=0&k=20&c=ASxDbCSEeWdwkSIW1YWJXerN-eO3BsisTeM3QCeRImA="
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

