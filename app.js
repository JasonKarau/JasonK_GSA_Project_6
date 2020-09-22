// Get elements from document
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const screenTitle = overlay.querySelector('h2');
const scoreBoard = document.getElementById('scoreboard');

// Establish and set game resources
let missed = 0;
let correct = 0;
const phrases = [
  'wu tang clan',
  'mobb deep',
  'a tribe called quest',
  'black moon',
  'group home'
];
// Configure start game
resetBtn.addEventListener('click', (e) => {
  if (e.target.textContent === 'Start Game') {
    overlay.classList.add('hidden');
  } else if (e.target.textContent === 'Play Again') {
    document.location.reload(true);
  }
});

// Get the phrases on display

// function addPhraseToDisplay (arr) {
//   function getRandomPhraseAsArray (arr) {
//     const random = Math.floor(Math.random() * arr.length );
//     const randomPhrase = arr[random];
//     const phraseArray = randomPhrase.split('');
//     return phraseArray;
//   };
//   const phraseArray = getRandomPhraseAsArray(phrases);
//   for (let i = 0; i < phraseArray.length; i++) {
//     const li = document.createElement('li');
//     const ul = document.createElement('ul');
//     li.textContent = phraseArray[i].toUpperCase();
//     ul.appendChild(li);
//     let phraseCharacter = phraseArray[i];
//     if (phraseCharacter === ' ') {
//       li.classList.add('space');
//     } else {
//       li.classList.add('letter');
//     }
//   }
// }
// addPhraseToDisplay(phrases);
// const phraseLI = phrase.querySelectorAll('li.letter');

// Display heart score

// Configure end game

// Check for win (if missed guesses is 5 then lose, if phrase list is = to length then win)

// Log guess calculations
