var p5Color = "red";
var p15Color = "blue";
var p25Color = "yellow";
var timmer = 60;
var keys = {
    isCorrect: true,
    up: 38, down: 40, left: 37, right: 39,
    setDefault: function () {
        this.up = 38; this.down = 40; this.left = 37; this.right = 39;
        inputKeys.setDefault();
        showKeysIcons();
        return true;
    },
    changeKeys: function (up, down, left, right) {
        if (right == left || right == down || right == up || left == down || left == up || up == down) {
            alert("you cant set the same key for different actions!");
            return false;
        }
        else {
            this.up = up; this.down = down; this.left = left; this.right = right;
            return true;
        }
    }
};
var inputKeys = {
    up: keys.up, down: keys.down, left: keys.left, right: keys.right,
    setDefault: function () { this.up = 38; this.down = 40; this.left = 37; this.right = 39; }
};

$(document).ready(function () {
    showKeysIcons();
    listener_changingKeysByUser();
});

function btn_startNewGame() {
    $('.content').css('display', 'none');
    $('#game_grid').css('display', 'block');
    $(document).on(
        'keydown',
        function (event) {
            if (event.key == "Escape") {
                stopGame();
                showMenu();
                show('settings')
            }
        }
    );
    // init paclive show
    initLifeCounter();
    startNewGame();
}

function returnToGame() {
    if (gameIsOn) {
        $('.content').css('display', 'none');
        $('#game_grid').css('display', 'block');
        continueGame();
    }
}

function btn_saveKeys() {
    return keys.changeKeys(inputKeys.up, inputKeys.down, inputKeys.left, inputKeys.right);
}

function listener_changingKeysByUser() {
    document.getElementById("keyleft").addEventListener('keydown', function (event) {
        let key1 = (event.keyCode ? event.keyCode : event.which);
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('./images/keys/" + key1 + ".png')";
        inputKeys.left = key1;
    });

    document.getElementById("keyright").addEventListener('keydown', function (event) {
        let key2 = (event.keyCode ? event.keyCode : event.which);
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('./images/keys/" + key2 + ".png')";
        inputKeys.right = key2;
    });

    document.getElementById("keyup").addEventListener('keydown', function (event) {
        let key3 = (event.keyCode ? event.keyCode : event.which);
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('./images/keys/" + key3 + ".png')";
        inputKeys.up = key3;
    });

    document.getElementById("keydown").addEventListener('keydown', function (event) {
        let key4 = (event.keyCode ? event.keyCode : event.which);
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('./images/keys/" + key4 + ".png')";
        inputKeys.down = key4;
    });
}

function showKeysIcons() {
    document.getElementById("keyup").style.backgroundImage = "url('./images/keys/" + keys.up + ".png')";
    document.getElementById("keydown").style.backgroundImage = "url('./images/keys/" + keys.down + ".png')";
    document.getElementById("keyleft").style.backgroundImage = "url('./images/keys/" + keys.left + ".png')";
    document.getElementById("keyright").style.backgroundImage = "url('./images/keys/" + keys.right + ".png')";
}

function setGhost(ghostID) {
    $('#' + ghostID).css('border', '2px solid blue');
}

function setTime(time) {
    if (time < 60) {
        $("#setTimmer").val(60);
        
        alert("Time for that mission can't be less than 60 seconds");
    } 
    else{
        timmer = time;
    }
}

function showSettings() {
    document.getElementById("showkeyleft").style.backgroundImage = "url('./images/keys/" + keys.left + ".png')";
    document.getElementById("showkeyright").style.backgroundImage = "url('./images/keys/" + keys.right + ".png')";
    document.getElementById("showkeyup").style.backgroundImage = "url('./images/keys/" + keys.up + ".png')";
    document.getElementById("showkeydown").style.backgroundImage = "url('./images/keys/" + keys.down + ".png')";

    lblName.value = user.username;
    // +" ("+user.fname+ " "+user.lname+")";
}

function initLifeCounter(){
    $('#live1').css('opacity', '1.0');
    $('#live2').css('opacity', '1.0');
    $('#live3').css('opacity', '1.0');
    $('#live4').css('opacity', '1.0');
    $('#live5').css('opacity', '1.0');
}

function decreaseLifeCounter() {
    $('#live' + lives).css('opacity', '0.0');
    lives--;
}

function increaseLifeCounter(){
    $('#live' + (lives+1)).css('opacity', '1.0');
    lives++;
}

function setBalls() {
    p5Color = $('#setp5').val();
    p15Color = $('#setp15').val();
    p25Color = $('#setp25').val();
}

function btnRandom() {
    // set random time:
    setTimmer.value = Math.floor(Math.random() * 120) + 60;

    // set random balls:
    let colors = ['blue', 'yellow', 'red'];
    let p5 = colors[Math.floor(Math.random() * 3)];
    let p15 = colors[Math.floor(Math.random() * 3)];

    while (p5 == p15) {
        p15 = colors[Math.floor(Math.random() * 3)];
    }

    let p25;
    for (var i = 0; i < colors.length; i++) {
        if (colors[i] != p5 && colors[i] != p15)
            p25 = colors[i];
    }
    setp5.value = p5;
    setp15.value = p15;
    setp25.value = p25;

    // set random ghosts number:
    setGhostNumber.value = 1 + (Math.floor(Math.random() * 4));
}

function setNumOfGhosts(num){
    if (num >4 || num < 1){
        $('#setGhostNumber').val(1);
        alert("The minimum number of ghost is 1 and the maximum is 4");
    }
    else{
        num_of_monsters = num;
    }
}

