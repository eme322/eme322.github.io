var myGamePiece;
var myObstacles = [];
var isPaused = false;
var gameStarted = false;
var score = 0; // Initialize score variable

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
  myGamePiece.gravity = 0.03; // Adjust gravity for smoother jumps
  myGameArea.start();
  addGameTitle();
  updateScore(); // Initialize score display
}

function addGameTitle() {
  var title = document.createElement('div');
  title.id = 'gameTitle';
  title.innerHTML = 'Fish Flight';
  document.body.insertBefore(title, document.body.firstChild);
}

function updateScore() {
  document.getElementById('score').innerHTML = 'SCORE: ' + score;
}

function updateObstacles() {
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;
  for (var i = 0; i < myObstacles.length; i += 1) {
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

    // Create top and bottom obstacles with different images
    var crocodileTopImageSrc = 'crocodileTop.jpg';
    var crocodileDownImageSrc = 'crocodileDown.jpg';
    
    // Top obstacle
    myObstacles.push(new gameObject(50, height, null, x, 0, null, crocodileTopImageSrc));
    // Bottom obstacle
    myObstacles.push(new gameObject(50, x - height - gap, null, x, height + gap, null, crocodileDownImageSrc));
  }

  for (var i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x -= 1;
    myObstacles[i].update();

    // Increase score when an obstacle moves out of the canvas
    if (myObstacles[i].x + myObstacles[i].width < 0) {
      score++; // Increment score
      myObstacles.splice(i, 1); // Remove the obstacle
      i--; // Adjust index after removing an element
    }
  }

  updateScore(); // Update the score display
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

// Define the gameObject class here
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
      // Calculate aspect ratio
      var imgAspectRatio = this.image.width / this.image.height;
      var objAspectRatio = this.width / this.height;

      if (imgAspectRatio > objAspectRatio) {
        // Image is wider relative to its height
        var newWidth = this.height * imgAspectRatio;
        var offsetX = (this.width - newWidth) / 2;
        ctx.drawImage(this.image, this.x + offsetX, this.y, newWidth, this.height);
      } else {
        // Image is taller relative to its width
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

    // Create top and bottom obstacles with different images
    var crocodileTopImageSrc = 'crocodileTop.jpg';
    var crocodileDownImageSrc = 'crocodileDown.jpg';
    
    // Top obstacle
    myObstacles.push(new gameObject(50, height, null, x, 0, null, crocodileTopImageSrc));
    // Bottom obstacle
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

