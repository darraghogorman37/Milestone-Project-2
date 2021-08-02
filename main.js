// set the initial player's score to 0
var playerScore = 0;
console.log(typeof(playerScore));
var scoreSpan = document.getElementById('container10');
scoreSpan.innerHTML = '<p>Score:' + playerScore + '<br>Current Difficulty Level:</p>';

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
   card.cardImage = 'assets/images1/' + cards[i] + '.jpg';
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
      let z1 = document.getElementById('container1-' + i).appendChild(z);
      let z2 = cardPicked.cardImage;
      z1.setAttribute('src', z2);

      displayCardsPickedDivs();
   
      cardsPicked.push(cardPicked);

      // Logs the array of 5 cards picked randomly   
      console.log(cardsPicked); 

      
      
   };

   // after time elapses, the cards picked from the deck disappear
   setTimeout(hideCardsPickedDivs, 5000);

   

};



function hideCardsPickedDivs() {
   document.getElementById('container1-1').style.display = 'none';
   document.getElementById('container1-2').style.display = 'none';
   document.getElementById('container1-3').style.display = 'none';
   document.getElementById('container1-4').style.display = 'none';
   document.getElementById('container1-5').style.display = 'none';

   loadUserInterface();
};


// all 52 cards in the deck appear for player selection

function loadUserInterface() {

   document.getElementById('container9').style.display = 'flex';

   document.getElementById('container8').style.display = 'flex';
   
   let playerSubmitButton = document.createElement('button');
   document.getElementById('container6').appendChild(playerSubmitButton);
   playerSubmitButton.innerHTML='SUBMIT SELECTION';
   playerSubmitButton.setAttribute('id', 'player-submit-button');
   /*document.getElementById('player-submit-button').style.fontSize = '10px';*/
   
   let playerRemoveButton = document.createElement('button');
   document.getElementById('container6').appendChild(playerRemoveButton);
   playerRemoveButton.innerHTML='REMOVE';
   playerRemoveButton.setAttribute('id', 'player-remove-button');
   /*document.getElementById('player-remove-button').style.fontSize = '10px';*/

   var playerClearAllButton = document.createElement('button');
   document.getElementById('container6').appendChild(playerClearAllButton);
   playerClearAllButton.innerHTML='CLEAR ALL';
   playerClearAllButton.setAttribute('id', 'player-clearall-button');
   /*document.getElementById('player-clearall-button').style.fontSize = '10px';*/  
         
   for (i=0; i<52; i++) {

      let j = cardImages[i].cardImage;
      let k = document.createElement('img');
      let l = document.getElementById('container7').appendChild(k);
      l.setAttribute('src', j);
      l.setAttribute('class', 'readyforselection');
      l.setAttribute('data-cardnumber', i);
   };

   $('.readyforselection').on('click', pushToPlayerSelectionOfCards); // on clicking, the player's selected cards are added to a new array playerSelectionOfCards

   function pushToPlayerSelectionOfCards() {

      if (playerSelectionOfCards.length < 5) {
            
         let x = $(this).attr("data-cardnumber"); 
         playerSelectionOfCards.push(x);
         console.log(playerSelectionOfCards);

            
         let y1 = cardImages[x].cardImage;
         console.log(y1);
         console.log(typeof y1);
         
         let y3 = document.createElement('img');
         let i = playerSelectionOfCards.length;
         console.log(i);

         let y2 = document.getElementById('span-selection-' + i);
         console.log(y2);

         let y4 = y2.appendChild(y3);
         y4.setAttribute('src', y1);
         y4.setAttribute('id', 'selected-card');

         

      } else {
            alert('Too many cards selected'); 
         }   

   }

   $('#player-submit-button').on('click', checkPlayerSelectionOfCards);

      function checkPlayerSelectionOfCards() {   
   
         if (playerSelectionOfCards.length === 5) {
            runComparison();
         } else {
            alert('You must select 5 cards');
         };
      };

   $('#player-clearall-button').on('click', clearAll);

      function clearAll () {
         playerSelectionOfCards = [];
         console.log(playerSelectionOfCards);

         for (i=1; i<6; i++) {

            f2 = document.getElementById('span-selection-' + i);
            f2.innerHTML='';

         }

      }

   $('#player-remove-button').on('click', removeLastCardAdded);
         
      function removeLastCardAdded() {
            
         let f1 = playerSelectionOfCards.length;
         let f2 = document.getElementById('span-selection-' + f1);
         f2.removeChild(f2.childNodes[0]);
            
         playerSelectionOfCards.pop();
         console.log(playerSelectionOfCards);
         }

}
   
         



function displayCardsPickedDivs() {
   document.getElementById('container1-1').style.display = 'flex';
   document.getElementById('container1-2').style.display = 'flex';
   document.getElementById('container1-3').style.display = 'flex';
   document.getElementById('container1-4').style.display = 'flex';
   document.getElementById('container1-5').style.display = 'flex';
};


// empty the cardsPicked array

function emptyCardsPicked() {
cardsPicked.splice(0,5);
console.log(cardsPicked);
pickRandomCard();
};

// displays player's buttons

function displayPlayersButtons() {

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
      playerScore = playerScore + 1;
      console.log(playerScore);
      scoreSpan.innerHTML = '<p>Score:' + playerScore + '<br>Current Difficulty Level:</p>';
   } else {
      alert("SORRY");
      playerScore = 0;
      console.log(playerScore);
      scoreSpan.innerHTML = '<p>' + playerScore + '</p>';
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

// removes any existing images within the div containers 1-5, 7 + 8 and hides the buttons
function clearImagesFromCardsPickedDivs() {
   for (i=1; i<6; i++) {
   let x = document.getElementById('container1-' + i);
   x.removeChild(x.childNodes[0]);
   };
   
   document.getElementById('container7').innerHTML='';

   for (i=1; i<6; i++) {

   document.getElementById('span-selection-' + i).innerHTML='';

   }

   y = document.getElementById('container6').innerHTML='';
   
   document.getElementById('container8').style.display = 'none';

   pickRandomCard();
   
};







         



