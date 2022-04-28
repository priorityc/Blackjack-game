

//arrey
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';

// Display the message when user click the button
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById("card-el");

//create a function that return Random number betwean 1 and 13 
function getRandomCard () {
  let randomNumber= Math.floor(Math.random() * 13)+1
   if (randomNumber > 10) {
   return 10;
} else if (randomNumber === 1) {
  return 11;
}else{
  return randomNumber
}
}


function renderGame () {
  if (sum <= 20) {
  message="Do you want to draw new card?";
}else if (sum === 21) {
  message="Woo you've got a Blackjack";
  hasBlackjack = true;
} else {
  message=("You are out of the game.");
  isAlive = false;
}
messageEl.textContent = message;
sumEl.textContent = 'Sum:' + sum ;
//render out first card and second card
cardEl.textContent = 'Cards: '
for (let i =0; i< cards.length; i++) {
  cardEl.textContent+=cards[i] + ' ';
}
//render out all the cards we have
}

//create a new card function

function newCard () {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards)
  renderGame();
}

//newfunction start game
function startGame () {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard ,secondCard];
  sum = firstCard + secondCard;
 
renderGame ();
}


