class Card{
    // rarity like in style.css (bronze, bronze-rare...)
    constructor(line, isCurrent){
        
        const data = line.trim().split(';');
        this.isCurrent = isCurrent;
        this.isPlayer = data[10];
        if(this.isPlayer) this.createPlayerCard(data);
        else this.createGameCard(data);
    }
    createPlayerCard(data){
        this.card = document.createElement('div');
        if(!this.isCurrent) this.card.classList.add('currentCard');
        this.card.classList.add('card', data[2]);

        this.x = parseInt(data[0]);
        this.y = parseInt(data[1]);       
        document.querySelector('.tableContainer').appendChild(this.card);
       
        
        const stats = {
            att: parseInt(data[7]),
            mid: parseInt(data[8]),
            def: parseInt(data[9])
        };

        
        
        this.overall = this.getOverall(stats);
        this.makeContainers();
        this.addImage(`imgs/players/${data[5]}.png`);
        this.addTeams(data[3],data[4],data[6]);
        this.addStats(data[5],stats);
        
        this.updatePos()
    }
    createGameCard(data){
        this.card = document.createElement('div');
        this.card.classList.add('card');
        this.card.classList.add('gameCard');
        this.x = parseInt(data[0]);
        this.y = parseInt(data[1]);
        this.updatePos();

        let cardImage = document.createElement('img');
        cardImage.src = 'imgs/Florentino Perez.jpg';
        cardImage.classList.add('gameCardImage')
        this.card.appendChild(cardImage);

        let cardText = document.createElement('div');
        cardText.classList.add('gameCardText');
        cardText.innerText = data[2];
        this.card.appendChild(cardText);

        document.querySelector('.tableContainer').appendChild(this.card);
    }
    getOverall(stats){
        return parseInt(Object.values(stats).reduce((sum, value) => sum + value, 0)/Object.values(stats).length);
    }
    setNextPos(){
        if(this.y % 2 == 0){
            if(this.x < 10) this.x++;
            else this.y++;
        }
        else{
            if(this.x > 1) this.x--;
            else this.y++;
        }
    }
    updatePos(){
        if(this.x < 0) this.card.style.left = ((this.x)*140-10) + "px";
        else this.card.style.left = ((this.x)*140 + 10) + "px";
        this.card.style.top = (this.y)*180+10 + "px";
    }
    Move(){
        this.updatePos(this.setNextPos());
    }
    makeCurrent(){
        this.isCurrent = true;
        this.card.classList.add('currentCard');
    }
    disableCurrent(){
        this.isCurrent = false;
        this.card.classList.remove('currentCard');
    }
    makeContainers(){
        this.teamContainer = document.createElement('div');
        this.teamContainer.className = 'teamContainer'

        this.imageContainer = document.createElement('div');
        this.imageContainer.className = 'cardImageContainer'
        

        const clearDiv = document.createElement('div');
        clearDiv.className = 'clear';
        
        this.card.appendChild(this.teamContainer);
        this.card.appendChild(this.imageContainer);
        this.card.appendChild(clearDiv);

        this.statContainer = document.createElement('div');
        this.statContainer.className = 'statContainer';

        this.card.appendChild(this.statContainer);
    }
    addImage(img){
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.className = 'cardImage';
        this.imageContainer.appendChild(imgElement)
    }
    addTeams(nation, club,pos){
        const overallDiv = document.createElement('div');
        overallDiv.className = 'overallDiv';
        overallDiv.innerText = this.overall;
        
        const posDiv = document.createElement('div');
        posDiv.className = 'posDiv';
        posDiv.innerText = pos.toUpperCase();

        const nationImg = document.createElement('img');
        nationImg.src = `imgs/nations/${nation}.png`;
        nationImg.className = 'flagImg'

        const clubImg = document.createElement('img');
        clubImg.src = `imgs/clubs/${club}.png`;
        clubImg.className = 'teamsImg'
        
        this.teamContainer.appendChild(overallDiv);
        this.teamContainer.appendChild(posDiv);
        this.teamContainer.appendChild(nationImg);
        this.teamContainer.appendChild(clubImg);
    }
    addStats(name,stats) 
    {
        const nameDiv = document.createElement('div');
        nameDiv.innerText = name;
        nameDiv.className = 'nameDiv';
        

        const StatDiv = document.createElement('div');
        StatDiv.className = "statDiv";

        const attDiv = document.createElement('div');
        attDiv.innerText = `${stats.att} Attacking`

        const midDiv = document.createElement('div');
        midDiv.innerText = `${stats.mid} Midfield`

        const defDiv = document.createElement('div');
        defDiv.innerText = `${stats.def} Defending`

        StatDiv.appendChild(attDiv);
        StatDiv.appendChild(midDiv);
        StatDiv.appendChild(defDiv);

        this.statContainer.appendChild(nameDiv);
        this.statContainer.appendChild(StatDiv);
    }
    static getCards(cardData){
        let cards = []
        cardData.forEach(row => {
            cards.push(new Card(row,true));
        });
        return cards;
    }
    
    
}

export default Card;    