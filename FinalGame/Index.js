// Audio Setup
const audioRound1 = new Audio('AudioFiles/_ROUND 1 FIGHT_.mp3')
const audioRound2 = new Audio('AudioFiles/ROUND TWO FIGHT.mp3')
const audioRound3 = new Audio('AudioFiles/ROUND THREE FIGHT.mp3')

const audioRun = new Audio('AudioFiles/FOOTSTEPS V2.mp3')
const audioJumpP1 = new Audio('AudioFiles/JUMP.mp3')
const audioJumpP2 = new Audio('AudioFiles/P2 JUMP GRUNT.mp3')
const audioAttackP1 = new Audio('AudioFiles/P1 ATTACK GRUNT.mp3')
const audioHurtP1 = new Audio('AudioFiles/P1 HURT.mp3')
const audioHurtP2 = new Audio('AudioFiles/P2 HURT.mp3')
const audioDeadP1 = new Audio('AudioFiles/P1 DEAD.mp3')
const audioDeadP2 = new Audio('AudioFiles/P2 DEAD.mp3')
const audioSwordClash = new Audio('AudioFiles/SWORD DOUBLE SWING.mp3')

// Canvas and Context Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

// Game Constants
const gravity = 0.7
const totalRounds = 3
let currentRound = 1
let player1Wins = 0
let player2Wins = 0
let showingWinner = false
let timer = 60
let timerId = null
let roundEnded = false // flag to indicate a round has ended

// Single Background
const background = new Sprite({
  position: { x: 0, y: 0 },
  imageSrc: 'Images/2DBackground_34.png'
})

// Players
const player1 = new Fighter({
  position: { x: 50, y: 0 },
  velocity: { x: 0, y: 0 },
  imageSrc: 'Images/SamuraiMack/Idle.png',
  framesMax: 8,
  scale: 2.5,
  offset: { x: 215, y: 157 },
  sprites: {
    idle: { imageSrc: 'Images/SamuraiMack/Idle.png', framesMax: 8 },
    run: { imageSrc: 'Images/SamuraiMack/Run.png', framesMax: 8 },
    jump: { imageSrc: 'Images/SamuraiMack/Jump.png', framesMax: 2 },
    fall: { imageSrc: 'Images/SamuraiMack/Fall.png', framesMax: 2 },
    attack1: { imageSrc: 'Images/SamuraiMack/Attack1.png', framesMax: 6 },
    takeHit: {
      imageSrc: 'Images/SamuraiMack/Take Hit - white silhouette.png',
      framesMax: 4
    },
    death: { imageSrc: 'Images/SamuraiMack/Death.png', framesMax: 6 }
  },
  attackBox: { offset: { x: 100, y: 50 }, width: 160, height: 50 }
})

const player2 = new Fighter({
  position: { x: canvas.width - 150, y: 0 },
  velocity: { x: 0, y: 0 },
  color: 'blue',
  offset: { x: -50, y: 0 },
  imageSrc: 'Images/Kenji/Idle.png',
  framesMax: 4,
  scale: 2.5,
  offset: { x: 215, y: 167 },
  sprites: {
    idle: { imageSrc: 'Images/Kenji/Idle.png', framesMax: 4 },
    run: { imageSrc: 'Images/Kenji/Run.png', framesMax: 8 },
    jump: { imageSrc: 'Images/Kenji/Jump.png', framesMax: 2 },
    fall: { imageSrc: 'Images/Kenji/Fall.png', framesMax: 2 },
    attack1: { imageSrc: 'Images/Kenji/Attack1.png', framesMax: 4 },
    takeHit: { imageSrc: 'Images/Kenji/Take hit.png', framesMax: 3 },
    death: { imageSrc: 'Images/Kenji/Death.png', framesMax: 7 }
  },
  attackBox: { offset: { x: -170, y: 50 }, width: 170, height: 50 }
})

// Input Tracking
const keys = {
  a: { pressed: false },
  d: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowLeft: { pressed: false }
}

// Utility functions to show containers
function showContainer(
  message,
  showButton = true,
  buttonText = 'Next Round',
  callback = null
) {
  showingWinner = true
  const container = document.createElement('div')
  container.style.position = 'absolute'
  container.style.left = '50%'
  container.style.top = '50%'
  container.style.transform = 'translate(-50%, -50%)'
  container.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
  container.style.padding = '20px'
  container.style.borderRadius = '10px'
  container.style.textAlign = 'center'
  container.style.zIndex = 1000
  container.style.width = '600px'

  const textElem = document.createElement('p')
  textElem.innerHTML = message
  textElem.style.fontSize = '32px'
  textElem.style.lineHeight = '1.6'
  textElem.style.margin = '0 0 30px 0'
  textElem.style.color = 'black'
  container.appendChild(textElem)

  if (showButton) {
    const nextButton = document.createElement('button')
    nextButton.textContent = buttonText
    nextButton.style.padding = '10px 20px'
    nextButton.style.fontSize = '20px'
    nextButton.style.marginTop = '20px'
    nextButton.style.cursor = 'pointer'
    nextButton.style.color = 'black'
    container.appendChild(nextButton)
    nextButton.addEventListener('click', () => {
      document.body.removeChild(container)
      showingWinner = false
      if (callback) callback()
    })
  }

  document.body.appendChild(container)
  return container
}

function playRoundAudio(round) {
  if (round === 1) audioRound1.play()
  else if (round === 2) audioRound2.play()
  else if (round === 3) audioRound3.play()
}

// Reset Round
function resetRound() {
  player1.health = 100
  player2.health = 100

  gsap.to('#player1Health', { width: '100%' })
  gsap.to('#player2Health', { width: '100%' })

  player1.position = { x: 50, y: 0 }
  player1.velocity = { x: 0, y: 0 }
  player1.dead = false
  player1.framesCurrent = 0
  player1.image = player1.sprites.idle.image
  player1.framesMax = player1.sprites.idle.framesMax
  player1.switchSprite('idle')
  player1.lastKey = null

  player2.position = { x: canvas.width - 150, y: 0 }
  player2.velocity = { x: 0, y: 0 }
  player2.dead = false
  player2.framesCurrent = 0
  player2.image = player2.sprites.idle.image
  player2.framesMax = player2.sprites.idle.framesMax
  player2.switchSprite('idle')
  player2.lastKey = null

  roundEnded = false
  timer = 60
  document.querySelector('#timer').innerHTML = timer

  // Play round announcement sound
  playRoundAudio(currentRound)
}

// Decrease Timer
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer
  }

  if (timer === 0) {
    endRoundByTimer()
  }
}

// After last round, show final champion sequence without "Game Over!" and redirect after 4s
function showFinalChampionSequence() {
  let finalMessage = ''
  if (player1Wins > player2Wins) finalMessage += 'Player 1 is the Champion!'
  else if (player2Wins > player1Wins)
    finalMessage += 'Player 2 is the Champion!'
  else finalMessage += "It's a Tie!"

  // "Analyzing the champion..."
  const analyzingContainer = showContainer(
    'Analyzing the champion...',
    false,
    null,
    null
  )

  setTimeout(() => {
    document.body.removeChild(analyzingContainer)
    showingWinner = false

    // Show final champion (no button)
    const finalContainer = showContainer(finalMessage, false)

    // After 4 seconds, redirect to GameOver.html
    setTimeout(() => {
      window.location.href = 'GameOver.html'
    }, 4000)
  }, 4000)
}

// Handle next round or end game
function handleNextRound() {
  if (currentRound < totalRounds) {
    currentRound++
    resetRound()
    decreaseTimer()
    animate()
  }
}

// Show the result for non-final rounds with a "Next Round" button
function showIntermediateRoundResult(message) {
  showContainer(message, true, 'Next Round', handleNextRound)
}

// Show the result for the final round differently: no button, then analyzing, then champion
function showFinalRoundResult(message) {
  // Display the final round winner message for 4 seconds
  const finalRoundContainer = showContainer(message, false)
  setTimeout(() => {
    document.body.removeChild(finalRoundContainer)
    showingWinner = false
    // After removing final round result, show "Analyzing the champion..."
    showFinalChampionSequence()
  }, 4000)
}

// End round by timer
function endRoundByTimer() {
  clearTimeout(timerId)
  roundEnded = true

  let message = ''
  if (player1.health === player2.health) {
    message = `Round ${currentRound} is a Draw!`
  } else if (player1.health > player2.health) {
    player1Wins++
    message = `Player 1 Wins Round ${currentRound}!`
  } else {
    player2Wins++
    message = `Player 2 Wins Round ${currentRound}!`
  }

  // Allow a frame for death sprite
  window.requestAnimationFrame(() => {
    setTimeout(() => {
      if (currentRound < totalRounds) {
        showIntermediateRoundResult(message)
      } else {
        showFinalRoundResult(message)
      }
    }, 500)
  })
}

// End round by health knockout
function endRoundByHealth() {
  clearTimeout(timerId)
  roundEnded = true

  let message = ''
  let p1Dead = false
  let p2Dead = false

  if (player1.health === player2.health) {
    message = `Round ${currentRound} is a Draw!`
  } else if (player1.health > player2.health) {
    player1Wins++
    message = `Player 1 Wins Round ${currentRound}!`
    p2Dead = true
  } else {
    player2Wins++
    message = `Player 2 Wins Round ${currentRound}!`
    p1Dead = true
  }

  // Play death sound
  if (p1Dead) audioDeadP1.play()
  if (p2Dead) audioDeadP2.play()

  window.requestAnimationFrame(() => {
    setTimeout(() => {
      if (currentRound < totalRounds) {
        showIntermediateRoundResult(message)
      } else {
        showFinalRoundResult(message)
      }
    }, 500)
  })
}

// Movement
let p1WasRunning = false
let p2WasRunning = false

function movePlayer(player, leftKey, rightKey) {
  let running = false
  if (keys[leftKey].pressed && player.lastKey === leftKey) {
    player.velocity.x = -5
    player.switchSprite('run')
    running = true
  } else if (keys[rightKey].pressed && player.lastKey === rightKey) {
    player.velocity.x = 5
    player.switchSprite('run')
    running = true
  } else {
    player.switchSprite('idle')
  }

  // Play run sound only when player starts to run
  if (player === player1) {
    if (running && !p1WasRunning) {
      audioRun.currentTime = 0
      audioRun.play()
    }
    p1WasRunning = running
  } else {
    if (running && !p2WasRunning) {
      audioRun.currentTime = 0
      audioRun.play()
    }
    p2WasRunning = running
  }

  if (player.velocity.y < 0) player.switchSprite('jump')
  else if (player.velocity.y > 0) player.switchSprite('fall')
}

// Handle Collision and Decrease Health
function handleCollision(attacker, defender, frameHit) {
  if (
    rectangularCollision({ rectangle1: attacker, rectangle2: defender }) &&
    attacker.isAttacking &&
    attacker.framesCurrent === frameHit
  ) {
    defender.takeHit()

    // Play hurt sound based on defender
    if (defender === player1) audioHurtP1.play()
    else audioHurtP2.play()

    attacker.isAttacking = false

    gsap.to(`#${defender === player1 ? 'player1' : 'player2'}Health`, {
      width: defender.health + '%'
    })

    if (defender.health <= 0) {
      endRoundByHealth()
    } else {
      // If attack hits, could also play sword clash if you want
      // audioSwordClash.play()
    }
  }

  // If attacker swings and no hit at frame, reset attack
  if (attacker.isAttacking && attacker.framesCurrent === frameHit) {
    // If you want sword clash sound whenever swords would collide or on miss,
    // you can conditionally check positions here.
    // For now, play sword clash if they are close and both attacking at same time perhaps
    if (
      (attacker === player1 && player2.isAttacking) ||
      (attacker === player2 && player1.isAttacking)
    ) {
      audioSwordClash.play()
    }
    attacker.isAttacking = false
  }
}

// Animation Loop
function animate() {
  if (showingWinner) return
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)

  // Draw the background fitting the canvas
  if (background.image) {
    c.drawImage(background.image, 0, 0, canvas.width, canvas.height)
  }

  // Update Players
  player1.update(player2)
  player2.update(player1)

  // If round ended, do not process collisions or movements
  if (!roundEnded) {
    if (!player1.dead && !player2.dead) {
      player1.velocity.x = 0
      player2.velocity.x = 0

      movePlayer(player1, 'a', 'd')
      movePlayer(player2, 'ArrowLeft', 'ArrowRight')

      handleCollision(player1, player2, 4)
      handleCollision(player2, player1, 2)
    }
  }
}

// Start First Round
resetRound()
decreaseTimer()
animate()

// Keyboard Events
window.addEventListener('keydown', (event) => {
  if (!player1.dead && !roundEnded) {
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
        if (player1.position.y + player1.height >= 330) {
          player1.velocity.y = -20
          // Play jump sound for player1
          audioJumpP1.currentTime = 0
          audioJumpP1.play()
        }
        break
      case ' ':
        player1.attack()
        // Play attack grunt for player1
        audioAttackP1.currentTime = 0
        audioAttackP1.play()
        break
    }
  }

  if (!player2.dead && !roundEnded) {
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
        if (player2.position.y + player2.height >= 330) {
          player2.velocity.y = -20
          // Play jump grunt for player2
          audioJumpP2.currentTime = 0
          audioJumpP2.play()
        }
        break
      case 'ArrowDown':
        player2.attack()
        // Player 2 attack grunt not specified, if you have one you can add it
        audioAttackP1.currentTime = 0
        audioAttackP1.play() // Using P1 grunt as placeholder, or add a P2 ATTACK sound if available
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
