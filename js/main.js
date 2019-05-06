/*----- constants -----*/ 
var celebs = {
 cOne: {
     name: 'Pharrell',
     age: 45,
     img: 'images/pharrell.png'
 },
 cTwo: {
     name: 'Gwen Stefani',
     age: 49,
     img: 'images/stefani.png'
 },
 cThree: {
     name: 'Shawn Mendez',
     age: 20,
     img: 'images/mendez.png'
 },
 cFour: { 
     name: 'Bruno Mars',
     age: 33,
     img: 'images/bruno.png'
 },
 cFive: {
     name: 'Kelly Clarkson',
     age: 37,
     img: 'images/clarkson.png'
 }
}

/*----- app's state (variables) -----*/ 
let stickman, gameboard, cardBack, deckCount;

/*----- cached element references -----*/ 
deckCount = document.querySelector('h3').textContent = ('5/5');
gameboard = document.getElementById('gameboard');
cardBack = document.createElement('img');
let cardOne = document.createElement('img')
let cardTwo = document.createElement('img')
let cardThree = document.createElement('img') 
let cardFour = document.createElement('img') 
let cardFive = document.createElement('img')

/*----- event listeners -----*/ 
document.getElementById('submit').addEventListener('click', handleSubmit);
document.getElementById('nextCard').addEventListener('click', handleNext);

/*----- functions -----*/
init();

function checkAnswer() {

}
//handle click of the image
function handleSubmit() {
}

function handleNext() {
    document.getElementById('gameboard').removeChild(cardBack);
    render();
    checkAnswer();
}

function render() {
for (i = 0; i < celebs.length; i++)
console.log(i);
   if(celebs[i] === 0) {
     cardOnek.setAttribute('src', 'images/pharrell.png')
     document.getElementById('gameboard').append(cardOne) 
    } else if(celebs[i] === 1) {
      cardTwo.setAttribute('src', 'images/stefani.png')
      document.getElementById('gameboard').append(cardTwo)
     } else if(celebs[i] === 2) {
       cardThree.setAttribute('src', 'images/mendez.png')
       document.getElementById('gameboard').append(cardThree)
      } else if(celebs[i] === 3) {
        cardFour.setAttribute('src', 'images/bruno.png')
        document.getElementById('gameboard').append(cardFour)
       } else if(celebs[i] === 4) {
         cardFive.setAttribute('src', 'images/clarkson.png')
         document.getElementById('gameboard').append(cardFive)
        } else return;
}

function init() {
    cardBack.setAttribute('src', 'images/empty.png')
    document.getElementById('gameboard').append(cardBack)
}

