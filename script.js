import Card from './card.js';
import CardData from './cardData.js';
import MovementHandler from './movementHandler.js';
const cards = Card.getCards(CardData);

const dobasBtn = document.querySelector('#dobasBtn');

let currentCard = new Card('0;0;bronze;argentina;psg;Assmann;st;12;12;6', false);
const movementHandler = new MovementHandler(currentCard)


dobasBtn.addEventListener('click', () => {movementHandler.move()})