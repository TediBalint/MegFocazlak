import Card from './card.js';
import CardData from './cardData.js';

const cards = Card.getCards(CardData);
const dobasBtn = document.querySelector('#dobasBtn');
let currentCard = new Card('0;0;bronze;argentina;psg;Assmann;st;12;12;6', false);

dobasBtn.addEventListener('click', () =>{
    const steps = (Math.random()*5)+1
    for (let i = 0; i < steps; i++) {

        
        currentCard.Move();
    }
})
