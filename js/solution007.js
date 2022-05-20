//Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineASuit(card) {
    let suit = card[1]
    if(suit == '♣'){
      return 'clubs'
    } else if(suit == '♦'){
      return 'diamonds'
    } else if(suit == '♥'){
      return 'hearts'
    } else{
      return 'spades'
      
    }
  }