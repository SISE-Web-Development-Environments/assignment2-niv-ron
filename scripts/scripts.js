var shown;
var isConnected = false;

$(document).ready(function () {
    //HIDE: game, contents
    $('.game').css('display', 'none');
    $('.col').css('display', 'none');

    //SHOW: menu, welcome
    showMenu();

    localStorage.clear();
    buildUsersList();
})

function btn_startgame() {
    if (this.isConnected)
        play();
    else
        alert();
        
}


function updateLocalStorage() {
    localStorage.clear();
    localStorage.setItem("users", JSON.stringify(this.users));
    localStorage.setItem("passwords", JSON.stringify(this.passwords));
    localStorage.setItem("emails", JSON.stringify(this.emails));
    localStorage.setItem("birthdays", JSON.stringify(this.birthdays));
    localStorage.setItem("fNames", JSON.stringify(this.fNames));
    localStorage.setItem("lNames", JSON.stringify(this.lNames));
}

function hideContent() {
    $('.content').css('display', 'none');
}

function play() {
    // if (shown != 'game') {
    //     $(shown).css('display', 'none');
    //     shown = game;
    // }

    $('#game_grid').css('display', 'block');
    $('.content').css('display', 'none');
    // $('#menu').css('display', 'none');

    $(document).on(
        'keydown', function (event) {
            if (event.key == "Escape") {
                showMenu();
                // $("#login > #btn_play").css('display', 'none');
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
    // alert("ron");
    $('.content').css('display', 'block');
    if (isConnected) {
        $('#menu1').css('display', 'none');
        $('#menu2').css('display', 'block');
        $('#btn_logoff').css('display', 'block');
        $('#welcome_msg').html('Welcome <b>' + user.username + '!</b>');
    } else {
        $('#menu1').css('display', 'block');
        $('#menu2').css('display', 'none');
        $('#btn_logoff').css('display', 'none');
        $('#welcome_msg').html('Welcome!');
    }
    show('welcome');
}






