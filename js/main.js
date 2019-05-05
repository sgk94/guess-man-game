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
//      name: 'Shawn Mendez',
//      age: 20,
//      img: 'images/mendez.png'
//  },
//  cFour: { 
//      name: 'Bruno Mars',
//      age: 33,
//      img: 'images/bruno.png'
//  },
//  cFive: {
//      name: 'Kelly Clarkson',
//      age: 37,
//      img: 'images/clarkson.png'
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

