var myGamePiece;
var myObstacles = [];
var isPaused = false;
var gameStarted = false;
var gameOver = false; // To track if the game is over
var score = 0;
var scoreInterval = 50; // Update score every 50 frames
var frameCount = 0;

function startGameOnce() {
  if (!gameStarted) {
    startGame();
    gameStarted = true;
    document.getElementById('startButton').disabled = true;
  }
}

function startGame() {
  var fishImageSrc = 'fish.jpg'; // Path to your fish image
  myGamePiece = new gameObject(60, 60, null, 10, 120, null, fishImageSrc); // Use the image for the sprite
  myGamePiece.gravity = 0.01; // Adjust gravity for smoother jumps
  myGameArea.start();
  addGameTitle();
}

function addGameTitle() {
  var existingTitle = document.getElementById('gameTitle');
  if (!existingTitle) {
    var title = document.createElement('div');
    title.id = 'gameTitle';
    title.innerHTML = 'Fish Flight';
    document.body.insertBefore(title, document.body.firstChild);
  }
}

window.addEventListener('keydown', function (e) {
  if (!gameStarted || gameOver) return;

  switch (e.key) {
    case 'ArrowUp':
      myGamePiece.speedY = -2;
      break;
    case 'ArrowDown':
      myGamePiece.speedY = 1;
      break;
    case 'ArrowLeft':
      myGamePiece.speedX = -1;
      break;
    case 'ArrowRight':
      myGamePiece.speedX = 1;
      break;
  }
});

window.addEventListener('keyup', function (e) {
  if (!gameStarted || gameOver) return;

  switch (e.key) {
    case 'ArrowUp':
    case 'ArrowDown':
      myGamePiece.speedY = 0;
      break;
    case 'ArrowLeft':
    case 'ArrowRight':
      myGamePiece.speedX = 0;
      break;
  }
});

var myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[1]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 40);
  },
  clear: function () {
    this.context.fillStyle = 'black';
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
    gameOver = true; // Set game over flag when the game stops
    this.clear(); // Clear the canvas
    myObstacles = []; // Remove all obstacles
    myGamePiece = null; // Remove the fish
    displayGameOver(); // Display the Game Over message
  },
  resume: function () {
    this.interval = setInterval(updateGameArea, 40);
  },
};

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
    this.image.src = imageSrc;
  }

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

  this.newPos = function () {
    this.gravitySpeed += this.gravity;
    this.y += this.speedY + this.gravitySpeed;
    this.x += this.speedX;
    this.checkBoundaries();
  };

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

function updateObstacles() {
  if (gameOver) return; // Stop updating obstacles if the game is over

  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece && myGamePiece.crashWith(myObstacles[i])) {
      myGameArea.stop();
      return;
    }
  }

  if (myGameArea.frameNo == 1 || everyinterval(150)) {
    var x = myGameArea.canvas.width;
    var minHeight = 20;
    var maxHeight = 200;
    var height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    var minGap = 50;
    var maxGap = 200;
    var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    var crocodileTopImageSrc = 'crocodileTop.jpg';
    var crocodileDownImageSrc = 'crocodileDown.jpg';

    myObstacles.push(new gameObject(50, height, null, x, 0, null, crocodileTopImageSrc));
    myObstacles.push(new gameObject(50, x - height - gap, null, x, height + gap, null, crocodileDownImageSrc));
  }

  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x -= 1;
    myObstacles[i].update();
  }
}

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) return true;
  return false;
}

function updateGameArea() {
  if (isPaused || gameOver) return;

  myGameArea.clear();
  myGameArea.frameNo += 1;

  updateObstacles();

  if (myGamePiece) {
    myGamePiece.newPos();
    myGamePiece.update();
  }

  frameCount++;
  if (frameCount % scoreInterval === 0) {
    score += 1;
    document.getElementById('score').textContent = 'SCORE: ' + score;
  }
}

function togglePause() {
  if (isPaused) {
    isPaused = false;
    myGameArea.resume();
  } else {
    isPaused = true;
    myGameArea.stop();
  }
}

function displayGameOver() {
  var ctx = myGameArea.context;
  ctx.font = "48px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Game Over!", myGameArea.canvas.width / 2, myGameArea.canvas.height / 2);
}
