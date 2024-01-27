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
        if(Math.abs(this.steps) > 0){
            this.transitionStart();
        }
        else{
            if(this.getNextCard().isPlayer){
                this.currentCard.disableCurrent();
                this.currentCard = this.getNextCard();
                
                this.currentCard.makeCurrent();
            }
            else if(this.getNextCard().isEvo){
                if(this.getNextCard().isEvoAligable(this.currentCard)){
                    for (const stat of Object.keys(this.getNextCard().statsPlus)) {
                        this.currentCard.stats[stat] += this.getNextCard().statsPlus[stat];
                    }
                    console.log(this.getNextCard());
                    console.log(this.currentCard);
                    this.currentCard.updateStats();
                }
                else console.log("Cant evo");
            }
            else{
                if(this.getNextCard().isEffect(this.currentCard)){
                    if(this.getNextCard().isDeadEffect) this.gameLoss();
                    else this.move(parseInt(this.getNextCard().effectMove))
                }
                else{
                    console.log("no effect");
                }
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
        if(nextCard == undefined) this.gameWin();
        return nextCard;
    }
    gameWin(){
        const WinnerCard = document.querySelector('.currentCard')
        const body = document.querySelector('body')
        body.innerHTML = '';
        body.className = 'winBody'
        
        WinnerCard.classList.add('endCard');
        body.appendChild(WinnerCard)

        const winnerText = document.createElement('div');
        winnerText.innerText = 'MEGFOCÁZTÁL';
        winnerText.className = 'winnerTextBig';
        body.appendChild(winnerText);

        const winnerText2 = document.createElement('div');
        winnerText2.innerText = 'Itt a győztes lapod';
        winnerText2.className = 'winnerTextSmall';
        body.appendChild(winnerText2);

        const restartButton = document.createElement('button');
        restartButton.className = 'winRestartButton';
        restartButton.innerText = 'Gyere visszavágó'
        restartButton.addEventListener('click', (e) =>{location.reload()}) 
        body.appendChild(restartButton)
    }
    gameLoss(){
        const body = document.querySelector('body');
        body.innerHTML = '';
        body.className = 'lossBody'

        const loserText = document.createElement('div');
        loserText.innerText = 'Meg lettél focázva';
        loserText.className = 'lossText1';
        body.appendChild(loserText);

        const loserText2 = document.createElement('div');
        loserText2.innerText = 'Sok sikert a következő próbálkozáshoz';
        loserText2.className = 'lossText2';
        body.appendChild(loserText2);

        const restartButton = document.createElement('button');
        restartButton.className = 'lossRestartButton';
        restartButton.innerText = 'Újra próbálkozás'
        restartButton.addEventListener('click', (e) =>{location.reload()}) 
        body.appendChild(restartButton)
        
    }
    transitionStart(){
        if(this.steps >= 0){
            this.currentCard.Move();
            this.steps--;
            this.currentCard.card.addEventListener('transitionend', this.transitionEnd);
        }
        else{
            this.currentCard.MoveBack();
            this.steps++;
            this.currentCard.card.addEventListener('transitionend', this.transitionEnd);
        }
        
    }
    move(num){
        this.steps = num;
        this.transitionStart();
    }  

}
export default MovementHandler