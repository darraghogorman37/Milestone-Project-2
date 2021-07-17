console.log('Hello');

let cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let cardSuits = ['C', 'D', 'H', 'S'];

console.log(cardSuits);

let cards = [];

for(var i = 0; i < cardNumbers.length; i++)
{
     for(var j = 0; j < cardSuits.length; j++)
     {
        cards.push(cardNumbers[i] + cardSuits[j]);
     }
};

console.log(cards);



let images = new Array();

for(let i=0; i<52; i++) {
images.push([i]); 
images[i].src = 'assets/images/' + cards[i] + '.jpg'; 
}

console.log(images);

document.getElementById(test).innerHTML = <img src="images[0]"></img>
