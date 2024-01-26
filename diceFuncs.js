function DiceThrow() {
    return new Promise(resolve => {
      let throwContainer = document.createElement('div');
      throwContainer.classList.add('throwContainer');
      document.body.appendChild(throwContainer);
  
      let dice = document.createElement('img');
      dice.classList.add('diceImg');
      dice.src = `imgs/dice/3.png`;
  
      throwContainer.appendChild(dice);
      let rolls = Math.floor(Math.random() * 9) + 6;  
      setTimeout(() => {
        rollDice(rolls, dice).then(result => {
          resolve(result);
        });
      }, 1500);
    });
  }
  
function rollDice(rolls, dice) {
  return new Promise(resolve => {
    if (rolls > 0) {
    let num;
    do {
        num = Math.floor(Math.random() * 5) + 1;
    } while (num == dice.dataset.num); 
    dice.src = `imgs/dice/${num}.png`;
    dice.dataset.num = num;

    setTimeout(() => {
        rollDice(--rolls, dice).then(result => {
        resolve(result);
        });
    }, 150);
    } else {
    resolve(dice.dataset.num);
    }
});
}
export default DiceThrow;
