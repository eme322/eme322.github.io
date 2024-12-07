const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

// Define backgrounds for each round
const backgrounds = [
  new Sprite({
    position: { x: 0, y: 0 },
    imageSrc: 'Images/Round2_Background.png'
  }),
  new Sprite({
    position: { x: 0, y: 0 },
    imageSrc: 'Images/2DBackground_34.png'
  }),
  new Sprite({
    position: { x: 0, y: 0 },
    imageSrc: 'Images/2DBackground_36.png'
  })
]

// Current round
let currentRound = 0

const player1 = new Fighter({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  imageSrc: '/Images/SamuraiMack/Idle.png',
  framesMax: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 100
  },
  sprites: {
    idle: {
      imageSrc: '/Images/SamuraiMack/Idle.png',
      framesMax: 8
    },
    run: {
      imageSrc: '/Images/SamuraiMack/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: '/Images/SamuraiMack/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: '/Images/SamuraiMack/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: '/Images/SamuraiMack/Attack1.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: '/Images/SamuraiMack/Take Hit - white silhouette.png',
      framesMax: 4
    },
    death: {
      imageSrc: '/Images/SamuraiMack/Death.png',
      framesMax: 6
    }
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50
    },
    width: 160,
    height: 50
  }
})

const player2 = new Fighter({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: '/Images/kenji/Idle.png',
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 100
  },
  sprites: {
    idle: {
      imageSrc: '/Images/kenji/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: '/Images/kenji/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: '/Images/kenji/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: '/Images/kenji/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: '/Images/kenji/Attack1.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: '/Images/kenji/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: '/Images/kenji/Death.png',
      framesMax: 7
    }
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50
    },
    width: 170,
    height: 50
  }
})

const keys = {
  a: { pressed: false },
  d: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowLeft: { pressed: false }
}

// Fighter Reset for New Rounds
function resetFighters() {
  // Reset health
  player1.health = 100
  player2.health = 100

  // Update health bar visuals
  gsap.to('#player1Health', { width: '100%' })
  gsap.to('#player2Health', { width: '100%' })

  // Reset positions and velocities
  player1.position = { x: 50, y: 0 }
  player2.position = { x: canvas.width - 150, y: 0 }
  player1.velocity = { x: 0, y: 0 }
  player2.velocity = { x: 0, y: 0 }

  // Make sure both players are marked as not dead to participate in the new round
  player1.dead = false
  player2.dead = false
  player1.framesCurrent = 0
  player2.framesCurrent = 0
  player1.switchSprite('idle')
  player2.switchSprite('idle')
}

/// Round Winner Display
let showingWinner = false

function showRoundWinner(winner) {
  showingWinner = true

  // Create a container for the winner text and button
  const container = document.createElement('div')
  container.style.position = 'absolute'
  container.style.left = '50%'
  container.style.top = '50%'
  container.style.transform = 'translate(-50%, -50%)'
  container.style.backgroundColor = 'rgba(255, 255, 255, 0.8)' // Semi-transparent white background
  container.style.padding = '20px'
  container.style.borderRadius = '10px'
  container.style.textAlign = 'center'
  container.style.zIndex = 1000 // Ensure it appears above everything else
  container.style.width = '600px' // Increase the width to fit the entire text comfortably

  // Create and add winner text to the container
  const winnerText = document.createElement('p')
  winnerText.textContent = `${winner} Wins Round ${currentRound + 1}!`
  winnerText.style.fontSize = '32px' // Slightly reduced font size
  winnerText.style.lineHeight = '1.6' // Add more space between lines for readability
  winnerText.style.margin = '0 0 30px 0' // Add more space below the text for readability
  winnerText.style.color = 'black' // Set text color to black
  container.appendChild(winnerText)

  // Create "Next Round" button and add to container
  const nextRoundButton = document.createElement('button')
  nextRoundButton.textContent = 'Next Round'
  nextRoundButton.style.padding = '10px 20px'
  nextRoundButton.style.fontSize = '20px'
  nextRoundButton.style.marginTop = '20px' // Add space above the button for readability
  nextRoundButton.style.cursor = 'pointer'
  nextRoundButton.style.color = 'black' // Set button text color to black
  container.appendChild(nextRoundButton)

  // Add container to the document body
  document.body.appendChild(container)

  // Handle button click
  nextRoundButton.addEventListener('click', () => {
    document.body.removeChild(container)
    if (currentRound < backgrounds.length - 1) {
      currentRound++
      resetFighters()
      showingWinner = false
      animate() // Restart animation loop
    } else {
      // Reset fighters to idle before showing Game Over
      resetFighters()
      showingWinner = false
      showGameOver()
    }
  })
}

// Game Over Screen
function showGameOver() {
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)

  c.fillStyle = 'white'
  c.font = '48px Arial'
  c.textAlign = 'center'
  c.fillText(
    'Game Over! Thanks for Playing!',
    canvas.width / 2,
    canvas.height / 2
  )
}
// Animation Loop with Round
function animate() {
  if (showingWinner) return

  window.requestAnimationFrame(animate)

  // Clear canvas and set background
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)

  // Update and render current round background
  backgrounds[currentRound].update()
  c.drawImage(
    backgrounds[currentRound].image,
    0,
    0,
    canvas.width,
    canvas.height
  )

  // Update players
  player1.update()
  player2.update()

  // Reset velocities and handle movement
  player1.velocity.x = 0
  player2.velocity.x = 0

  movePlayer(player1, 'a', 'd')
  movePlayer(player2, 'ArrowLeft', 'ArrowRight')

  // Handle collisions
  handleCollision(player1, player2, 4)
  handleCollision(player2, player1, 2)
  ///

  // Check for round winner
  if (player1.health <= 0 || player2.health <= 0) {
    const winner = player1.health > player2.health ? 'Player 1' : 'Player 2'
    showRoundWinner(winner)
  }
}

// Movement and Collision Handling
function movePlayer(player, leftKey, rightKey) {
  if (keys[leftKey].pressed && player.lastKey === leftKey) {
    player.velocity.x = -5
    player.switchSprite('run')
  } else if (keys[rightKey].pressed && player.lastKey === rightKey) {
    player.velocity.x = 5
    player.switchSprite('run')
  } else {
    player.switchSprite('idle')
  }

  if (player.velocity.y < 0) player.switchSprite('jump')
  else if (player.velocity.y > 0) player.switchSprite('fall')
}

function handleCollision(attacker, defender, frameHit) {
  if (
    rectangularCollision({ rectangle1: attacker, rectangle2: defender }) &&
    attacker.isAttacking &&
    attacker.framesCurrent === frameHit
  ) {
    defender.takeHit()
    attacker.isAttacking = false

    gsap.to(`#${defender === player1 ? 'player1' : 'player2'}Health`, {
      width: defender.health + '%'
    })
  }

  if (attacker.isAttacking && attacker.framesCurrent === frameHit) {
    attacker.isAttacking = false
  }
}

animate()

window.addEventListener('keydown', (event) => {
  if (!player1.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player1.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player1.lastKey = 'a'
        break
      case 'w':
        player1.velocity.y = -20
        break
      case ' ':
        player1.attack()
        break
    }
  }

  if (!player2.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        player2.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        player2.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        player2.velocity.y = -20
        break
      case 'ArrowDown':
        player2.attack()
        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})

