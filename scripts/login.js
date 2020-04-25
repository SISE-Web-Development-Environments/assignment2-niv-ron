var users;
var passwords;
var emails;
var birthdays;
var fNames;
var lNames;

//LOGIN FIELDS:
var loginFormFields;
var user;



//LOGIN:
function connect_btn() {
    getLoginFields();
    $(".error").remove();
    if (connect(loginFormFields.username, loginFormFields.pass)) {
        showMenu();
    } else {
        if (!isUserExist(loginFormFields.username))
            $('#login_username').after('<span class="error">User is not exist.</span>');
        else {
            $('#login_pass').after('<span class="error">Wrong password.</span>');
        }
    }
}

function getLoginFields() {
    this.loginFormFields = {
        username: $('#login_username').val(),
        pass: $('#login_pass').val()
    };
}

function connect(username, password) {
    if (isAuthentication(username, password)) {
        //get this user info:
        let index = getUserIndex(username);
        this.user = {
            username: JSON.parse(localStorage["users"])[index],
            pass: JSON.parse(localStorage["passwords"])[index],
            email: JSON.parse(localStorage["emails"])[index],
            fname: JSON.parse(localStorage["fNames"])[index],
            lname: JSON.parse(localStorage["lNames"])[index],
            bday: JSON.parse(localStorage["birthdays"])[index]
        };


        setProfileDiv(username);
        isConnected = true;
        return true;
    }
    return false;
}

function disconnect() {
    isConnected = false;
    this.user = '';
    showMenu();

    $('#game_grid').css('display', 'none');
    $('.content').css('display', 'block');
}

function isAuthentication(username, password) {

    if (isUserExist(username)) {
        let index = getUserIndex(username);
        return password == passwords[index];
    }
    return false;
}


function getUserIndex(username) {
    for (var i = 0; i < users.length; i++) {
        if (users[i] == username)
            return i;
    }
    return 'false';
}

function isUserExist(username) {
    for (var i = 0; i < users.length; i++) {
        if (users[i] == username)
            return true;
    }
    return false;
}

function setProfileDiv(username) {
    let index = getUserIndex(username);
    $('#profile_username').attr('placeholder', this.user.username);
    $('#profile_pass').attr('placeholder', this.user.pass);
    $('#profile_email').attr('placeholder', this.user.email);
    $('#profile_fname').attr('placeholder', this.user.fname);
    $('#profile_lname').attr('placeholder', this.user.lname);
    $('#profile_bday').attr('placeholder', this.user.bday);
}