class MovementHandler{

    constructor(currCard, cards){
        this.cards = cards;
        this.currentCard = currCard;
        this.transitionEnd = this.transitionEnd.bind(this);
        this.transitionStart = this.transitionStart.bind(this);
        this.getNextCard = this.getNextCard.bind(this)
    }
    transitionEnd(){
        this.currentCard.card.removeEventListener('transitionend', this.transitionEnd);
        if(this.steps > 0){
            this.transitionStart();
        }
        else{
            if(this.getNextCard().isPlayer){
                this.currentCard.disableCurrent();
                this.currentCard = this.getNextCard();
                
                this.currentCard.makeCurrent();
            }
            else{
                for (const stat of Object.keys(this.getNextCard().statsPlus)) {
                    this.currentCard.stats[stat] += this.getNextCard().statsPlus[stat];
                }
                console.log(this.getNextCard());
                console.log(this.currentCard);
                this.currentCard.updateStats();
            }
            
        }
    } 
    getNextCard(){
        let nextCard;
        this.cards.forEach(elem => {
            if(elem.x == this.currentCard.x && elem.y == this.currentCard.y) {
                nextCard = elem;
            }
        });
        return nextCard;
    }
    transitionStart(){
        this.currentCard.Move();
        this.steps--;
        this.currentCard.card.addEventListener('transitionend', this.transitionEnd);
    }
    move(num){
        this.steps = num;
        this.transitionStart();
    }  

}
export default MovementHandler