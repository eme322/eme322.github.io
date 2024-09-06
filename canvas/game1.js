var myGamePiece;
var myObstacles = [];
var isPaused = false;
var gameStarted = false;

function startGameOnce() {
  if (!gameStarted) {
    startGame(); 
    gameStarted = true;
    document.getElementById('startButton').disabled = true; 
  }
}

function startGame() {
  myGamePiece = new gameObject(30, 30, 'red', 10, 120);
  myGamePiece.gravity = 0.02; // Reduce gravity for smoother jumps
  myGameArea.start();
}

window.addEventListener('keydown', function (e) {
  if (!gameStarted) return;

  switch (e.key) {
    case 'ArrowUp':
      myGamePiece.speedY = -3; // Reduce upward speed for smoother air time
      break;
    case 'ArrowDown':
      myGamePiece.speedY = 1.5; // Slow downward movement
      break;
    case 'ArrowLeft':
      myGamePiece.speedX = -1.5; 
      break;
    case 'ArrowRight':
      myGamePiece.speedX = 1.5; 
      break;
  }
});

window.addEventListener('keyup', function (e) {
  if (!gameStarted) return;

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
  this.color = color;
  this.update = function () {
    var ctx = myGameArea.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

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
}

// Function to create and manage obstacles
function updateObstacles() {
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      return;
    }
  }
  
  if (myGameArea.frameNo == 1 || everyinterval(150)) {
    x = myGameArea.canvas.width;
    minHeight = 20;
    maxHeight = 200;
    height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    minGap = 50;
    maxGap = 200;
    gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new gameObject(10, height, 'green', x, 0));
    myObstacles.push(new gameObject(10, x - height - gap, 'green', x, height + gap));
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
  if (isPaused) return;

  myGameArea.clear();
  myGameArea.frameNo += 1;

  updateObstacles();

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

