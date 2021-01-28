// import quests from '../data.js';
import questData from '../data.js';
import { strikeThrough } from './map-utils.js';


const listArea = document.querySelector('ul');
const user = JSON.parse(localStorage.getItem('USER'));

if (user.win >= 3 || user.hp <= 0) {
    window.location = '../results';
}


for (let quest of questData) {
    const anchor = document.createElement('a');
    const li = document.createElement('li');

    anchor.textContent = quest.title;
    anchor.href = `../quests/?id=${quest.id}`;

    let title = quest.title;
    console.log(title);
    if (user.completed[quest.id] === quest.id) {
        anchor.textContent = strikeThrough(title);
        anchor.href = 'javascript: void(0)';
    }
    li.append(anchor);
    listArea.append(li);
    console.log(quest.id);

}

