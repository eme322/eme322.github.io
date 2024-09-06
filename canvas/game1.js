var myGamePiece;
var myObstacles = [];
var isPaused = false; // To track the pause state
var gameStarted = false;

function startGameOnce() {
  if (!gameStarted) {
    startGame(); // Start the game
    gameStarted = true;
    document.getElementById('startButton').disabled = true; // Disable button after start
  }
}

function startGame() {
  myGamePiece = new gameObject(30, 30, 'red', 10, 120);
  myGamePiece.gravity = 0.05;
  myGameArea.start();
}

window.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowUp':
      myGamePiece.speedY = -1; // Move upward
      break;
    case 'ArrowDown':
      myGamePiece.speedY = 1; // Move downward
      break;
    case 'ArrowLeft':
      myGamePiece.speedX = -1; // Move left
      break;
    case 'ArrowRight':
      myGamePiece.speedX = 1; // Move right
      break;
  }
});

window.addEventListener('keyup', function (e) {
  switch (e.key) {
    case 'ArrowUp':
    case 'ArrowDown':
      myGamePiece.speedY = 0; // Stop vertical movement when key is released
      break;
    case 'ArrowLeft':
    case 'ArrowRight':
      myGamePiece.speedX = 0; // Stop horizontal movement when key is released
      break;
  }
});

var myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  resume: function () {
    this.interval = setInterval(updateGameArea, 20);
  },
};

function gameObject(width, height, color, x, y, type) {
  this.type = type;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.color = color; // Store the color property
  this.update = function () {
    var ctx = myGameArea.context;
    ctx.fillStyle = color; // Access the stored color property
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function () {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
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
}

function updateGameArea() {
  if (isPaused) return;

  myGameArea.clear();
  myGameArea.frameNo += 1;
  myGamePiece.newPos();
  myGamePiece.update();
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
