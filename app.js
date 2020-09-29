// Get elements from document
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');

// Establish and set game resources

let missed = 0;
const phrases = [
  'Wu Tang Clan',
  'Mobb Deep',
  'A Tribe Called Quest',
  'Black Moon',
  'Group Home'
];

// Configure start game
resetBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Return random phrases and get them to display
const getRandomPhraseAsArray = (arr) => {
  let ranNum = Math.floor(Math.random() * arr.length);
  let ranPhrase = arr[ranNum].split("");
  return ranPhrase;
}

getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = arr => {
    for(i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
        if(arr[i] !== ' ') {
            li.classList.add('letter');
        } else {
            li.classList.add('space');
            }
        }
    }

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Check if letter is clicked = match to phrase, if not return null

// define function with paramater of button
const checkLetter = button => {
  // select all elements with class of letter
  let phraseListItems = ul.children;
  // loop over letters on the display
  for (i = 0; i < phraseListItems.length; i++) {
    const letter = phraseListItems[i].textContent.toLowerCase();
    // IF letters match button passed in
    if (button.textContent === letter) {
      //add class named show to the letters element
      phraseListItems[i].classList.add("show");
    } else {
      return null;
    }
  }
}

checkLetter(qwerty);

// Onscreen keyboard click addEventListener
qwerty.addEventListener('click', e => {
  // If click on button is a click off the buttons or already has the chosen class, clear them out
  if (e.target.tagName === 'BUTTON') {
    // Add the “chosen” class to the button that was pressed.
    e.target.classList.add('chosen');
    e.target.setAttribute('disabled', true);
    // Call the checkLetter function and store the results in a variable.
    const match = checkLetter(e.target);
    // If the checkLetter function does not find a letter, remove one of the heart images and increment the missed counter
    if (!match) {
      const attempts = document.querySelectorAll('.attempts');
      attempts[missed].style.display = 'none';
      missed++;
    }
    if(e.target) {
      return checkWin(e.target);
    }
  }
});
