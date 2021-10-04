// const { useImperativeHandle } = require('react');

console.log('Lodash is loaded:', typeof _ !== 'undefined');
// player objects
var players = [
  {
    name: 'Rachael',
    hand: [

    ]
  },
  {
    name: 'Nori',
    hand: [

    ]
  },
  {
    name: 'Phoebe',
    hand: [

    ]
  },
  {
    name: 'Rob',
    hand: [

    ]
  }
];

// 52 card deck;

var suits = ['H', 'C', 'D', 'S'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var deck = [];

// Create the 52 card deck
for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
  for (let rankCounter = 0; rankCounter < ranks.length; rankCounter++) {
    deck.push({ rank: ranks[rankCounter], suit: suits[suitCounter] });
  }
}

// Shuffle the deck of cards (array) using lodash
var shuffledArray = _.shuffle(deck);

// Insert two cards into each players hand
for (let i = 0; i < players.length; i++) {
  var card1 = shuffledArray.pop();
  players[i].hand.push(card1);
  var card2 = shuffledArray.pop();
  players[i].hand.push(card2);
}

// Keep track of the highest score and the winner
var highest = 0;
var winner = null;

// Determine the winner by summing up the scores of their two cards
for (let i = 0; i < players.length; i++) {
  var score = 0;
  var hand = players[i].hand;
  for (let j = 0; j < hand.length; j++) {
    var card = hand[j];
    // Account for face cards (10 points) and aces (11 points)
    if (card.rank === 'J' || card.rank === 'Q' || card.rank === 'K') {
      score += 10;
    } else if (card.rank === 'A') {
      score += 11;
    } else {
      score += parseInt(card.rank);
    }
  }
  console.log('score of ' + players[i].name + ' is: ', score);
  // Determine winner and make sure to replace the highest with their score
  if (score > highest) {
    highest = score;
    winner = players[i];
  }
}

console.log(`winner is ${winner.name}`);
