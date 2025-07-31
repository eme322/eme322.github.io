const toggleHomerBtn = document.getElementById("toggleHomerBtn");
const talkBtn = document.getElementById("talkBtn");
const swapBtn = document.getElementById("swapBtn");
const speech = document.getElementById("speech");
const homerLaugh = document.getElementById("homerLaugh");

let homer = document.getElementById("homer");
let marge = document.getElementById("marge");
let homerVisible = true;

toggleHomerBtn.addEventListener("click", () => {
  if (homerVisible) {
    homer.remove();
    toggleHomerBtn.textContent = "Add Homer";
    homerVisible = false;
  } else {
    const newHomer = document.createElement("img");
    newHomer.id = "homer";
    newHomer.alt = "Homer";
    newHomer.src = "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png";
    newHomer.classList.add("character");

    const scene = document.getElementById("scene");
    scene.insertBefore(newHomer, marge);

    homer = document.getElementById("homer");
    homerVisible = true;
    toggleHomerBtn.textContent = "Remove Homer";
  }
});

talkBtn.addEventListener("click", () => {
  if (homerVisible) {
    speech.textContent = "";
    homerLaugh.play();
    setTimeout(() => {
      speech.textContent = "";
    }, 2000);
  }
});

swapBtn.addEventListener("click", () => {
  if (!homerVisible) return;

  const scene = document.getElementById("scene");
  const currentHomer = document.getElementById("homer");
  const currentMarge = document.getElementById("marge");

  // Swap their position by replacing and reinserting
  scene.insertBefore(currentMarge, currentHomer);
});
