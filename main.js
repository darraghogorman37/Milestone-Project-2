// set initial time for displaying the 5 cards (timeOut) picked from deck to 10s
var timeOut = 10000;

// set the intial diffulty level (difficultyLevel) to Very Easy

var difficultyLevel = 'Very Easy'

// set the initial player's score to 0
var playerScore = 0;

// set the round number of the current game
var roundNumber = playerScore + 1;

// set the number of rounds to go until completion
var roundsUntilCompletion = 8;

// define scoreSpan
var scoreSpan = document.getElementById('container10');

// displays the current difficulty level

displayInstructions();

function displayInstructions() {
   scoreSpan.innerHTML = '<p>Start playing by clicking on the cards below to fill the placeholders above. When you are happy with your selection click SUBMIT SELECTION</p>';

   setTimeout(returnToCurrentScore, 20000);

}


/*scoreSpan.innerHTML = '<span><p>Score: ' + playerScore + '<br>Current Difficulty Level: ' + difficultyLevel + '</p></span>' +

                     '<span><p>Round Number: ' + roundNumber + '<br>Rounds Until Completion: ' + roundsUntilCompletion + '</p></span>';*/
                        


/*$('#instructions-button').on('click', displayInstructions);

function displayInstructions() {
   scoreSpan.innerHTML = '<p>Click On Cards Below to Fill Your Selection Above</p>'

}*/

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

// prints the array of the 52 cards
function printAllCards() {
console.log(cards)};

printAllCards();

/* creates 52 objects for each of the 52 cards within the single "outer" array named "images". 
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

// prints the images array containing 52 "inner" arrays, each representing a card
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
   
   console.log(timeOut);
   setTimeout(hideCardsPickedDivs, timeOut);

};


// hides the cards from the deck

function hideCardsPickedDivs() {
   document.getElementById('container1-1').style.display = 'none';
   document.getElementById('container1-2').style.display = 'none';
   document.getElementById('container1-3').style.display = 'none';
   document.getElementById('container1-4').style.display = 'none';
   document.getElementById('container1-5').style.display = 'none';

   loadUserInterface();
};


// all 52 cards in the deck appear for player selection, with player buttons and card placeholders

function loadUserInterface() {

   document.getElementById('container9').style.display = 'flex'; // player interface area

   document.getElementById('container8').style.display = 'flex'; // <div> for placholders
   
   // creates SUBMIT button
   let playerSubmitButton = document.createElement('button');
   document.getElementById('container6').appendChild(playerSubmitButton);
   playerSubmitButton.innerHTML='SUBMIT SELECTION';
   playerSubmitButton.setAttribute('id', 'player-submit-button');
   
   // creates REMOVE button
   let playerRemoveButton = document.createElement('button');
   document.getElementById('container6').appendChild(playerRemoveButton);
   playerRemoveButton.innerHTML='REMOVE';
   playerRemoveButton.setAttribute('id', 'player-remove-button');

   // creates CLEAR ALL button
   var playerClearAllButton = document.createElement('button');
   document.getElementById('container6').appendChild(playerClearAllButton);
   playerClearAllButton.innerHTML='CLEAR ALL';
   playerClearAllButton.setAttribute('id', 'player-clearall-button');
     
   // creates and displays images of all 52 cards      
   for (i=0; i<52; i++) {

      let j = cardImages[i].cardImage;
      let k = document.createElement('img');
      let l = document.getElementById('container7').appendChild(k);
      l.setAttribute('src', j);
      l.setAttribute('class', 'readyforselection');
      l.setAttribute('data-cardnumber', i);
   };

   $('.readyforselection').on('click', pushToPlayerSelectionOfCards); // on clicking, the player's selected cards are added to a new array playerSelectionOfCards

   // places images in placeholders upon clicking by the player
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
            alertTooManyCards (); // alert player if he/she attempts to load too many cards into the placeholders
         }   

   }

   // if player clicks submit, runs a comparison between his selection and the randomly generated selection
   $('#player-submit-button').on('click', checkPlayerSelectionOfCards);

      function checkPlayerSelectionOfCards() {   
   
         if (playerSelectionOfCards.length === 5) {
            runComparison();
         } else {
            alertTooFewCards (); // alerts player if 5 cards have not been picked and tries to submit
         };
      };

   // removes all cards selected by the player from their placeholders   
   $('#player-clearall-button').on('click', clearAll);

      function clearAll () {
         playerSelectionOfCards = [];
         console.log(playerSelectionOfCards);

         for (i=1; i<6; i++) {

            f2 = document.getElementById('span-selection-' + i);
            f2.innerHTML='';

         }

      }

   // removes the last card selected by the player from its placeholder   
   $('#player-remove-button').on('click', removeLastCardAdded);
         
      function removeLastCardAdded() {
            
         let f1 = playerSelectionOfCards.length;
         let f2 = document.getElementById('span-selection-' + f1);
         f2.removeChild(f2.childNodes[0]);
            
         playerSelectionOfCards.pop();
         console.log(playerSelectionOfCards);
         }

}
   
// displays the randomly generated 5 cards
function displayCardsPickedDivs() {
   document.getElementById('container1-1').style.display = 'flex';
   document.getElementById('container1-2').style.display = 'flex';
   document.getElementById('container1-3').style.display = 'flex';
   document.getElementById('container1-4').style.display = 'flex';
   document.getElementById('container1-5').style.display = 'flex';
};


// empty the cardsPicked array (array for randomly generated 5 cards)
function emptyCardsPicked() {
cardsPicked.splice(0,5);
console.log(cardsPicked);
pickRandomCard();
};

/* displays player's buttons
function displayPlayersButtons() {

};*/

// compares playerSelectionOfCards versus cardsPicked on clicking "SUBMIT SELECTION" button

let cardNumbersFromCardsPicked = []; // set to an empty array initially. Takes a number 0-51 from the cardsPicked array

function runComparison() { // runs a comparison between the players selected cards and the randomly picked cards
   
   for (i=0; i<5; i++) {
      let x = cardsPicked[i].cardNumber;
      let y = x.toString();
      cardNumbersFromCardsPicked.push(y);
      
   };

   console.log(cardNumbersFromCardsPicked);
      console.log(playerSelectionOfCards);

   if (JSON.stringify(playerSelectionOfCards) === JSON.stringify(cardNumbersFromCardsPicked)) {
      

      // add one to the player's score
      playerScore = playerScore + 1;
      console.log(playerScore);

      // take 999 from the value of timeOut
      timeOut = timeOut - 999;
      console.log(timeOut);

      // compute the new difficultyLevel

      if (timeOut <= 10000 && timeOut > 9000) {
         difficultyLevel = 'Very Easy';
       
      } else if (timeOut <= 9000 && timeOut > 8000) {
         difficultyLevel = 'Easy';

      } else if (timeOut <= 8000 && timeOut > 6500) {
      difficultyLevel = 'Average';

      } else if (timeOut <= 6500 && timeOut > 4500) {
      difficultyLevel = 'Hard';

      } else if (timeOut <= 4500) {
      difficultyLevel = 'Very Hard';
      }

      // add one to the Round Number 
      roundNumber = roundNumber + 1;

      // take one from Rounds Until Completion 
      roundsUntilCompletion = roundsUntilCompletion - 1;
      
      console.log(timeOut);
      console.log(difficultyLevel);
      console.log(roundsUntilCompletion);

      displayCorrectAnswer ();


   } else {
      displayIncorrectAnswer ();
      playerScore = 0;
      difficultyLevel = 'Very Easy';
      roundNumber = 1;
      roundsUntilCompletion = 8;
      console.log(playerScore);
      console.log(difficultyLevel);
      
   };

   clearArrays();

};

// clears all arrays to empty
function clearArrays() {

   console.log(roundsUntilCompletion);
   
   setTimeout (innerClearArrays, 3000);

   function innerClearArrays () {
   cardsPicked = [];
   console.log(cardsPicked);
   playerSelectionOfCards = [];
   console.log(playerSelectionOfCards);
   cardNumbersFromCardsPicked = [];
   console.log(cardNumbersFromCardsPicked);
   returnToCurrentScore ();

   clearImagesFromCardsPickedDivs();
   }
};

// removes any existing images within the div containers 1-5, 6, 7 + 8 and removes the buttons
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

   console.log(roundsUntilCompletion);  
   pickRandomCard();
   
}

function displayCorrectAnswer () {

      console.log(roundsUntilCompletion);
      

      if (roundsUntilCompletion === 0) {
         displayGameCompletionMsg ();
      } else { scoreSpan.innerHTML ='<p>WELL DONE!!!</p>';
      };

   }


function displayIncorrectAnswer() {

      scoreSpan.innerHTML ='<p>Aw...tough luck, try again!</p>';
      
   }

function alertTooManyCards () {
   scoreSpan.innerHTML = '<p>5 cards have already been selected. Use CLEAR ALL or REMOVE if neccessary</p>';

   setTimeout (returnToCurrentScore, 3000);
}

function alertTooFewCards () {
   scoreSpan.innerHTML = '<p>You must select 5 cards for submission</p>';

   setTimeout (returnToCurrentScore, 3000);
}

function returnToCurrentScore () {
   scoreSpan.innerHTML = '<span><p>Score: ' + playerScore + '<br>Current Difficulty Level: ' + difficultyLevel + '</p></span>' +

                        '<span><p>Round Number: ' + roundNumber + '<br>Rounds Until Completion: ' + roundsUntilCompletion + '</p></span>';
}

function displayGameCompletionMsg () {
   
   scoreSpan.innerHTML = '<p>CONGRATULATIONS!! YOU HAVE COMPLETED THE 5 CARD MEMORY CHALLENGE!!</p>';

   returnPlayerVariablesToStart ();
}

function returnPlayerVariablesToStart () {
   playerScore = 0;
   difficultyLevel = 'Very Easy';
   roundNumber = 0;
   roundsUntilCompletion = 8;
}










         



