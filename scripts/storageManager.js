var users;
var passwords;
var emails;
var birthdays;
var fnames;
var lnames;

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
        this.fnames = getStorage("fnames");
        this.lnames = getStorage("lnames");
        this.birthdays = getStorage("birthdays");
    } else {
        this.users = ['p'];
        this.passwords = ['p'];
        this.emails = ['inbalros@post.bgu.ac.il'];
        this.fnames = ['Inbal'];
        this.lnames = ['Roshanski'];
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

function updateLocalStorage() {
    localStorage.clear();
    localStorage.setItem("users", JSON.stringify(this.users));
    localStorage.setItem("passwords", JSON.stringify(this.passwords));
    localStorage.setItem("emails", JSON.stringify(this.emails));
    localStorage.setItem("birthdays", JSON.stringify(this.birthdays));
    localStorage.setItem("fnames", JSON.stringify(this.fnames));
    localStorage.setItem("lnames", JSON.stringify(this.lnames));
}

function areCorrectUsersInfoSaved() {
    let users = localStorage.getItem('users');
    let passwords = localStorage.getItem('passwords');
    let fnames = localStorage.getItem('fnames');
    let lnames = localStorage.getItem('lnames');
    let birthdays = localStorage.getItem('birthdays');
    let emails = localStorage.getItem('emails');
    
    if (users && passwords && fnames && lnames && birthdays && emails) {
        if (users[0] == 'p' && passwords[0] == 'p')
            return true;
    }
    return false;
}