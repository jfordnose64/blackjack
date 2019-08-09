// create deck
// randomize deck
// deal deck
// add to dealer and player
// total cards
// deal 2 cards to player
// deal 2 cards to dealer
// show only 1 of dealers cards
// accept hit/stay
// hit = deal another card
// then

let deck = []
let dealerHand = []
let playerHand = []

class Card {
  constructor(rank, suit, value) {
    this.rank = rank
    this.suit = suit
  }
}

const state = {
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  ranks: [
    {
      name: 'ace',
      value: 11
    },
    {
      name: '2',
      value: 2
    },
    {
      name: '3',
      value: 3
    },
    {
      name: '4',
      value: 4
    },
    {
      name: '5',
      value: 5
    },
    {
      name: '6',
      value: 6
    },
    {
      name: '7',
      value: 7
    },
    {
      name: '8',
      value: 8
    },
    {
      name: '9',
      value: 9
    },
    {
      name: '10',
      value: 10
    },
    {
      name: 'jack',
      value: 10
    },
    {
      name: 'queen',
      value: 10
    },
    {
      name: 'king',
      value: 10
    }
  ]
}

for (let i = 0; i < state.suits.length; i++) {
  const suit = state.suits[i]
  for (let j = 0; j < state.ranks.length; j++) {
    deck.push(new Card(state.ranks[j], suit))
  }
}

//   at this point state is never used again until shuffle deck is the man now

//  console.log(deck)

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

let dealCard = () => {}

deck = shuffle(deck)
// console.log(deck)

for (let i = 0; i < 2; i++) {
  dealerHand.push(deck.splice(Math.floor(Math.random() * deck.length), 1))
}

for (let i = 0; i < 2; i++) {
  playerHand.push(deck.splice(Math.floor(Math.random() * deck.length), 1))
}

//  Total functions
//  loop over the hand
let playerTotal = 0
for (let i = 0; i < playerHand.length; i++) {
  //  get the card at index I
  const card = playerHand[i]
  // const rank = card.rank

  //  deconstruct the card class to get the rank value
  const cardValue = Object.card.ranks.value

  playerTotal += cardValue
}

console.log(playerTotal)

console.log(playerTotal)

console.log(dealerHand)

console.log(playerHand)

console.log(deck)

const main = () => {}

document.addEventListener('DOMContentLoaded', main)
