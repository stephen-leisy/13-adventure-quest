import { resetUserProfile } from './results-utils.js';

const gameResults = JSON.parse(localStorage.getItem('USER'));
const p = document.querySelector('p');

const div = document.querySelector('#end-journey-meassage');

if ((gameResults.win >= 3 || gameResults.hp > 0)) {
    p.textContent = `Congrats ${gameResults.name} the ${gameResults.character}! This game was no walk in the park but you made it to the other side of the park and found your buds with ${gameResults.hp} health points and ${gameResults.gold} gold bars. Thats pretty good I'd say.`;

    div.append(p);
}

if (gameResults.hp <= 0) {
    p.textContent = `Sorry ${gameResults.name} the ${gameResults.character} you tragically passed away in the park with ${gameResults.hp} health points and ${gameResults.gold} gold bars. May your legend live on forever.`;

    div.append(p);
}

const startOverButton = document.createElement('button');
startOverButton.textContent = 'Play Again?';
div.append(startOverButton);


startOverButton.addEventListener('click', () => {
    resetUserProfile();
    window.location = '../';
});
