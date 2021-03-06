/*----- constants -----*/ 
const buzzer = new Audio('http://freesound.org/data/previews/164/164090_2975503-lq.mp3')
const matchSound = new Audio('http://freesound.org/data/previews/448/448274_8282364-lq.mp3')
const happy = new Audio('audio/happy.mp3');
const stefani = new Audio ('audio/stefani.mp3');
const mendes = new Audio ('audio/mendes.mp3');
const brunomagic = new Audio ('audio/24kmagic.mp3');
const puth = new Audio ('audio/puth.mp3');
const bombdefused = new Audio ('audio/bombdefused.mp3');
const kidsyay = new Audio ('audio/kidsyay.mp3');
const explosionSound = new Audio ('audio/explosion.mp3');
const boo = new Audio ('audio/boo.mp3');

const celebs = [
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
     name: 'Charlie Puth',
     age: 27,
     img: 'images/puth.png'
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
let life;
let restartlife = life;
let guess;
let guessInt;
let currentAnswer;
let startInterval;

/*----- event listeners -----*/ 
document.getElementById('submit').addEventListener('click', handleSubmit);
document.getElementById('nextCard').addEventListener('click', handleNext);
document.getElementById('restart').addEventListener('click', restartHandler);

/*----- functions -----*/
init();

function restartHandler() {
    init();
    document.querySelector('form').style.display = "block";
    document.getElementById('nextCard').style.display = "block";
    document.getElementById('restart').style.display = "none";
   document.body.querySelector('h1').style.display = "block";
}

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
    document.getElementById('number').value = "";
    if (guessInt === currentAnswer && turn < 5) {
        matchSound.play();
        document.getElementById('alert').textContent = "Correct!";
        var nextInterval = setInterval(function() {
          renderNext();
          clearInterval(nextInterval);
        }, 1000);
    }
    else if (guessInt === currentAnswer && turn === 5) {
        puth.pause();
        document.getElementById('alert').textContent = "You defused the bomb!";
        celebName.style.display = "none";
        card.setAttribute('src', 'images/thumbsup.jpg');
        bombdefused.volume = .7;
        bombdefused.play();
        var celebration = setInterval(function() {
        kidsyay.play();
        clearInterval(celebration);
        }, 2000);
        document.querySelector('form').style.display = "none";  
        document.getElementById('nextCard').style.display = "none";
        document.getElementById('restart').style.display = "block";
    } 
    else if (life === 0) {
        puth.pause();
        brunomagic.pause();
        mendes.pause();
        happy.pause();
        stefani.pause();
        explosionSound.play();
        var booCrowd = setInterval(function() {
        boo.play();
        clearInterval(booCrowd);
        }, 2000);
        document.getElementById('alert').textContent = "You blew up!";
        celebName.style.display = "none";
        card.setAttribute('src', 'images/thumbsdown.jpg');
        bomb.setAttribute('src', 'images/boom.png');
        document.querySelector('form').style.display = "none";  
        document.getElementById('nextCard').style.display = "none";
        document.getElementById('restart').style.display = "block";
    } 
    else if (guessInt > currentAnswer) {
        life--;
        buzzer.volume = .8;
        buzzer.play();
        document.getElementById('alert').textContent = "Incorrect, they are younger";
        var ageInterval = setInterval(function() {
          document.getElementById('alert').textContent = "Guess their age";
          clearInterval(ageInterval);
        }, 1000);
        
    } 
    else if (guessInt < currentAnswer) {
        life--;
        buzzer.volume = .8;
        buzzer.play();
        document.getElementById('alert').textContent = "Incorrect, they are older"
        var ageInterval = setInterval(function() {
          document.getElementById('alert').textContent = "Guess their age";
          clearInterval(ageInterval);
        }, 1000);
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
        happy.volume = .2;
        happy.play();
        deckCount.innerHTML = count;
        renderName();
        celebName.innerHTML = cName;
        turn++;
        count--;
        renderAnswer();
        document.getElementById('alert').textContent = "Guess their age";
    } 
    else if(turn === 1) {
        happy.pause();
        card.setAttribute('src', 'images/stefani.png');
        stefani.volume = .2;
        stefani.play();
        deckCount.innerHTML = count;
        renderName();
        celebName.innerHTML = cName;
        turn++;
        count--;
        renderAnswer();
        document.getElementById('alert').textContent = "Guess their age"; 
    } 
    else if(turn === 2) {
        stefani.pause();
        card.setAttribute('src', 'images/smendes.png');
        mendes.volume = .2;
        mendes.play();
        deckCount.innerHTML = count;
        renderName();
        celebName.innerHTML = cName;
        turn++
        count--;
        renderAnswer();
        document.getElementById('alert').textContent = "Guess their age";
    } 
    else if(turn === 3) {
        mendes.pause();
        card.setAttribute('src', 'images/bruno.png');
        brunomagic.volume = .2;
        brunomagic.play();
        deckCount.innerHTML = count;
        renderName();
        celebName.innerHTML = cName;
        turn++;
        count--;
        renderAnswer();
        document.getElementById('alert').textContent = "Guess their age";
    } 
    else if(turn === 4) {
        brunomagic.pause();
        card.setAttribute('src', 'images/puth.png');
        puth.volume = .2;
        puth.play();
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
    card.setAttribute('src', 'images/empty.png');
    document.getElementById('gameboard').append(card);
    document.getElementById('alert').textContent = "Press Skip to start";
    turn = 0;
    life = 10;
    count = 5;
    lifeCount.innerHTML = life;
    deckCount.innerHTML = count;
    bomb.setAttribute('src', 'images/bomb.png');
    document.getElementById('bombBoard').append(bomb);
    celebName.innerHTML = "Singers";
}
