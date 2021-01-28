import { findById } from './quests-utils.js';
import questData from '../data.js';
const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const p = document.querySelector('p');
const form = document.querySelector('form');
// const buttonSpot = document.getElementById('button-spot');



const params = new URLSearchParams(window.location.search);

const questID = params.get('id');

const quest = findById(questData, questID);

h1.textContent = quest.title;
img.src = '';
p.textContent = quest.description;
console.log(quest.choices[0].result);

for (let choice of quest.choices) {
    const choiceButton = document.createElement('input');
    const span = document.createElement('span');
    const label = document.createElement('label');

    choiceButton.type = 'radio';
    choiceButton.name = 'choice';
    choiceButton.value = choice.id;

    span.textContent = choice.description;

    label.append(choiceButton, span);
    form.append(label);
}

const selectButton = document.createElement('button');
selectButton.textContent = 'PROCEED WITH YOUR CHOICE';
form.append(selectButton);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const userChoice = formData.get('choice');
    alert(userChoice);

}); 