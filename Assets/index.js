let message = ""
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let player = {
 name:"Abel",
 chips:145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":&" + player.chips

function deal() {
 isAlive = true
 let firstCard = randomCard()
 let secondCard = randomCard()
 cards = [firstCard, secondCard]
 sum = firstCard + secondCard
 renderGame()
}

function randomCard() {
 return Math.floor( Math.random() * 13 ) + 1
}

function renderGame() {
 hasBlackJack = false
 cardEl.textContent = "cards: "
 
 if (sum <= 20) {
  message = "do you want draw a new card?"
 }else if (sum === 21){
  message = "Winner"
  hasBlackJack = true
 }else {
  message = "you are out of the game"
  isAlive = false
 }
 
  
  for(i = 0; i < cards.length; i++){
  cardEl.textContent += cards[i] + " "
 }
 
 messageEl.textContent = message
 sumEl.textContent = "sum: " + sum
}


function newCard() {
 if ( isAlive === true && hasBlackJack === false ) {
 let card = randomCard()
 sum += card
 cards.push(card)
 renderGame()
 }
 else if (isAlive === false){
  message = "Game over"
  messageEl.textContent = message
 }
}
