var shown;

$(document).ready(function () {
    $('.col').css('display', 'none');
    show('welcome');

    // $('.content').css('display', 'none');
    // setTimeout('load_page()', 1000);

})


function hideContent() {
    $('.content').css('display', 'none');
}

function load_page() {
    $('.content').css('display', 'block');
    show('welcome');
}

function play() {
    $('.allSite').css('background', 'white');
    $('#game_grid').css('display', 'block');
    $('.content').css('display', 'none');
    // $('#menu').css('display','none');
    $(shown).css('display', 'none');
    shown = game;
    $(document).on( 
        'keydown', function(event) { 
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
}



// Login : Date Picker //
$(function () {
    $("#datepicker").datepicker();
});



