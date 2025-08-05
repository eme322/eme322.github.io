// 🍉 Cool Watermelon Summer MadLibs
// This program creates a fun story using variables, numbers, and user input

// 1️⃣ Word variable (noun/adjective/verb)
let fruit = "watermelon"; // A noun

// 2️⃣ Numeric value
let slices = 8; // Number of slices in one watermelon

// 3️⃣ Calculated number (math with numbers)
let totalSlices = slices * 3; // If I buy 3 watermelons

// 4️⃣ True/False value
let isCold = true; // Is the watermelon cold?

// 5️⃣ User input (prompt)
let friendName = prompt("What's your friend's name?");

// 📝 Creating the story
// Using + to join (concatenate) the variables into sentences
let story = "One hot summer day, I bought " + totalSlices + " slices of " + fruit +
            ". My best friend " + friendName + " and I sat under a tree and ate them all. " +
            "Were they cold? " + isCold + "! Nothing beats cool " + fruit + " in the summer.";

// 📢 Output the story to the console
console.log(story);
