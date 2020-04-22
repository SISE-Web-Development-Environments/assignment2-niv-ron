var users;
var passwords;
getLocalStorage();

function getLocalStorage() {
    users = localStorage.getItem('users');
    passwords = localStorage.getItem('passwords');
    if (users == null) {
        users = ['p'];
        passwords = ['p'];
    }
}

function getUserIndex(username) {
    for (var i = 0; i < users.length; i++) {
        if (users[i] == username)
            return i;
    }
    return 'false';
}

function isAuthentication(username, password) {
    let index = getUserIndex(username);
    if (passwords[index] == password)
        return true;
    else
        return false;
}

function insertNewUser(username, password) {
    users.push(username);
    passwords.push(password);
}

function isContainNumber(pass) {
    for (var i = 0; i < pass.length; i++) {
        let char = pass.charAt(i);
        if ((char >= '0' && char <= '9'))
            return true;
    }
    return false;
}

function isContainLetter(pass) {
    for (var i = 0; i < pass.length; i++) {
        let char = pass.charAt(i);
        if (char.toUpperCase() != char.toLowerCase())
            return true;
    }
    return false;
}

function isLegalPassword(password) {
    let pass = password + "";
    if (pass.length < 6)
        return false;
    return isContainLetter(pass) && isContainNumber(pass);

}

function isUserExist(username) {
    for (var i = 0; i < users.length; i++) {
        if (users[i] == username)
            return true;
    }
    return 'false';
}

function newUser(username, password) {
    if (isUserExist(username) == true)
        return false;
    insertNewUser(username, password)
    setInLocalStorage();
    return true;
}

function setInLocalStorage() {
    localStorage.setItem('users', users);
    localStorage.setItem('passwords', passwords);
}