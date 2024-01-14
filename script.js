import Card from './card.js';
import CardData from './cardData.js';
import MovementHandler from './movementHandler.js';
import DiceThrow from './diceFuncs.js';

const cards = Card.getCards(CardData);

const dobasBtn = document.querySelector('#dobasBtn');

let startCard = new Card('-1;0;bronze;argentina;Aldosovi;Assmann;gk;23;23;63', false);
const movementHandler = new MovementHandler(startCard, cards)

dobasBtn.addEventListener('click', () => {DiceThrow().then(result =>{
    document.body.removeChild(document.querySelector('.throwContainer'))
    movementHandler.move(result);
})})