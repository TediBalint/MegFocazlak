class MovementHandler{

    constructor(currCard){
        this.currentCard = currCard;
        this.transitionEnd = this.transitionEnd.bind(this);
        this.transitionStart = this.transitionStart.bind(this);
    }
    transitionEnd(){
        this.currentCard.card.removeEventListener('transitionend', this.transitionEnd);
        if(this.steps > 0){
            this.transitionStart();
        }
    } 
    transitionStart(){
        this.currentCard.Move();
        this.steps--;
        this.currentCard.card.addEventListener('transitionend', this.transitionEnd);
    }
    move(){
        this.steps = Math.floor(Math.random()*5)+1;
        this.transitionStart();
    }
    

}
export default MovementHandler