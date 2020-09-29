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
