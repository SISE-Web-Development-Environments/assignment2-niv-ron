$(document).ready(function () {
    showKeysIcons();
    listener_changingKeysByUser();
});

function showKeysIcons() {
    document.getElementById("keyup").style.backgroundImage = "url('../images/keys/" + keys.up + ".png')";
    document.getElementById("keydown").style.backgroundImage = "url('../images/keys/" + keys.down + ".png')";
    document.getElementById("keyleft").style.backgroundImage = "url('../images/keys/" + keys.left + ".png')";
    document.getElementById("keyright").style.backgroundImage = "url('../images/keys/" + keys.right + ".png')";
}
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
    setDefault: function () {this.up = 38; this.down = 40; this.left = 37; this.right = 39;}
};

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

function btn_startgame() {
    if (this.isConnected) {
        if (btn_saveKeys())
            play();
    }
    else
        alert("please connect first.");
}