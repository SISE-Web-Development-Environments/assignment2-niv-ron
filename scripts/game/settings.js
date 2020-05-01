var chosenMonsters = [];
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
    startNewGame();
    $(document).on(
        'keydown',
        function (event) {
            if (event.key == "Escape") {
                showMenu();
                show('settings')
            }
        });
}

function returnToGame() {
    if (gameIsOn) {
        $('.content').css('display', 'none');
        $('#game_grid').css('display', 'block');
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
    if (time.value < 60) {
        time.value = 60;
        alert("Time for that mission can't be less than 60 seconds");
    } else
        this.timmer = time;
}

function showSettings() {
    document.getElementById("showkeyleft").style.backgroundImage = "url('./images/keys/" + keys.left + ".png')";
    document.getElementById("showkeyright").style.backgroundImage = "url('./images/keys/" + keys.right + ".png')";
    document.getElementById("showkeyup").style.backgroundImage = "url('./images/keys/" + keys.up + ".png')";
    document.getElementById("showkeydown").style.backgroundImage = "url('./images/keys/" + keys.down + ".png')";

    lblName.value = user.username;
    // +" ("+user.fname+ " "+user.lname+")";
}

function updateLifeCounter() {
    $('#live' + lives).css('display', 'none');
    this.lives--;
}

function setBalls() {

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

