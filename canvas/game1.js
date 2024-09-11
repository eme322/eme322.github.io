// Global variables to manage game state
var myGamePiece; 
var myObstacles = [];
var isPaused = false;
var gameStarted = false;
var gameOver = false; // To track if the game is over
var score = 0;
var scoreInterval = 50; // Update score every 50 frames
var frameCount = 0;
var backgroundSound; // For background sound 
var gameOverSound; // For Game Over sound

// Function to start the game once when the start button is pressed
function startGameOnce() {
  if (!gameStarted) {
    startGame();
    gameStarted = true;
    document.getElementById('startButton').disabled = true; // Disable start button after game starts
  }
}
  
// Function to initialize the game
function startGame() {
  var fishImageSrc = 'fish.jpg'; // Path to your fish image
  myGamePiece = new gameObject(45, 45, null, 10, 120, null, fishImageSrc); // Use the image for the sprite
  myGamePiece.gravity = 0.005; // Gravity for smoother jumps
  myGameArea.start();
  addGameTitle();  // Add the game title to the page
  playBackgroundSound();// Start playing background sound
}

// Function to add the game title to the page
function addGameTitle() {
  var existingTitle = document.getElementById('gameTitle');
  if (!existingTitle) {
    var title = document.createElement('div');
    title.id = 'gameTitle';
    title.innerHTML = 'Fish Flight';
    document.body.insertBefore(title, document.body.firstChild); // Insert title at the top of the page
  }
}

// Event listener for keydown events to control the game piece
window.addEventListener('keydown', function (e) {
  if (!gameStarted || gameOver) return;

  switch (e.key) {
    case 'ArrowUp':
      myGamePiece.speedY = -5;//Up
      break;
    case 'ArrowDown':
      myGamePiece.speedY = 1;//Down
      break;
    case 'ArrowLeft':
      myGamePiece.speedX = -1;//Left
      break;
    case 'ArrowRight':
      myGamePiece.speedX = 1; //Right
      break;
  }
});

// Event listener for keyup events to stop the movement of the game piece
window.addEventListener('keyup', function (e) {
  if (!gameStarted || gameOver) return; // Ignore input if the game hasn't started or is over

  switch (e.key) {
    case 'ArrowUp':
    case 'ArrowDown':
      myGamePiece.speedY = 0; // Stop vertical movement 
      break;
    case 'ArrowLeft':
    case 'ArrowRight':
      myGamePiece.speedX = 0;  // Stop horizontal movement
      break;
  }
});

// Object to manage the game area and its operations
var myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 600;
    this.canvas.height = 450;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[1]); // Insert canvas into the DOM
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 40);//update game every 40 milliseconds
  },
  clear: function () {
    this.context.fillStyle = 'black';
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear the canvas
  },
  stop: function () {
    clearInterval(this.interval);
    //this.clear(); // Clear the canvas
    //myObstacles = []; // Remove all obstacles
    //myGamePiece = null; // Remove the fish
    stopBackgroundSound(); // Stop the background sound
    displayGameOver(); // Display the Game Over message
    stopBackgroundSound(); // Stop the background sound
    playGameOverSound(); // Play the Game Over sound effect
    
  },
  resume: function () {
    this.interval = setInterval(updateGameArea, 40); //Resume the game loop
  },
};

// Constructor function to create game objects
function gameObject(width, height, color, x, y, type, imageSrc) {
  this.type = type;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.color = color;
  this.image = null;

  if (imageSrc) {
    this.image = new Image();
    this.image.src = imageSrc; // Load the image for the game object
  }

  // Update the position and appearance of the game object
  this.update = function () {
    var ctx = myGameArea.context;
    if (this.image) {
      var imgAspectRatio = this.image.width / this.image.height;
      var objAspectRatio = this.width / this.height;

      if (imgAspectRatio > objAspectRatio) {
        var newWidth = this.height * imgAspectRatio;
        var offsetX = (this.width - newWidth) / 2;
        ctx.drawImage(this.image, this.x + offsetX, this.y, newWidth, this.height);
      } else {
        var newHeight = this.width / imgAspectRatio;
        var offsetY = (this.height - newHeight) / 2;
        ctx.drawImage(this.image, this.x, this.y + offsetY, this.width, newHeight);
      }
    } else if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };

  // Update the position of the game object considering gravity
  this.newPos = function () {
    this.gravitySpeed += this.gravity;
    this.y += this.speedY + this.gravitySpeed;
    this.x += this.speedX;
    this.checkBoundaries(); // Ensure the object stays within canvas boundaries
  };

  // Check if the game object is within the canvas boundaries
  this.checkBoundaries = function () {
    var rockbottom = myGameArea.canvas.height - this.height;
    if (this.y > rockbottom) {
      this.y = rockbottom;
      this.gravitySpeed = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.gravitySpeed = 0;
    }
  };

  // Check for collisions with another game object
  this.crashWith = function (otherobj) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = otherobj.x;
    var otherright = otherobj.x + otherobj.width;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = true;
    if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
      crash = false;
    }
    return crash;
  };
}

// Function to update the obstacles in the game
function updateObstacles() {
  if (gameOver) return; // Stop updating obstacles if the game is over

  // Check for collisions with obstacles
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece && myGamePiece.crashWith(myObstacles[i])) {
      gameOver = true; // Set game over flag
      myGameArea.stop();
      displayGameOver(); // Display game over message
      return;
    }
  }

  // Generate new obstacles at intervals
  if (myGameArea.frameNo == 1 || everyinterval(150)) {
    var x = myGameArea.canvas.width;
    var minHeight = 20;
    var maxHeight = 200;
    var height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    var minGap = 100;
    var maxGap = 300;
    var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    var crocodileTopImageSrc = 'crocodileTop.jpg';
    var crocodileDownImageSrc = 'crocodileDown.jpg';

    myObstacles.push(new gameObject(50, height, null, x, 0, null, crocodileTopImageSrc));
    myObstacles.push(new gameObject(50, x - height - gap, null, x, height + gap, null, crocodileDownImageSrc));
  }
  
// Move and update obstacles
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x -= 1;
    myObstacles[i].update();
  }
}

// Function to check if a certain number of frames have passed
function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) return true;
  return false;
}

function clearPauseText() {
  myGameArea.clear(); // This will clear the entire canvas including the "Game Paused" text
}

// Main game loop to update the game area
function updateGameArea() {
  if (isPaused) return; // Stop updating if the game is paused
  if (gameOver) return; // Stop updating if the game is over

  myGameArea.clear();
  myGameArea.frameNo += 1;
  
  // Update obstacles only when the game is in process
  updateObstacles();

  //if (myGamePiece) {
    if (!gameOver && myGamePiece) {
    myGamePiece.newPos();
    myGamePiece.update();
  }

  frameCount++;
  if (frameCount % scoreInterval === 0) {
    score += 1;  //Update score every scoreInterval frames
    document.getElementById('score').textContent = 'SCORE: ' + score;
  }
}

// Function to toggle the pause/resume state of the game
function togglePause() {
  if (gameOver) return; // Ignore pause/resume if the game is already over

  if (isPaused) {
    isPaused = false;
    myGameArea.resume(); //resume the game
    clearPauseText(); // Clear "Game Paused" text when resuming
  } else {
    isPaused = true;
    myGameArea.stop();//pause the game
    displayPauseText(); // Display "Game Paused" on the canvas
  }
}

//Funtion to display the Game Pause message
function displayPauseText() {
  if (gameOver) return; // Don't display "Game Paused" if the game is over
  var ctx = myGameArea.context;
  ctx.font = "48px Arial";
  ctx.fillStyle = "Red";
  ctx.textAlign = "center";
  //ctx.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height); // Clear previous text before showing pause
  ctx.fillText("Game Paused", myGameArea.canvas.width / 2, myGameArea.canvas.height / 2);
}

//
function clearPauseText() {
  myGameArea.clear(); // This will clear the entire canvas including the "Game Paused" text
  updateGameArea(); // Redraw the game immediately after clearing the pause text
}


// Function to display the Game Over message
function displayGameOver() {
  var ctx = myGameArea.context;
  ctx.font = "48px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Game Over!", myGameArea.canvas.width / 2, myGameArea.canvas.height / 2);
}

// Sound functions
function playBackgroundSound() {
  backgroundSound = new Audio('mixkit-close-sea-waves-loop-1195.wav');
  backgroundSound.loop = true; // Loop the background sound
  backgroundSound.play();
}

// Function to stop background sound
function stopBackgroundSound() {
  if (backgroundSound) {
    backgroundSound.pause();
    backgroundSound.currentTime = 0; // Reset the sound to the beginning
  }
}

// Function to play Game Over sound
function playGameOverSound() {
  if (!isPaused && gameOver) { // Ensure the game is not paused and is over before playing the sound
  gameOverSound = new Audio('mixkit-sad-game-over-trombone-471.wav');
  gameOverSound.play();
}

