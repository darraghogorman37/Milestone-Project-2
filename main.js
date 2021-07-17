// An array of the numbers component of a standard 52 pack of cards
let cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// An array of the suits component of a standard 52 pack of cards ('C'=clubs, 'D'=diamonds, 'H'=hearts, 'S'=spades)
let cardSuits = ['C', 'D', 'H', 'S'];

// A function which outputs an array of the 52 card types by combining the above 2 arrays
let cards = [];

for(var i = 0; i < cardNumbers.length; i++)
{
     for(var j = 0; j < cardSuits.length; j++)
     {
        cards.push(cardNumbers[i] + cardSuits[j]);
     }
};

// prints the array of the 52 cards
console.log(cards);

/* creates 52 "inner" arrays for each of the 52 cards within the single "outer" array named "images". 
Each of the 52 "inner" arrays contains the unique ordered array number (0-51) of the card within the "outer" array and an src value linking to the image of the respective card*/

let images = new Array();

for(let i=0; i<52; i++) {
images.push([i]); 
images[i].src = 'assets/images/' + cards[i] + '.jpg'; 
}

// prints the images array containing 52 "inner" arrays, each representing a card
console.log(images);


// A function which produces a random integer between 0 and 51
let randomcard = Math.floor((Math.random())*52);
console.log(randomcard);


// creates a random card image and inserts it into one of the container div elements
var img = document.createElement('img');
 img.alt = "Alternative text required";
 img.src = images[randomcard].src;
 document.getElementById('test2').appendChild(img);




