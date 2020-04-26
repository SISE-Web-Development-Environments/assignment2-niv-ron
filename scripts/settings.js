var keySet = { up: 38, down: 40, left: 37, right: 39 };
var currentKeys = {
    key_up: 38, key_down: 40, key_left: 37, key_right: 39,
    setDefualt: function () {
        this.key_up = 38;
        this.key_Down = 40;
        this.key_Left = 37;
        this.key_right = 39;
        showCurrentKeys();
    },
    changeKeys: function (up, down, left, right) {
        if (right == left || right == down || right == up || left == down || left == up || up == down)
            alert("you cant set the same key for different actions!");
        else {
            this.key_up = up; this.key_Down = down; this.key_Left = left; this.key_right = right; alert("keys changed!");
        }
    }
};

function btn_ChangeKeys(){
    currentKeys.changeKeys(keySet.up, keySet.down, keySet.left, keySet.right);
}


$(document).ready(function () {
    showCurrentKeys();
    listener_setKeys();
});

function showCurrentKeys() {
    document.getElementById("setkeyup").style.backgroundImage = "url('./images/keys/" + currentKeys.key_up + ".png')";
    document.getElementById("setkeydown").style.backgroundImage = "url('./images/keys/" + currentKeys.key_down + ".png')";
    document.getElementById("setkeyleft").style.backgroundImage = "url('./images/keys/" + currentKeys.key_left + ".png')";
    document.getElementById("setkeyright").style.backgroundImage = "url('./images/keys/" + currentKeys.key_right + ".png')";
}

function listener_setKeys() {
    document.getElementById("setkeyleft").addEventListener('keydown', function (event) {
        let key1 = (event.keyCode ? event.keyCode : event.which);
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('./images/keys/" + key1 + ".png')";
        keySet.left = key1;
    });

    document.getElementById("setkeyright").addEventListener('keydown', function (event) {
        let key2 = (event.keyCode ? event.keyCode : event.which);
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('./images/keys/" + key2 + ".png')";
        keySet.right = key2;
    });

    document.getElementById("setkeyup").addEventListener('keydown', function (event) {
        let key3 = (event.keyCode ? event.keyCode : event.which);
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('./images/keys/" + key3 + ".png')";
        keySet.up = key3;
    });

    document.getElementById("setkeydown").addEventListener('keydown', function (event) {
        let key4 = (event.keyCode ? event.keyCode : event.which);
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('./images/keys/" + key4 + ".png')";
        keySet.down = key4;
    });
}