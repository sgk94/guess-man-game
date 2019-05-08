/*----- constants -----*/ 
var celebs= [
 {
     name: 'Pharrell Williams',
     age: 46,
     img: 'images/pharrell.png'
 },
{
     name: 'Gwen Stefani',
     age: 49,
     img: 'images/stefani.png'
 },
 {
     name: 'Shawn Mendes',
     age: 20,
     img: 'images/smendes.png'
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
let card = document.createElement('img');
let input = document.getElementById('number');
let celebName = document.querySelector('h1');
let myArray = [];
let life = 10;
let guess;
let guessInt;
let currentAnswer;
let startInterval;

/*----- event listeners -----*/ 
document.getElementById('submit').addEventListener('click', handleSubmit);
document.getElementById('nextCard').addEventListener('click', handleNext);

/*----- functions -----*/
init();

//create something for explosion.png for when life is 0

function renderName() {
    if(turn === 0) {
        cName = celebs[0].name;
    } 
    else if(turn === 1) {
        cName = celebs[1].name;
    }
    else if(turn === 2) {
        cName = celebs[2].name;
    } 
    else if(turn === 3) {
        cName = celebs[3].name;
    } 
    else if(turn === 4) {
        cName = celebs[4].name;
    } 
    return renderName;
}

function checkAnswer() {
    if (guessInt === currentAnswer && turn < 5) {
        document.getElementById('alert').textContent = "Correct!";
        var nextInterval = setInterval(function() {
          renderNext();
          clearInterval(nextInterval);
        }, 2000);
    }
    else if (guessInt === currentAnswer && turn === 5) {
        document.getElementById('alert').textContent = "You survived!";
    } 
    else if (life === 1) {
        life--;
        document.getElementById('alert').textContent = "You blew up!";
        bomb.setAttribute('src', 'images/boom.png');
    } 
    else if (guessInt != currentAnswer) {
        life--;
        document.getElementById('alert').textContent = "Incorrect";
    } 
    else return checkAnswer;
}

function renderAnswer() {
    if(turn === 1) {
        currentAnswer = celebs[0].age;
    } 
    else if(turn === 2) {
        currentAnswer = celebs[1].age;
    } 
    else if(turn === 3) {
        currentAnswer = celebs[2].age;
    } 
    else if(turn === 4) {
        currentAnswer = celebs[3].age;
    } 
    else if(turn === 5) {
        currentAnswer = celebs[4].age;
    } 
    return renderAnswer;
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
        card.setAttribute('src', 'images/pharrell.png');
        deckCount.innerHTML = count;
        renderName();
        celebName.innerHTML = cName;
        turn++;
        count--;
        renderAnswer();
        document.getElementById('alert').textContent = "Guess their age";
    } 
    else if(turn === 1) {
        card.setAttribute('src', 'images/stefani.png');
        deckCount.innerHTML = count;
        renderName();
        celebName.innerHTML = cName;
        turn++;
        count--;
        renderAnswer();
        document.getElementById('alert').textContent = "Guess their age"; 
    } 
    else if(turn === 2) {
        card.setAttribute('src', 'images/smendes.png');
        deckCount.innerHTML = count;
        renderName();
        celebName.innerHTML = cName;
        turn++
        count--;
        renderAnswer();
        document.getElementById('alert').textContent = "Guess their age";
    } 
    else if(turn === 3) {
        card.setAttribute('src', 'images/bruno.png');
        deckCount.innerHTML = count;
        renderName();
        celebName.innerHTML = cName;
        turn++;
        count--;
        renderAnswer();
        document.getElementById('alert').textContent = "Guess their age";
    } 
    else if(turn === 4) {
        card.setAttribute('src', 'images/clarkson.png');
        deckCount.innerHTML = count;
        renderName();
        celebName.innerHTML = cName;
        turn++
        renderAnswer();
        document.getElementById('alert').textContent = "Guess their age"; 
    } 
    else return renderNext;
}

function init() {
    card.setAttribute('src', 'images/empty.png')
    document.getElementById('gameboard').append(card)
    document.getElementById('alert').textContent = "Press next to start"
    lifeCount.innerHTML = life;
    turn = 0;
    count = 5;
    deckCount.innerHTML = count;
    bomb.setAttribute('src', 'images/bomb.png')
    document.getElementById('bombBoard').append(bomb)
}
