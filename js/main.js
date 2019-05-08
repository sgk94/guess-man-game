/*----- constants -----*/ 
var celebs= [
 {
     name: 'Pharrell Williams',
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
let gameboard, turn, count, bombBoard;
/*----- cached element references -----*/ 
gameboard = document.getElementById('gameboard');
bombBoard = document.getElementById('bombBoard');
let bomb = document.createElement('img');
let explosion = document.createElement('img');
let deckCount = document.querySelector('h3');
let lifeCount = document.getElementById('lifeCount');
let winAlert = document.getElementById('alert');
let cardBack = document.createElement('img');
let cardOne = document.createElement('img');
let cardTwo = document.createElement('img');
let cardThree = document.createElement('img'); 
let cardFour = document.createElement('img');
let cardFive = document.createElement('img');
let input = document.getElementById('number');
let celebName = document.querySelector('h1');
let myArray = [];
let life = 10;
let guess;
let guessInt;
let currentAnswer;

/*----- event listeners -----*/ 
document.getElementById('submit').addEventListener('click', handleSubmit);
document.getElementById('nextCard').addEventListener('click', handleNext);

/*----- functions -----*/
init();

//create something for explosion.png for when life is 0

function renderName() {
    if(turn === 0) {
    cName = celebs[0].name;
    } else if(turn === 1) {
      cName = celebs[1].name;
     } else if(turn === 2) {
       cName = celebs[2].name;
      } else if(turn === 3) {
        cName = celebs[3].name;
       } else if(turn === 4) {
         cName = celebs[4].name;
        } return renderName;
}

function checkAnswer() {
    if(guessInt === currentAnswer){
    document.getElementById('alert').textContent = "Correct!"
    } else life--
    console.log(life);
}

function renderAnswer() {
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
        } return renderAnswer;
}

function handleSubmit(evt) {
    evt.preventDefault()
    guess = input.value;
    guessInt = parseInt(guess,10);
    myArray.push(guessInt);
    console.log(myArray);
    renderAnswer();
    checkAnswer();
    lifeCount.innerHTML = life;
}

function handleNext() {
    renderNext();
}

function renderNext() {
    if(turn === 0) {
     count--;
     cardOne.setAttribute('src', 'images/pharrell.png');
     document.getElementById('gameboard').append(cardOne); 
     gameboard.replaceChild(cardOne, cardBack);
     deckCount.innerHTML = count;
     renderName();
     celebName.innerHTML = cName;
     turn++;
     count--;
     renderAnswer();
    } else if(turn === 1) {
      cardTwo.setAttribute('src', 'images/stefani.png');
      document.getElementById('gameboard').append(cardTwo);
      gameboard.replaceChild(cardTwo, cardOne);
      deckCount.innerHTML = count;
      renderName();
      celebName.innerHTML = cName;
      turn++;
      count--;
      renderAnswer();
     } else if(turn === 2) {
       cardThree.setAttribute('src', 'images/mendez.png');
       document.getElementById('gameboard').append(cardThree);
       gameboard.replaceChild(cardThree, cardTwo);
       deckCount.innerHTML = count;
       renderName();
       celebName.innerHTML = cName;
       turn++
       count--;
       renderAnswer();
      } else if(turn === 3) {
        cardFour.setAttribute('src', 'images/bruno.png');
        document.getElementById('gameboard').append(cardFour);
        gameboard.replaceChild(cardFour, cardThree);
        deckCount.innerHTML = count;
        renderName();
        celebName.innerHTML = cName;
        turn++;
        count--;
        renderAnswer();
       } else if(turn === 4) {
         cardFive.setAttribute('src', 'images/clarkson.png');
         document.getElementById('gameboard').append(cardFive);
         gameboard.replaceChild(cardFive, cardFour);
         deckCount.innerHTML = count;
         renderName();
         celebName.innerHTML = cName;
         turn++
         renderAnswer();
        } else alert("you survived!"); 
}

function init() {
    cardBack.setAttribute('src', 'images/empty.png')
    document.getElementById('gameboard').append(cardBack)
    document.getElementById('alert').textContent = "Press next to start"
    lifeCount.innerHTML = life;
    turn = 0;
    count = 5;
    deckCount.innerHTML = count;
    bomb.setAttribute('src', 'images/bomb.png')
    document.getElementById('bombBoard').append(bomb)
}
