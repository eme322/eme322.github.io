var myGamePiece;
var myObstacles = [];
var myScoreDiv;
var backgroundImage = new Image();
backgroundImage.src = 'Ba.jpg';
var sharkImage = new Image();
sharkImage.src = 'shark.png';
var fishImage = new Image();
fishImage.src = 'fish.png';
var backgroundX = 0;
var isGamePaused = true; // Track whether the game is paused or running
var isGameStarted = false; // Track whether the game has started
var intervalId; // Store the interval ID for stopping the game loop
// Sound effects
var backgroundSound = new Audio('mixkit-close-sea-waves-loop-1195.wav');
backgroundSound.loop = true; // Keep looping the background sound
var gameOverSound = new Audio('mixkit-sad-game-over-trombone-471.wav');

function startGame() {
  if (!isGameStarted) {
    myGamePiece = new gameObject(30, 30, fishImage, 10, 30, 'image');
    myGamePiece.gravity = 0.01;
    myScoreDiv = document.getElementById('score');
    myGameArea.start();
    backgroundSound.play(); // Start playing the background sound
    //
    isGamePaused = false; // Game is no longer paused
    document.getElementById('startButton').disabled = true; // Disable the Start button
    document.getElementById('pauseResumeButton').disabled = false; // Enable the Pause/Resume button
    intervalId = setInterval(updateGameArea, 20); // Start the game loop
    isGameStarted = true; // Mark the game as started
  }
}
function pauseGame() {
  clearInterval(intervalId); // Stop the game loop
  isGamePaused = true; // Game is now paused
  backgroundSound.pause(); // Pause the background sound
  document.getElementById('pauseResumeButton').innerText = 'Resume'; // Update button text
}

function resumeGame() {
  intervalId = setInterval(updateGameArea, 20); // Restart the game loop
  isGamePaused = false; // Game is no longer paused
  backgroundSound.play(); // Resume the background sound
  document.getElementById('pauseResumeButton').innerText = 'Pause'; // Update button text
}

function togglePauseResume() {
  if (isGamePaused) {
    resumeGame();
  } else {
    pauseGame();
  }
}

var myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    // Title div and add it before the canvas
    var titleDiv = document.createElement('div');
    titleDiv.id = 'gameTitle';
    document.body.appendChild(titleDiv);
    this.canvas.width = 600;
    this.canvas.height = 400;
    this.context = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.frameNo = 0;
    // this.interval = setInterval(updateGameArea, 20); //MMm quiere qu la borre
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  drawBackground: function () {
    this.context.drawImage(
      backgroundImage,
      backgroundX,
      0,
      this.canvas.width,
      this.canvas.height
    );
    this.context.drawImage(
      backgroundImage,
      backgroundX + this.canvas.width,
      0,
      this.canvas.width,
      this.canvas.height
    );
    backgroundX -= 1;
    if (backgroundX <= -this.canvas.width) {
      backgroundX = 0;
    }
  },
};

function gameObject(width, height, image, x, y, type) {
  this.type = type;
  this.width = width;
  this.height = height;
  this.image = image;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.update = function () {
    var ctx = myGameArea.context;
    if (this.type == 'image') {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  this.newPos = function () {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom();
  };
  this.hitBottom = function () {
    var rockbottom = myGameArea.canvas.height - this.height;
    if (this.y > rockbottom) {
      this.y = rockbottom;
      this.gravitySpeed = 0;
    }
  };
  this.crashWith = function (otherobj) {
    var padding = 10; // Adjust padding to make collision detection less sensitive
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = otherobj.x;
    var otherright = otherobj.x + otherobj.width;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = true;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
  };
}

function updateGameArea() {
  if (!isGameStarted || isGamePaused) return; // Stop updates if game isn't started or is paused
  var x, sharkHeight, sharkWidth, speed, yPos;

  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      backgroundSound.pause(); // Stop the background sound
      gameOverSound.play(); // Play the game over sound
      return;
    }
  }

  myGameArea.clear();
  myGameArea.drawBackground(); // Keep background moving
  myGameArea.frameNo += 1;

  // Increase the frequency of shark generation
  if (myGameArea.frameNo % 100 === 0) {
    // Generate sharks every 100 frames
    // Add multiple sharks at once
    for (var j = 0; j < 2; j++) {
      // Add 2 sharks per frame
      var validPosition = false;
      var maxAttempts = 10; // Maximum number of attempts to find a valid position
      var attempts = 0;

      while (!validPosition && attempts < maxAttempts) {
        x = myGameArea.canvas.width;
        sharkHeight = 60; // Adjust height as needed
        sharkWidth = 80; // Adjust width as needed
        speed = Math.random() * 2 + 1; // Random speed between 1 and 3
        yPos = Math.floor(
          Math.random() * (myGameArea.canvas.height - sharkHeight)
        );
        var newShark = new gameObject(
          sharkWidth,
          sharkHeight,
          sharkImage,
          x,
          yPos,
          'image'
        );
        newShark.speedX = -speed;

        // Check for overlap with existing sharks
        var overlap = false;
        for (var k = 0; k < myObstacles.length; k++) {
          if (
            myObstacles[k] !== newShark &&
            isOverlapping(newShark, myObstacles[k])
          ) {
            overlap = true;
            break;
          }
        }

        if (!overlap) {
          validPosition = true;
          myObstacles.push(newShark);
        }

        attempts++;
      }
    }
  }

  // Move and update obstacles (sharks)
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += myObstacles[i].speedX;
    myObstacles[i].update();
  }

  myScoreDiv.innerHTML = 'SCORE: ' + myGameArea.frameNo;
  myGamePiece.newPos();
  myGamePiece.update();
}

// Function to check if two game objects overlap
function isOverlapping(obj1, obj2) {
  var myleft = obj1.x;
  var myright = obj1.x + obj1.width;
  var mytop = obj1.y;
  var mybottom = obj1.y + obj1.height;
  var otherleft = obj2.x;
  var otherright = obj2.x + obj2.width;
  var othertop = obj2.y;
  var otherbottom = obj2.y + obj2.height;

  return !(
    mybottom < othertop ||
    mytop > otherbottom ||
    myright < otherleft ||
    myleft > otherright
  );
}
document.addEventListener('keydown', function (e) {
  if (isGameStarted && !isGamePaused) {
    switch (e.key) {
      case 'ArrowUp':
        myGamePiece.speedY = -2; // Move up
        break;
      case 'ArrowDown':
        myGamePiece.speedY = 2; // Move down
        break;
      case 'ArrowLeft':
        myGamePiece.speedX = -2; // Move left
        break;
      case 'ArrowRight':
        myGamePiece.speedX = 2; // Move right
        break;
    }
  }
});

document.addEventListener('keyup', function (e) {
  if (isGameStarted && !isGamePaused) {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        myGamePiece.speedY = 0; // Stop vertical movement
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        myGamePiece.speedX = 0; // Stop horizontal movement
        break;
    }
  }
});

