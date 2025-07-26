/**
 * BigGreen Recycling Game - Simple Educational Version
 * Pure HTML, CSS, and JavaScript for students to learn from
 */

// Game State - Simple object to track the game
var gameState = {
    currentRound: 1,
    totalRounds: 3,
    score: 0,
    maxScore: 9,
    isGameActive: false
};

// Game Items Data - All the items students will sort
var gameItems = [
    // Round 1 Items
    [
        { id: 1, name: "Plastic Bottle", icon: "🥤", correctBin: "recycling" },
        { id: 2, name: "Apple Core", icon: "🍎", correctBin: "compost" },
        { id: 3, name: "Candy Wrapper", icon: "🍬", correctBin: "trash" }
    ],
    // Round 2 Items
    [
        { id: 4, name: "Newspaper", icon: "📰", correctBin: "recycling" },
        { id: 5, name: "Banana Peel", icon: "🍌", correctBin: "compost" },
        { id: 6, name: "Broken Glass", icon: "🔗", correctBin: "trash" }
    ],
    // Round 3 Items
    [
        { id: 7, name: "Aluminum Can", icon: "🥫", correctBin: "recycling" },
        { id: 8, name: "Coffee Grounds", icon: "☕", correctBin: "compost" },
        { id: 9, name: "Styrofoam Cup", icon: "🥤", correctBin: "trash" }
    ]
];

// DOM Elements - Get references to HTML elements
var elements = {};

// Initialize the game when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('BigGreen Game Loading...');
    getElements();
    setupEventListeners();
    console.log('Game ready to play!');
});

// Get all the HTML elements we need
function getElements() {
    elements.instructions = document.getElementById('instructions');
    elements.gameArea = document.getElementById('game-area');
    elements.results = document.getElementById('results');
    elements.currentRound = document.getElementById('current-round');
    elements.currentScore = document.getElementById('current-score');
    elements.finalScore = document.getElementById('final-score');
    elements.scoreMessage = document.getElementById('score-message');
    elements.itemsContainer = document.getElementById('items-to-sort');
    elements.nextRoundBtn = document.getElementById('next-round');
    elements.feedback = document.getElementById('feedback');
    elements.feedbackText = document.getElementById('feedback-text');
    elements.startGameBtn = document.getElementById('start-game');
    elements.playAgainBtn = document.getElementById('play-again');
    elements.bins = document.querySelectorAll('.bin');
}

// Setup all button clicks and drag/drop events
function setupEventListeners() {
    // Button clicks
    elements.startGameBtn.addEventListener('click', startGame);
    elements.playAgainBtn.addEventListener('click', resetGame);
    elements.nextRoundBtn.addEventListener('click', nextRound);
    
    // Setup drag and drop for bins
    for (var i = 0; i < elements.bins.length; i++) {
        elements.bins[i].addEventListener('dragover', handleDragOver);
        elements.bins[i].addEventListener('drop', handleDrop);
        elements.bins[i].addEventListener('dragenter', handleDragEnter);
        elements.bins[i].addEventListener('dragleave', handleDragLeave);
    }
}

// Start the game
function startGame() {
    console.log('Starting game...');
    gameState.isGameActive = true;
    gameState.currentRound = 1;
    gameState.score = 0;
    
    // Hide instructions and show game area
    elements.instructions.classList.add('hidden');
    elements.gameArea.classList.remove('hidden');
    elements.results.classList.add('hidden');
    
    // Load first round
    loadRound(1);
    updateScore();
}

// Load items for a specific round
function loadRound(roundNumber) {
    console.log('Loading round ' + roundNumber);
    
    // Clear previous items
    elements.itemsContainer.innerHTML = '';
    
    // Get items for this round
    var roundItems = gameItems[roundNumber - 1];
    
    // Create item elements
    for (var i = 0; i < roundItems.length; i++) {
        createItemElement(roundItems[i]);
    }
    
    // Hide next round button
    elements.nextRoundBtn.classList.add('hidden');
}

// Create an item element that can be dragged
function createItemElement(item) {
    var itemElement = document.createElement('div');
    itemElement.className = 'item';
    itemElement.draggable = true;
    itemElement.setAttribute('data-item-id', item.id);
    itemElement.setAttribute('data-correct-bin', item.correctBin);
    
    itemElement.innerHTML = 
        '<div class="item-icon">' + item.icon + '</div>' +
        '<div class="item-name">' + item.name + '</div>';
    
    // Add drag event listeners
    itemElement.addEventListener('dragstart', handleDragStart);
    itemElement.addEventListener('dragend', handleDragEnd);
    
    // Add click for mobile devices
    itemElement.addEventListener('click', handleItemClick);
    
    elements.itemsContainer.appendChild(itemElement);
}

// Handle when user starts dragging an item
function handleDragStart(e) {
    console.log('Dragging item: ' + e.target.getAttribute('data-item-id'));
    e.target.classList.add('dragging');
    
    // Store data about what's being dragged
    var dragData = {
        itemId: e.target.getAttribute('data-item-id'),
        correctBin: e.target.getAttribute('data-correct-bin')
    };
    e.dataTransfer.setData('text/plain', JSON.stringify(dragData));
}

// Handle when user stops dragging
function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

// Mobile touch support - click to select item
var selectedItem = null;

function handleItemClick(e) {
    // Clear previous selections
    var allItems = document.querySelectorAll('.item');
    for (var i = 0; i < allItems.length; i++) {
        allItems[i].style.border = '3px solid #dee2e6';
    }
    
    // Select this item
    selectedItem = {
        element: e.currentTarget,
        itemId: e.currentTarget.getAttribute('data-item-id'),
        correctBin: e.currentTarget.getAttribute('data-correct-bin')
    };
    
    e.currentTarget.style.border = '3px solid #4CAF50';
    
    // Make bins clickable
    for (var i = 0; i < elements.bins.length; i++) {
        elements.bins[i].style.cursor = 'pointer';
        elements.bins[i].addEventListener('click', handleBinClick);
    }
}

// Handle bin click for mobile
function handleBinClick(e) {
    if (!selectedItem) return;
    
    var binType = e.currentTarget.getAttribute('data-bin-type');
    checkAnswer(selectedItem.itemId, selectedItem.correctBin, binType, selectedItem.element);
    
    // Clear selection
    selectedItem = null;
    for (var i = 0; i < elements.bins.length; i++) {
        elements.bins[i].style.cursor = 'default';
        elements.bins[i].removeEventListener('click', handleBinClick);
    }
}

// Handle drag over bin
function handleDragOver(e) {
    e.preventDefault(); // Allow drop
}

// Handle drag enter bin
function handleDragEnter(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

// Handle drag leave bin
function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

// Handle drop on bin
function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    try {
        var data = JSON.parse(e.dataTransfer.getData('text/plain'));
        var binType = e.currentTarget.getAttribute('data-bin-type');
        var draggedElement = document.querySelector('[data-item-id="' + data.itemId + '"]');
        
        checkAnswer(data.itemId, data.correctBin, binType, draggedElement);
    } catch (error) {
        console.log('Error handling drop:', error);
    }
}

// Check if the answer is correct
function checkAnswer(itemId, correctBin, selectedBin, itemElement) {
    console.log('Checking: item ' + itemId + ', correct: ' + correctBin + ', selected: ' + selectedBin);
    
    var isCorrect = correctBin === selectedBin;
    
    if (isCorrect) {
        handleCorrectAnswer(itemElement);
        gameState.score++;
    } else {
        handleIncorrectAnswer(itemElement, correctBin);
    }
    
    updateScore();
    
    // Check if round is complete after animation
    setTimeout(function() {
        checkRoundComplete();
    }, 2000);
}

// Handle correct answer
function handleCorrectAnswer(itemElement) {
    console.log('Correct answer!');
    
    // Visual feedback
    itemElement.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    itemElement.style.color = 'white';
    itemElement.style.transform = 'scale(1.1)';
    
    // Show feedback message
    showFeedback('Correct! Great job! 🎉', 'correct');
    
    // Remove item after animation
    setTimeout(function() {
        itemElement.style.transition = 'all 0.5s ease';
        itemElement.style.opacity = '0';
        itemElement.style.transform = 'scale(0)';
        setTimeout(function() {
            if (itemElement.parentNode) {
                itemElement.parentNode.removeChild(itemElement);
            }
        }, 500);
    }, 1000);
}

// Handle incorrect answer
function handleIncorrectAnswer(itemElement, correctBin) {
    console.log('Incorrect answer!');
    
    // Visual feedback
    itemElement.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
    itemElement.style.color = 'white';
    itemElement.style.animation = 'shake 0.5s ease-in-out';
    
    // Show feedback message with correct answer
    var binNames = {
        'recycling': 'Recycling',
        'compost': 'Compost', 
        'trash': 'Trash'
    };
    showFeedback('Oops! This should go in ' + binNames[correctBin] + ' ♻️', 'incorrect');
    
    // Reset item appearance
    setTimeout(function() {
        itemElement.style.background = '#f8f9fa';
        itemElement.style.color = '#333';
        itemElement.style.animation = '';
        itemElement.style.transform = 'scale(1)';
    }, 1500);
}

// Show feedback message
function showFeedback(message, type) {
    elements.feedbackText.textContent = message;
    elements.feedback.className = 'feedback ' + type;
    elements.feedback.classList.remove('hidden');
    
    setTimeout(function() {
        elements.feedback.classList.add('hidden');
    }, 2000);
}

// Check if current round is complete
function checkRoundComplete() {
    var remainingItems = document.querySelectorAll('.item');
    console.log('Items remaining: ' + remainingItems.length);
    
    if (remainingItems.length === 0) {
        console.log('Round ' + gameState.currentRound + ' complete!');
        
        if (gameState.currentRound < gameState.totalRounds) {
            console.log('Showing next round button...');
            elements.nextRoundBtn.classList.remove('hidden');
        } else {
            console.log('All rounds complete, ending game...');
            setTimeout(function() {
                endGame();
            }, 1000);
        }
    }
}

// Move to next round
function nextRound() {
    gameState.currentRound++;
    loadRound(gameState.currentRound);
    updateScore();
}

// End the game and show results
function endGame() {
    console.log('Game ended. Final score: ' + gameState.score);
    
    gameState.isGameActive = false;
    
    // Hide game area and show results
    elements.gameArea.classList.add('hidden');
    elements.results.classList.remove('hidden');
    
    // Update final score
    elements.finalScore.textContent = gameState.score;
    
    // Set score message based on performance
    var message = '';
    var percentage = (gameState.score / gameState.maxScore) * 100;
    
    if (percentage === 100) {
        message = '🏆 Perfect! You\'re a recycling champion!';
    } else if (percentage >= 80) {
        message = '🌟 Excellent work! You really know your recycling!';
    } else if (percentage >= 60) {
        message = '👍 Good job! Keep practicing to become a recycling expert!';
    } else {
        message = '💪 Keep learning! Every small step helps our planet!';
    }
    
    elements.scoreMessage.textContent = message;
}

// Reset game to start over
function resetGame() {
    console.log('Resetting game...');
    
    // Reset game state
    gameState.currentRound = 1;
    gameState.score = 0;
    gameState.isGameActive = false;
    
    // Show instructions
    elements.instructions.classList.remove('hidden');
    elements.gameArea.classList.add('hidden');
    elements.results.classList.add('hidden');
    
    // Clear any remaining items
    elements.itemsContainer.innerHTML = '';
    
    // Update display
    updateScore();
}

// Update score display
function updateScore() {
    elements.currentRound.textContent = gameState.currentRound;
    elements.currentScore.textContent = gameState.score;
}

// Log that game is loaded
console.log('BigGreen Recycling Game loaded successfully!');
