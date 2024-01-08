class Card{
    // rarity like in style.css (bronze, bronze-rare...)
    constructor(line){
        const data = line.trim().split(';');
        this.card = document.createElement('div');
        this.card.classList.add('card', data[2]);
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

        this.card.dataset.x = parseInt(data[0]);
        this.card.dataset.y = parseInt(data[1]);

        
    }
    static getCards(cardData){
        let cards = []
        cardData.forEach(row => {
            cards.push(new Card(row));
        });
        return cards;
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

        document.querySelector('.statContainer').appendChild(nameDiv);
        document.querySelector('.statContainer').appendChild(StatDiv);
    }
    
}

export default Card;    