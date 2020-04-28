var shown;
var isConnected = false;

$(document).ready(function () {
    //HIDE: game, contents
    $('.game').css('display', 'none');
    $('.col').css('display', 'none');

    //SHOW: menu, welcome
    showMenu();
    // $('.content').css('display', 'none');
    
    //STORAGE INITIALIZATION:
    sessionStorage.clear();
    localStorage.clear();
    buildUsersList();
})

function hideContent() {
    $('.content').css('display', 'none');
}

function play() {
    $('.content').css('display', 'none');
    $('#game_grid').css('display', 'block');
    $(document).on(
        'keydown',
        function (event) {
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
        $('#welcome_msg').html('Welcome <b>' + user.fname + '!</b>');
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

// Disable arrow key scrolling in users browser
window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);