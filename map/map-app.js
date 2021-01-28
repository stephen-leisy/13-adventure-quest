import quests from '../data.js';
import questData from '../data.js';


const listArea = document.querySelector('ul');
const user = JSON.parse(localStorage.getItem('USER'));

for (let quest of questData) {
    const anchor = document.createElement('a');
    const li = document.createElement('li');

    anchor.textContent = quest.title;
    anchor.href = `../quests/?id=${quest.id}`;
    li.append(anchor);
    listArea.append(li);

}