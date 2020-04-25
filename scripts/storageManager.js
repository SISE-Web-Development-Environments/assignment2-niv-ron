//STORAGE MANAGING:
function getStorage(obj) {
    if (localStorage.getItem(obj)) {
        let retrievedData = localStorage.getItem(obj);
        let a = JSON.parse(retrievedData);
        return a;
    }
}

function buildUsersList() {
    if (localStorage.getItem('users')) {
        this.users = getStorage("users");
        this.passwords = getStorage("passwords");
        this.emails = getStorage("emails");
        this.fNames = getStorage("fnames");
        this.lNames = getStorage("lnames");
        this.birthdays = getStorage("birthdays");
    } else {
        this.users = ['p'];
        this.passwords = ['p'];
        this.emails = [''];
        this.fNames = [''];
        this.lNames = [''];
        this.birthdays = [''];
        updateLocalStorage();
    }
}

function isUserExist(username) {
    for (var i = 0; i < this.users.length; i++) {
        if (username == this.users[i])
            return true;
    }
    return false;
}
