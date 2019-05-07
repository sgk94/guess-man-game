/*----- constants -----*/ 
var celebs= [
 {
     name: 'Pharrell',
     age: 45,
     img: 'images/pharrell.png'
 },
{
     name: 'Gwen Stefani',
     age: 49,
     img: 'images/stefani.png'
 },
 {
     name: 'Shawn Mendez',
     age: 20,
     img: 'images/mendez.png'
 },
 { 
     name: 'Bruno Mars',
     age: 33,
     img: 'images/bruno.png'
 },
 {
     name: 'Kelly Clarkson',
     age: 37,
     img: 'images/clarkson.png'
 }
];
/*----- app's state (variables) -----*/ 
let stickman, gameboard, deckCount, turn;
/*----- cached element references -----*/ 
deckCount = document.querySelector('h3').textContent = (5);
gameboard = document.getElementById('gameboard');
let cardBack = document.createElement('img');
let cardOne = document.createElement('img')
let cardTwo = document.createElement('img')
let cardThree = document.createElement('img') 
let cardFour = document.createElement('img') 
let cardFive = document.createElement('img')
let input = document.getElementById('number')
let myArray = []
let guess;
let guessInt;
let currentAnswer = 0;

/*----- event listeners -----*/ 
document.getElementById('submit').addEventListener('click', handleSubmit);
document.getElementById('nextCard').addEventListener('click', handleNext);

/*----- functions -----*/
init();

function checkAnswer() {
    if(myArray.indexOf(currentAnswer) === 0) {
        return checkAnswer;
    } else if (myArray.indexOf(currentAnswer) > -1) {
        alert( `match!`)
    } else return checkAnswer;
}

function renderAnswer() {
console.log('turn: ', turn);
   for (i = 0; i < celebs.length; i++) {
    if(turn === 1) {
    currentAnswer = celebs[0].age;
    } else if(turn === 2) {
      currentAnswer = celebs[1].age;
     } else if(turn === 3) {
         currentAnswer = celebs[2].age;
      } else if(turn === 4) {
          currentAnswer = celebs[3].age;
       } else if(turn === 5) {
           currentAnswer = celebs[4].age;
        } else break;
}
}

// handle click of the submit button

function handleSubmit(evt) {
 evt.preventDefault()
  guess = input.value;
   guessInt = parseInt(guess,10);
    // console.log(guessInt);
    myArray.push(guessInt);
    console.log(myArray);
    renderAnswer();
    checkAnswer();
    console.log(myArray.indexOf(currentAnswer))
}

function handleNext() {
    renderNext();
}
//Render number guesses
// function renderGuess() {
    
//     document.getElementById("guessboard").append(myArray);
//     if(myArray.length === 3) {
//         myArray = [];
//     };
//     guessboard.replaceChild(myArray, myArray);
    
// }

//Renders next image after clicking 'next' button
function renderNext() {
    if(turn === 0) {
     cardOne.setAttribute('src', 'images/pharrell.png');
     document.getElementById('gameboard').append(cardOne); 
     gameboard.replaceChild(cardOne, cardBack);
     renderAnswer();
     turn++;
    } else if(turn === 1) {
       cardTwo.setAttribute('src', 'images/stefani.png');
       document.getElementById('gameboard').append(cardTwo);
       gameboard.replaceChild(cardTwo, cardOne);
       renderAnswer();
       turn++;
      } else if(turn === 2) {
        cardThree.setAttribute('src', 'images/mendez.png');
        document.getElementById('gameboard').append(cardThree);
        gameboard.replaceChild(cardThree, cardTwo);
        renderAnswer();
        turn++
       } else if(turn === 3) {
         cardFour.setAttribute('src', 'images/bruno.png');
         document.getElementById('gameboard').append(cardFour);
         gameboard.replaceChild(cardFour, cardThree);
         renderAnswer();
         turn++
        } else if(turn === 4) {
          cardFive.setAttribute('src', 'images/clarkson.png');
          document.getElementById('gameboard').append(cardFive);
          gameboard.replaceChild(cardFive, cardFour);
          renderAnswer();
          turn++
         } else alert("you survived!"); 
}

function init() {
    cardBack.setAttribute('src', 'images/empty.png')
    document.getElementById('gameboard').append(cardBack)
    turn = 0;
}
