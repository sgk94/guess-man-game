/*----- constants -----*/ 
// var celebs = {
//  cOne: {
//      name: 'Pharrell',
//      age: 45,
//      img: 'images/pharrell.png'
//  },
//  cTwo: {
//      name: 'Gwen Stefani'
//      age: 49,
//      img: 'images/stefani.png'
//  },
//  cThree: {
//      name:,
//      age:,
//      img:
//  },
//  cFour: {
//      name:,
//      age:,
//      img:
//  },
//  cFive: {
//      name:,
//      age:,
//      img:
//  }
// }


/*----- app's state (variables) -----*/ 
let stickman, gameboard, cardBack;



/*----- cached element references -----*/ 
var cardInPlay



/*----- event listeners -----*/ 



/*----- functions -----*/
init();

// function render() {

// }



function init() {
    cardBack = document.createElement('img')
    cardBack.setAttribute('src', 'images/empty.png')

    gameboard = document.getElementById('gameboard')
    document.getElementById('gameboard').append(cardBack)
}

