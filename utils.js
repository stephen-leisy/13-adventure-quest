
export function renderIntroScreen() {
    const ul = document.getElementById('user-data-window');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    // initialize state

    const nameSpan = document.createElement('span');
    nameSpan.textContent = 'What is your name, fearless adventurer?';
    const nameForm = document.createElement('input');
    nameForm.name = `name`;

    const player1NameSpan = document.createElement('span');
    player1NameSpan.textContent = 'cat';
    const player1Selector = document.createElement('input');
    player1Selector.type = 'radio';
    player1Selector.value = 'cat';
    player1Selector.name = 'character';
    player1NameSpan.class = '';

    const player2NameSpan = document.createElement('span');
    player2NameSpan.textContent = 'dog';
    const player2Selector = document.createElement('input');
    player2Selector.type = 'radio';
    player2Selector.value = 'dog';
    player2Selector.name = 'character';

    const player3NameSpan = document.createElement('span');
    player3NameSpan.textContent = 'racoon';
    const player3Selector = document.createElement('input');
    player3Selector.type = 'radio';
    player3Selector.value = 'racoon';
    player3Selector.name = 'character';

    const player4NameSpan = document.createElement('span');
    player4NameSpan.textContent = 'guinea pig';
    const player4Selector = document.createElement('input');
    player4Selector.type = 'radio';
    player4Selector.value = 'racoon';
    player4Selector.name = 'character';


    li1.append(nameSpan, nameForm);
    li2.append(player1NameSpan, player1Selector);
    li3.append(player2NameSpan, player2Selector);
    li4.append(player3NameSpan, player3Selector);
    li5.append(player4NameSpan, player4Selector);

    const enterButton = document.createElement('button');
    enterButton.textContent = 'lets play!';

    ul.append(li1, li2, li3, li4, li5, enterButton);

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form); //eslint-disable-line

        const userFormData = {
            name: formData.get('name'),
            character: formData.get('character'),
            hp: 50,
            gold: 0,
            win: 0,
            completed: {},
        };

        localStorage.setItem('USER', JSON.stringify(userFormData));

        window.location = '../map/';

    });


    return ul;

}