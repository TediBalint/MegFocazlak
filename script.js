const tableContainer = document.querySelector('.tableContainer');

class Card{
    // rarity like in style.css (bronze, bronze-rare...)
    constructor(x,y,rarity, nation, club, name, pos,stats){
        this.card = document.createElement('div');
        this.card.classList.add('card', rarity);
        tableContainer.appendChild(this.card);
        this.overall = this.getOverall(stats);

        this.makeContainers();
        this.addImage(`imgs/players/${name}.png`);
        this.addTeams(nation,club,pos);
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
        imgElement.src = img;
        imgElement.className = 'cardImage';
        document.querySelector('.cardImageContainer').appendChild(imgElement)
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
        nationImg.className = 'teamsImg'

        const clubImg = document.createElement('img');
        clubImg.src = `imgs/clubs/${club}.png`;
        clubImg.className = 'teamsImg'
        
        const teamDivContainer = document.querySelector('.teamContainer');
        teamDivContainer.appendChild(overallDiv);
        teamDivContainer.appendChild(posDiv);
        teamDivContainer.appendChild(nationImg);
        teamDivContainer.appendChild(clubImg);
    }
    addStats(name,stats) 
    {
        console.log(name);
    }
    add
}

const newCard = new Card(0,0,'bronze', 'argentina', 'psg', 'Messi', 'rw', {att:12,mid:12,def:6})
