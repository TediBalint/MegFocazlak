const tableContainer = document.querySelector('.tableContainer');

class Card{
    // rarity like in style.css (bronze, bronze-rare...)
    constructor(x,y,rarity, nation, team, name, pos, img,stats){
        this.card = document.createElement('div');
        this.card.classList.add('card', rarity);
        tableContainer.appendChild(this.card);
        this.overall = this.getOverall(stats);

        this.makeContainers();
        this.addImage(img);
        this.addTeams(nation,team,pos);
        this.addStats(name,stats);

        this.card.dataset.x = x;
        this.card.dataset.y = y;
    }
    getOverall(stats){
        return 10;
    }
    makeContainers(){
        const teamContainer = document.createElement('div');
        teamContainer.className = 'teamContainer'

        const imageContainer = document.createElement('div');
        imageContainer.className = 'cardImageContainer'
        

        const clearDiv = document.createElement('div');
        clearDiv.className = 'clear';
        
        this.card.appendChild(teamContainer);
        this.card.appendChild(imageContainer);
        this.card.appendChild(clearDiv);

        const statContainer = document.createElement('div');
        statContainer.className = 'statContainer';

        this.card.appendChild(statContainer);
    }
    addImage(img){
        const imgElement = document.createElement('img');
        imgElement.src = `imgs/${img}`;
        imgElement.className = 'cardImage';
        document.querySelector('.cardImageContainer').appendChild(imgElement)
    }
    addTeams(nation, team,pos){
        const overallDiv = document.createElement('div');
        overallDiv.className = 'teamStat';
        overallDiv.classList.add('overallDiv');
        overallDiv.innerText = this.overall;
        

        const posDiv = document.createElement('div');
        posDiv.className = 'teamStat';
        posDiv.classList.add('posDiv');
        posDiv.innerText = pos.toUpperCase();

        const teamsDiv = document.createElement('div');
        const nationImg = document.createElement('img');
        const clubImg = document.createElement('img');
        

        const teamDiv = document.querySelector('.teamContainer');
        teamDiv.appendChild(overallDiv);
        teamDiv.appendChild(posDiv);

    }
    addStats(name,stats) 
    {
        console.log(name);
    }
    add
}

const newCard = new Card(0,0,'bronze', 'argentina', 'psg', 'messi', 'rw', '1.png', {att:12,mid:12,def:6})
