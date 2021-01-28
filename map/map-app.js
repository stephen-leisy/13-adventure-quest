// import quests from '../data.js';
import questData from '../data.js';
import { getUserStats } from '../utils.js';
import { strikeThrough } from './map-utils.js';


const listArea = document.querySelector('ul');
const user = getUserStats();

const healthStats = document.querySelector('#header-hp-gold');
const p = document.createElement('p');

if (user.win >= 3 || user.hp <= 0) {
    window.location = '../results';
}




for (let quest of questData) {
    const anchor = document.createElement('a');
    const li = document.createElement('li');

    anchor.textContent = quest.title;
    anchor.href = `../quests/?id=${quest.id}`;

    let title = quest.title;

    if (user.completed[quest.id] === quest.id) {
        anchor.textContent = strikeThrough(title);
        anchor.href = 'javascript: void(0)';
    }
    li.append(anchor);
    listArea.append(li);

}
p.textContent = `${user.name} the ${user.character}: HP ${user.hp} GOLD ${user.gold}`;
healthStats.append(p);

