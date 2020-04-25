var shown;
var isConnected = false;

$(document).ready(function() {
    //HIDE: game, contents
    $('.game').css('display', 'none');
    $('.col').css('display', 'none');

    //SHOW: menu, welcome
    showMenu();

    sessionStorage.clear();
    localStorage.clear();
    buildUsersList();
})

function btn_startgame() {
    if (this.isConnected)
        play();
    else
        alert("please connect first.");

}

function hideContent() {
    $('.content').css('display', 'none');
}

function play() {
    $('#game_grid').css('display', 'block');
    $('.content').css('display', 'none');

    $(document).on(
        'keydown',
        function(event) {
            if (event.key == "Escape") {
                showMenu();
            }
        });
}

function show(obj) {
    $('#' + shown).css('display', 'none');
    $('#' + obj).css('display', 'block');
    $('#button_' + shown).removeClass('active');
    $('#button_' + obj).addClass('active');
    shown = obj;
}

function showContent() {
    $('.content').css('display', 'block');
}

function showMenu() {
    $('.content').css('display', 'block');
    if (isConnected) {
        $('#menu1').css('display', 'none');
        $('#menu2').css('display', 'block');
        $('#btn_logoff').css('display', 'block');
        $('#welcome_msg').html('Welcome <b>' + user.username + '!</b>');
        $('#btn_startgame').css('display', 'block');
        show('profile');
    } else {
        $('#menu1').css('display', 'block');
        $('#menu2').css('display', 'none');
        $('#btn_logoff').css('display', 'none');
        $('#welcome_msg').html('Welcome!');
        $('#btn_startgame').css('display', 'none');
        show('welcome');
    }
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