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

var playerSelectionOfCards = [];

// prints the array of the 52 cards, for testing only, TO BE DELETED LATER
function printAllCards() {
console.log(cards)};

printAllCards();

/* creates 52 "inner" arrays for each of the 52 cards within the single "outer" array named "images". 
Each of the 52 "inner" arrays contains the unique ordered array number (0-51) of the card within the "outer" array and an src value linking to the image of the respective card*/

let cardImages = new Array();

for(let i=0; i<52; i++) {
   let card = {
      cardNumber: i,
      cardImage: ""
   };
   card.cardImage = 'assets/images/' + cards[i] + '.jpg';
   cardImages.push(card); 
   
}

// prints the images array containing 52 "inner" arrays, each representing a card, for testing only, TO BE DELETED LATER
console.log(cardImages);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// creates a random card image and inserts it into each of the 5 container div elements

var cardsPicked = [];

pickRandomCard();
function pickRandomCard() {
   
   for (var i=1; i<6; i++) {
   
      

      // produces a random integer between 0 and 51
      let randomCard = Math.floor((Math.random())*52);
      console.log(randomCard);

      // Picks a random card
      var cardPicked = cardImages[randomCard];
      console.log(cardPicked);

      
      
      // Adds the image of the random card to the respective div container
      let z = document.createElement('img');
      let z1 = document.getElementById('container' + i).appendChild(z);
      let z2 = cardPicked.cardImage;
      z1.setAttribute('src', z2);

      displayCardsPickedDivs();
   
      cardsPicked.push(cardPicked);

      // Logs the array of 5 cards picked randomly   
      console.log(cardsPicked); 

      
      
   };

   // after time elapses, the cards picked from the deck disappear
   setTimeout(hideCardsPickedDivs, 10000000);

   

};



function hideCardsPickedDivs() {
   document.getElementById('container1').style.display = 'none';
   document.getElementById('container2').style.display = 'none';
   document.getElementById('container3').style.display = 'none';
   document.getElementById('container4').style.display = 'none';
   document.getElementById('container5').style.display = 'none';

   displayAllCards();
};






// all 52 cards in the deck appear for player selection

      function displayAllCards() {
         for (i=0; i<52; i++) {
            let j = cardImages[i].cardImage;
            let k = document.createElement('img');
            let l = document.getElementById('container6').appendChild(k);
            l.setAttribute('src', j);
            l.setAttribute('width', '100');
            l.setAttribute('class', 'readyforselection');
            l.setAttribute('data-cardnumber', i);
            }
            displayPlayersButtons();
   

         

      // on clicking, the player's selected cards are added to a new array playerSelectionOfCards
      

      $('.readyforselection').on('click', pushToPlayerSelectionOfCards);
      
      

      
      function pushToPlayerSelectionOfCards() {

         
         
         if (playerSelectionOfCards.length < 5) {
            let x = $(this).attr("data-cardnumber"); 
            playerSelectionOfCards.push(x);
            console.log(playerSelectionOfCards);
         }  else {
            alert('Too many cards selected');
            
         } 
      }

      $('#playerbutton').on('click', runComparison);

     
};

function displayCardsPickedDivs() {
   document.getElementById('container1').style.display = 'flex';
   document.getElementById('container2').style.display = 'flex';
   document.getElementById('container3').style.display = 'flex';
   document.getElementById('container4').style.display = 'flex';
   document.getElementById('container5').style.display = 'flex';
};



// empty the cardsPicked array

function emptyCardsPicked() {
cardsPicked.splice(0,5);
console.log(cardsPicked);
pickRandomCard();
};

// displays users buttons

function displayPlayersButtons() {
   let playerButton = document.createElement('button');
   document.getElementById('container6').appendChild(playerButton);
   playerButton.innerHTML='SUBMIT SELECTION';
   playerButton.setAttribute('id', 'playerbutton');
};

// compares playerSelectionOfCards versus cardsPicked on clicking "SUBMIT SELECTION" button

let cardNumbersFromCardsPicked = [];

function runComparison() {
   
   
   for (i=0; i<5; i++) {
      let x = cardsPicked[i].cardNumber;
      let y = x.toString();
      cardNumbersFromCardsPicked.push(y);
      
   };

   console.log(cardNumbersFromCardsPicked);
      console.log(playerSelectionOfCards);

   if (JSON.stringify(playerSelectionOfCards) === JSON.stringify(cardNumbersFromCardsPicked)) {
      alert("WELL DONE");
   } else {
      alert("SORRY");
   };

   clearArrays();

};

// clears all arrays to empty
function clearArrays() {
   cardsPicked = [];
   console.log(cardsPicked);
   playerSelectionOfCards = [];
   console.log(playerSelectionOfCards);
   cardNumbersFromCardsPicked = [];
   console.log(cardNumbersFromCardsPicked);

   clearImagesFromCardsPickedDivs();

};

// removes any existing images within the div containers 1-6
function clearImagesFromCardsPickedDivs() {
   for (i=1; i<6; i++) {
   let x = document.getElementById('container' + i);
   x.removeChild(x.childNodes[0]);
   };
   document.getElementById('container6').innerHTML='';

   pickRandomCard();
   
};







         



