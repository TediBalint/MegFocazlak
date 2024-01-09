let cardData = []
const colors = ['bronze', 'bronze-rare', 'silver', 'silver-rare', 'gold', 'gold-rare'];
for (let x = 0; x < 10; x++) {
   for (let y = 0; y < 5; y++) {
    cardData.push(`${x};${y};${colors[parseInt(Math.random()*6)]};argentina;psg;Messi;rw;12;12;6`)
   }
    
}

export default cardData;