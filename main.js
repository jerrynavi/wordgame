const container = document.querySelector("#words-container");

const letters = document.querySelector("#letters")

const playBtn = document.querySelector("#playBtn");

const checkBtn = document.querySelector("#checkBtn");

// var canPlay = false;

// Generated word
var word = "";

// User's guess
var userWord = "";

// Prompts when actions happen
var prompt = document.querySelector("#prompt");


// Prepares game. Generates a word.
function loadGame() {
  words = [
    "car",
    "dog",
    "run",
    "bow",
    "cue",
    "lay",
    "man",
    "doe"
  ];

  let randIndex = Math.floor(Math.random() * words.length);
  
  word = words[randIndex];

  prompt.innerHTML = "Word has been generated!";

  console.log(word);

  // canPlay = true;

}

// Add letter to `userWord` variable and empty box
function addToBox(value) {
  if (userWord.length === 3) {
    // do nothing
  }
  else {
    for (let index = 0; index < container.children.length; index++) {
      el = container.children[index];

      if (el.innerHTML === "") {
        el.innerHTML = value;
        break;
      }
    }
    userWord = userWord + '' + value + '';
  }
}

function checkWord() {
  if (userWord.toLowerCase() == word) {
    prompt.innerHTML = "Congratulations! You got it right!";
  }

  else {
    prompt.innerHTML = "Nah, chief. That's not it.";
  }
}

playBtn.onclick = function() {
  loadGame();
}

checkBtn.onclick = function() {
  checkWord();
}

document.querySelector("#letters").addEventListener("click", function(event) {
  addToBox(event.target.textContent);
},false);