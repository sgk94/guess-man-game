/*----- constants -----*/ 
var celebs= {
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
};

console.log(celebs.cOne);

/*----- app's state (variables) -----*/ 
let stickman, gameboard, cardBack, deckCount, turn;

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
// document.getElementById('submit').addEventListener('click', handleSubmit);
document.getElementById('nextCard').addEventListener('click', handleNext);

/*----- functions -----*/
init();

// function checkAnswer() {

// }
//handle click of the image
// function handleSubmit() {
// }

function handleNext() {
    // document.getElementById('gameboard').removeChild(cardBack);
    render();
    // checkAnswer();
}
//Figure out a way to loop MAPS
function render() {
   if(turn === 0) {
     cardOne.setAttribute('src', 'images/pharrell.png');
     document.getElementById('gameboard').append(cardOne); 
     gameboard.replaceChild(cardOne, cardBack);
     turn++;
    } else if(turn === 1) {
      cardTwo.setAttribute('src', 'images/stefani.png');
      document.getElementById('gameboard').append(cardTwo);
      gameboard.replaceChild(cardTwo, cardOne);
      turn++;
    }  else if(turn === 2) {
       cardThree.setAttribute('src', 'images/mendez.png');
       document.getElementById('gameboard').append(cardThree);
       gameboard.replaceChild(cardThree, cardTwo);
       turn++
    }   else if(turn === 3) {
        cardFour.setAttribute('src', 'images/bruno.png');
        document.getElementById('gameboard').append(cardFour);
        gameboard.replaceChild(cardFour, cardThree);
        turn++
    }    else if(turn === 4) {
         cardFive.setAttribute('src', 'images/clarkson.png');
         document.getElementById('gameboard').append(cardFive);
         gameboard.replaceChild(cardFive, cardFour);
         turn++
        } else alert("you survived!"); 
}


function init() {
    cardBack.setAttribute('src', 'images/empty.png')
    document.getElementById('gameboard').append(cardBack)
    turn = 0;
}