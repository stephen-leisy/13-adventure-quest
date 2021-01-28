
export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}

export function incrementData(caughtUserData, userChoice) {
    caughtUserData.hp += userChoice.hp;
    caughtUserData.gold += userChoice.gold;
    caughtUserData.win++;

}