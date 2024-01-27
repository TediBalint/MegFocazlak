import Card from './card.js';
import CardData from './cardData.js';
import MovementHandler from './movementHandler.js';
import DiceThrow from './diceFuncs.js';

const cards = Card.getCards(CardData);
const dobasBtn = document.querySelector('#dobasBtn');

let startCard = new Card('-1;0;bronze;argentina;Aldosovi;Asmann;gk;23;23;63;1;0', false);
const movementHandler = new MovementHandler(startCard, cards)

dobasBtn.addEventListener('click', () => {DiceThrow().then(result =>{
    setTimeout(() => {
        document.body.removeChild(document.querySelector('.throwContainer'))
        movementHandler.move(result);
    }, 1500);
})})

movementHandler.gameWin();