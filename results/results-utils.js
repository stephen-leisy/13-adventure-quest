
const newUser = [];

export function resetUserProfile() {
    localStorage.setItem('USER', JSON.stringify(newUser));
}