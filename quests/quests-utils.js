
export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}

export function updateUserStats() {
    const caughtUserData = JSON.parse(localStorage.getItem('USER'));
    caughtUserData.hp += userChoice.hp;
    caughtUserData.gold += userChoice.gold;
    caughtUserData.win++;
    caughtUserData.completed[quest.id] = quest.id;
    localStorage.setItem('USER', JSON.stringify(caughtUserData)
    );
    window.location = '../map';
}